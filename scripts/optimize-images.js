const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 80;
const WIDTHS = [640, 768, 1024, 1280, 1536];

async function optimizeImages(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await optimizeImages(filePath);
      continue;
    }

    const ext = path.extname(file.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
      continue;
    }

    try {
      const stats = await stat(filePath);
      if (stats.size < 1024 * 10) continue; // Skip files smaller than 10KB

      const outputDir = path.join(path.dirname(filePath), 'optimized');
      await mkdir(outputDir, { recursive: true });

      const filename = path.basename(file.name, ext);
      
      // Generate WebP version
      await sharp(filePath)
        .webp({ quality: QUALITY })
        .toFile(path.join(outputDir, `${filename}.webp`));
      
      console.log(`✅ Optimized: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${filePath}:`, error);
    }
  }
}

console.log('🔄 Optimizing images...');
optimizeImages(PUBLIC_DIR)
  .then(() => console.log('✨ Image optimization complete!'))
  .catch(console.error);
