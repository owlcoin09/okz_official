const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../src/app/icon.svg');
  const icoPath = path.join(__dirname, '../src/app/favicon.ico');
  
  try {
    // 读取 SVG 文件
    const svgBuffer = fs.readFileSync(svgPath);
    
    // 生成多个尺寸的 PNG（ICO 需要多个尺寸以获得最佳兼容性）
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(svgBuffer)
          .resize(size, size, {
            kernel: sharp.kernel.lanczos3
          })
          .png()
          .toBuffer()
      )
    );
    
    // 将多个 PNG 合并成一个 ICO 文件
    const icoBuffer = await toIco(pngBuffers);
    
    // 保存 ICO 文件
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('✅ Favicon.ico generated successfully!');
    console.log(`   Location: ${icoPath}`);
    console.log(`   Sizes: ${sizes.join(', ')}px`);
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();

