// Simple Node.js script to generate OG image
// Run with: node generate-og-image.js

const fs = require("fs");

console.log(`
🎯 Open Graph Image Setup Complete!

Your metadata has been updated with Open Graph tags. Now you need to create the actual image file.

📋 Options to create /public/og-image.png (1200x630px):

1. 📸 SCREENSHOT METHOD (Easiest):
   - Open: file://${__dirname}/public/og-image.html
   - Set browser window to 1200x630
   - Take screenshot and save as /public/og-image.png

2. 🎨 DESIGN TOOLS:
   - Canva: https://canva.com (search "Open Graph" templates)
   - Figma: Create 1200x630 frame
   - Any image editor with terminal theme

3. 📦 AUTOMATED (if you have puppeteer):
   npm install puppeteer
   Then run this script with puppeteer code

4. 🖼️  USE EXISTING:
   - Rename any 1200x630 image to og-image.png in /public/

📋 What's already done:
✅ Open Graph metadata added to layout.tsx
✅ Twitter Card metadata added
✅ SEO optimization included
✅ HTML template created for reference

🧪 Test your link preview:
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter: https://cards-dev.twitter.com/validator

🎯 Next: Create og-image.png (1200x630) in /public/ folder
`);

// Check if puppeteer is available
try {
  require("puppeteer");
  console.log("\n🤖 Puppeteer detected! Generating image automatically...\n");
  generateImageWithPuppeteer();
} catch (e) {
  console.log(
    "\n💡 To auto-generate: npm install puppeteer && node generate-og-image.js\n"
  );
}

async function generateImageWithPuppeteer() {
  try {
    const puppeteer = require("puppeteer");
    const path = require("path");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(
      `file://${path.join(__dirname, "public", "og-image.html")}`
    );

    // Wait for fonts and animations
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: path.join(__dirname, "public", "og-image.png"),
      fullPage: false,
    });

    await browser.close();

    console.log("✅ og-image.png generated successfully!");
    console.log(
      "🗑️  You can now delete og-image.html and generate-og-image.js"
    );
  } catch (error) {
    console.error("❌ Error generating image:", error.message);
    console.log("💡 Try the manual screenshot method instead");
  }
}
