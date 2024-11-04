// Exercice name : Utilisation d'une fonction
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

game.output(
  [50, 85, 37, 24, 85, 59, 41, 16, 97, 59, 57, 16, 41, 71, 92, 15, 90, 38, 62, 93, 63, 60, 75, 36, 36, 26]
    .map((n) => (n % 3 === 0 ? n : null))
    .filter((val) => val !== null)
    .join("-")
);
