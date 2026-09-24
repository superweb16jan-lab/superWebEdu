const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'universities');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SuperWebSikshaBot/1.0 (edu@superwebsiksha.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'SuperWebSikshaBot/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function getWikiFileUrl(title, isCommons = true) {
  const host = isCommons ? 'commons.wikimedia.org' : 'en.wikipedia.org';
  const apiUrl = `https://${host}/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetchJson(apiUrl);
  const pages = res.query?.pages;
  if (!pages) return null;
  const pageId = Object.keys(pages)[0];
  if (pageId === '-1' || !pages[pageId].imageinfo) return null;
  return pages[pageId].imageinfo[0].url;
}

async function main() {
  const targets = [
    { name: 'ignou', titles: ['File:IGNOU-Logo-2.svg', 'File:IGNOU logo.svg', 'File:IGNOU logo.png'] },
    { name: 'amity', titles: ['File:Amity University Mumbai.png', 'File:Amity University logo.png', 'File:Amity University Logo.jpg'] },
    { name: 'jmi', titles: ['File:Jamia Millia Islamia Logo.svg', 'File:Jamia Millia Islamia seal.svg', 'File:Jamia Millia Islamia logo.png'] },
    { name: 'manipal', titles: ['File:Manipal Academy of Higher Education logo.png', 'File:Manipal University logo.png'] },
    { name: 'chandigarh', titles: ['File:Chandigarh University seal.svg', 'File:Chandigarh University logo.png'] },
    { name: 'mangalayatan', titles: ['File:Mangalayatan University Logo.png', 'File:Mangalayatan University logo.jpg'] },
    { name: 'subharti', titles: ['File:Subharti University logo.png', 'File:Swami Vivekanand Subharti University logo.png'] },
    { name: 'sgvu', titles: ['File:SGVU logo.png', 'File:Suresh Gyan Vihar University logo.png'] }
  ];

  for (const t of targets) {
    let downloaded = false;
    for (const title of t.titles) {
      for (const isCommons of [true, false]) {
        try {
          const url = await getWikiFileUrl(title, isCommons);
          if (url) {
            const ext = path.extname(url).split('?')[0] || '.png';
            const dest = path.join(outDir, `${t.name}${ext}`);
            console.log(`Downloading ${t.name} from ${url}...`);
            await downloadFile(url, dest);
            console.log(`Saved ${t.name}${ext} (${fs.statSync(dest).size} bytes)`);
            downloaded = true;
            break;
          }
        } catch (e) {
          // ignore and try next
        }
      }
      if (downloaded) break;
    }
    if (!downloaded) {
      console.log(`Could not find Wikimedia file for ${t.name}`);
    }
  }
}

main().catch(console.error);
