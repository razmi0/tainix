// Exercice name : condition
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

const n = 889;

game.output(n % 3 === 0 ? "YES" : "NO");
