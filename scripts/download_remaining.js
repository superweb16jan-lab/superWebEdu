const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'universities');

const items = [
  { url: 'https://www.lpu.in/images/logo/LPU-logo-dark.svg', dest: path.join(outDir, 'lpu.svg') },
  { url: 'https://www.mangalayatan.in/admission-open/images/logo.webp', dest: path.join(outDir, 'mangalayatan.webp') },
  { url: 'https://jmi.ac.in/assets/images/logo/logo.svg', dest: path.join(outDir, 'jmi.svg') }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, rejectUnauthorized: false }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode));
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of items) {
    try {
      await download(item.url, item.dest);
      console.log('Downloaded', item.dest, fs.statSync(item.dest).size, 'bytes');
    } catch (e) {
      console.error('Failed', item.url, e.message);
    }
  }
}

run();
