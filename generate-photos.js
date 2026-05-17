const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "public/images");

const files = fs
  .readdirSync(imagesDir)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

const largeImages = files.filter(
  (file) =>
    file.endsWith(".webp") &&
    !file.includes("-small")
);

const photos = largeImages.map((file) => {
  const name = path.basename(file, ".webp");

  const previewFile = files.find(
    (f) =>
      f.startsWith(`${name}-small`) &&
      f.endsWith(".webp")
  );

  return {
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    title: name,
    image: `/images/${file}`,
    preview: previewFile
      ? `/images/${previewFile}`
      : `/images/${file}`,
    location: "",
    category: "wildlife",
  };
});

const output = `export const photos = ${JSON.stringify(
  photos,
  null,
  2
)};`;

fs.writeFileSync(
  path.join(__dirname, "app/data/photos.ts"),
  output
);

console.log("photos.ts updated!");