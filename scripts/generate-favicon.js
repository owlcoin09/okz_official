const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../src/app/icon.svg');
  const icoPath = path.join(__dirname, '../src/app/favicon.ico');
  const publicIcoPath = path.join(__dirname, '../public/favicon.ico');
  
  try {
    // 读取 SVG 文件
    const svgBuffer = fs.readFileSync(svgPath);
    
    // 生成多个尺寸的 PNG（ICO 需要多个尺寸以获得最佳兼容性）
    // 谷歌要求至少 48x48，添加更多尺寸以提高兼容性
    const sizes = [16, 32, 48, 64];
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
    
    // 保存 ICO 文件到 app 目录（Next.js 自动处理）
    fs.writeFileSync(icoPath, icoBuffer);
    
    // 同时保存到 public 目录（确保静态导出时也能访问）
    fs.writeFileSync(publicIcoPath, icoBuffer);
    
    console.log('✅ Favicon.ico generated successfully!');
    console.log(`   Location: ${icoPath}`);
    console.log(`   Public: ${publicIcoPath}`);
    console.log(`   Sizes: ${sizes.join(', ')}px`);
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();

