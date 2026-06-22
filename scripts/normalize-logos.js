/**
 * Normaliza todas as logos em /public/logos/ para altura fixa de 56px.
 * Mantém proporção original (largura varia). Salva como PNG otimizado.
 *
 * Uso:
 *   npm install sharp   (só na primeira vez)
 *   node scripts/normalize-logos.js
 *
 * Coloque os arquivos originais em:  public/logos/originais/
 * Os normalizados serão salvos em:  public/logos/
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/logos/originais");
const OUTPUT_DIR = path.join(__dirname, "../public/logos");
const TARGET_HEIGHT = 56; // px — altura uniforme para o ticker

if (!fs.existsSync(INPUT_DIR)) {
  fs.mkdirSync(INPUT_DIR, { recursive: true });
  console.log(`Pasta criada: ${INPUT_DIR}`);
  console.log("Coloque as logos originais nessa pasta e rode o script novamente.");
  process.exit(0);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(INPUT_DIR).filter((f) =>
  /\.(png|jpg|jpeg|webp|svg)$/i.test(f)
);

if (files.length === 0) {
  console.log("Nenhuma imagem encontrada em", INPUT_DIR);
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = path.parse(file).name + ".png";
    const outputPath = path.join(OUTPUT_DIR, outputName);

    try {
      await sharp(inputPath)
        .resize({ height: TARGET_HEIGHT, withoutEnlargement: false })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✓  ${file}  →  ${outputName}`);
    } catch (err) {
      console.error(`✗  ${file}:`, err.message);
    }
  }

  console.log(`\nPronto. ${files.length} logo(s) normalizada(s) em ${OUTPUT_DIR}`);
})();
