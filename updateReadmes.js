// @ts-check
// update all readmes in exercices folder
// cmd : node updateReadmes.js

import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const exercicesFolders = ["debutant", "intermediaire", "avance", "starter"];

const updateReadmes = () => {
  exercicesFolders.forEach((folder) => {
    const folderPath = path.join(__dirname, "exercices", folder);
    const readmePath = path.join(folderPath, "README.md");
    const files = fs.readdirSync(folderPath);

    const exercices = files
      .filter((file) => file.includes(".js"))
      .map((file) => {
        const filePath = path.join(folderPath, file);
        const relativePath = path.relative(__dirname, filePath).split(path.sep)[2];
        const content = fs.readFileSync(filePath, "utf-8");
        const match = content.match(/Exercice name : (.+)/);
        const exerciceName = match ? match[1] : "Unknown Exercice";
        return `[${exerciceName}](./${relativePath})`;
      });

    const title = "# " + folder.charAt(0).toUpperCase() + folder.slice(1);
    const readmeContent = exercices.map((exercice) => `- ${exercice}`).join("\n");
    fs.writeFileSync(readmePath, `${title}\n\n${readmeContent}`);
  });
};

updateReadmes();
