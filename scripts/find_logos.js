const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function getHtml(url) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, timeout: 10000 }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function findLogos(siteUrl) {
  try {
    const html = await getHtml(siteUrl);
    const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let match;
    const found = [];
    while ((match = regex.exec(html)) !== null) {
      if (/logo|brand/i.test(match[0])) {
        found.push(match[1]);
      }
    }
    console.log(siteUrl, found.slice(0, 4));
  } catch (e) {
    console.log(siteUrl, 'Error:', e.message);
  }
}

async function main() {
  await findLogos('https://www.lpu.in');
  await findLogos('https://www.mangalayatan.in');
  await findLogos('https://jmi.ac.in');
}

main();
