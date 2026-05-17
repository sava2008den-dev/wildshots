const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public/images");

async function convertImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const inputPath = path.join(inputDir, file);

    const outputFileName =
      path.parse(file).name + ".webp";

    const outputPath = path.join(
      inputDir,
      outputFileName
    );

    await sharp(inputPath)
      .resize({
        width: 2200,
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(`Converted: ${file}`);
  }

  console.log("ALL IMAGES CONVERTED");
}

convertImages();