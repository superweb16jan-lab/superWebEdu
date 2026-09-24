const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'universities');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.google.com/'
};

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = new URL(redirectUrl, u.origin).href;
        }
        return downloadUrl(redirectUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const sz = fs.statSync(dest).size;
          if (sz < 500) {
            fs.unlink(dest, () => {});
            reject(new Error(`File too small: ${sz} bytes`));
          } else {
            resolve(sz);
          }
        });
      });
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

// Direct known high-res official university logo URLs
const universities = [
  {
    id: 'ignou',
    name: 'IGNOU',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/IGNOU-Logo-2.svg/500px-IGNOU-Logo-2.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/IGNOU_logo.svg/500px-IGNOU_logo.svg.png',
      'http://www.ignou.ac.in/images/logo.png'
    ]
  },
  {
    id: 'amity',
    name: 'Amity University',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amity_University_Mumbai_%28cropped%29.png/500px-Amity_University_Mumbai_%28cropped%29.png',
      'https://www.amity.edu/images/amity-logo.png',
      'https://amityonline.com/assets/images/amity_online_logo.svg'
    ]
  },
  {
    id: 'lpu',
    name: 'Lovely Professional University',
    urls: [
      'https://www.lpu.in/images/logo/logo-main.svg',
      'https://www.lpu.in/images/logo/logo-main.png',
      'https://lpude.in/images/lpu-logo.png'
    ]
  },
  {
    id: 'du',
    name: 'Delhi University',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Delhi_University%27s_official_logo.png'
    ]
  },
  {
    id: 'manipal',
    name: 'Manipal University',
    urls: [
      'https://upload.wikimedia.org/wikipedia/en/f/ff/Manipal_University_logo.png',
      'https://manipal.edu/content/dam/manipal/mu/images/logos/manipal_logo.png'
    ]
  },
  {
    id: 'jmi',
    name: 'Jamia Millia Islamia',
    urls: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Jamia_Millia_Islamia_Logo.svg/500px-Jamia_Millia_Islamia_Logo.svg.png'
    ]
  },
  {
    id: 'mangalayatan',
    name: 'Mangalayatan University',
    urls: [
      'https://www.mangalayatan.in/wp-content/themes/mangalayatan/assets/images/logo.png',
      'https://mangalayatan.in/images/mu-logo.png',
      'https://www.mangalayatan.in/wp-content/uploads/2021/04/logo-new.png'
    ]
  },
  {
    id: 'subharti',
    name: 'Subharti University',
    urls: [
      'https://subharti.org/images/logo.png',
      'https://subhartidde.com/wp-content/uploads/2021/04/Subharti-University-Logo.png',
      'https://subharti.org/wp-content/themes/subharti/images/logo.png'
    ]
  },
  {
    id: 'sgvu',
    name: 'Suresh Gyan Vihar University',
    urls: [
      'https://www.gyanvihar.org/assets/images/logo.png',
      'https://sgvude.com/wp-content/uploads/2021/03/SGVU-Logo.png',
      'https://www.gyanvihar.org/images/logo.png'
    ]
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh University',
    urls: [
      'https://www.cuchd.in/images/cu-logo.png',
      'https://www.cuchd.in/about/assets/images/cu-logo.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Chandigarh_University_seal.svg/500px-Chandigarh_University_seal.svg.png'
    ]
  }
];

async function run() {
  for (const uni of universities) {
    let success = false;
    for (const url of uni.urls) {
      try {
        const ext = url.endsWith('.svg') ? '.svg' : '.png';
        const dest = path.join(outDir, `${uni.id}${ext}`);
        console.log(`Trying ${uni.name} from ${url}...`);
        const size = await downloadUrl(url, dest);
        console.log(`✓ SUCCESS: ${uni.id}${ext} (${size} bytes)`);
        success = true;
        break;
      } catch (err) {
        console.log(`Failed ${url}: ${err.message}`);
      }
    }
    if (!success) {
      console.log(`❌ Could not download logo for ${uni.name}`);
    }
  }
}

run();
