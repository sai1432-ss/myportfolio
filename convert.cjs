const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

async function convert() {
  for (const file of files) {
    if (file.endsWith('.png')) {
      const filePath = path.join(publicDir, file);
      const webpPath = path.join(publicDir, file.replace('.png', '.webp'));
      
      const isHero = file.includes('hero');
      
      await sharp(filePath)
        .resize({ width: isHero ? 800 : 600, withoutEnlargement: true })
        .webp({ quality: isHero ? 80 : 70 })
        .toFile(webpPath);
        
      fs.unlinkSync(filePath); // delete original
      console.log(`Converted ${file} to WebP`);
    }
  }
}

convert().catch(console.error);
