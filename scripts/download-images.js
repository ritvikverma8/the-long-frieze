#!/usr/bin/env node
/**
 * Downloads every artifact image referenced in js/data.js from its
 * Wikimedia Commons fallback URL into the local /images folder, so the
 * site can be fully self-hosted instead of hotlinking Wikimedia.
 *
 * Run this once from the project root, on a machine with normal internet
 * access (it won't work inside a sandboxed/offline environment):
 *
 *   node scripts/download-images.js
 *
 * Re-run any time you add a new artifact to js/data.js — it skips files
 * that already exist, so it's safe to run repeatedly.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const eras = require('../js/data.js');
const outDir = path.join(__dirname, '..', 'images');

if(!fs.existsSync(outDir)){
  fs.mkdirSync(outDir, { recursive: true });
}

function download(url, destPath, redirectsLeft){
  redirectsLeft = redirectsLeft === undefined ? 5 : redirectsLeft;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TheLongFrieze/1.0 (educational project)' } }, (res) => {
      if([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectsLeft > 0){
        res.resume();
        resolve(download(res.headers.location, destPath, redirectsLeft - 1));
        return;
      }
      if(res.statusCode !== 200){
        res.resume();
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => fileStream.close(resolve));
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run(){
  const jobs = [];
  eras.forEach(era => {
    era.artifacts.forEach(artifact => {
      if(!artifact.image || !artifact.imageFallback) return;
      const destPath = path.join(__dirname, '..', artifact.image);
      jobs.push({ url: artifact.imageFallback, destPath, name: artifact.name });
    });
  });

  console.log(`Found ${jobs.length} images to fetch.\n`);

  let ok = 0, skipped = 0, failed = 0;

  for(const job of jobs){
    if(fs.existsSync(job.destPath)){
      console.log(`  skip   ${path.basename(job.destPath)} (already exists)`);
      skipped++;
      continue;
    }
    try{
      await download(job.url, job.destPath);
      console.log(`  done   ${path.basename(job.destPath)}`);
      ok++;
    } catch(err){
      console.log(`  FAILED ${path.basename(job.destPath)} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDownloaded ${ok}, skipped ${skipped} (already present), failed ${failed}.`);
  if(failed > 0){
    console.log('For any failures, open the imageFallback URL in a browser, save the image manually into /images with the matching filename, or re-run this script (transient network errors are common).');
  }
}

run();
