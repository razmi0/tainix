// Exercice name : Pierre-feuille-ciseaux
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "PIERRE_FEUILLE_CISEAUX";

const game = new Game(API_KEY, exoCode);

game.start();

// NE PAS TOUCHER
const coups = "CCCPCCPPFPFFFFPFFCFCF";
// NE PAS TOUCHER

const contreDict = {
  C: "P",
  P: "F",
  F: "C",
};

game.output(
  coups
    .split("")
    .map((coup) => contreDict[coup])
    .join("")
);
