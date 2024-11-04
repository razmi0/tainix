// Exercice name : loop for (lol)
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

const stop = 50;
game.output(new Array(stop).fill(() => 0).reduce((acc, _, i) => acc + i + 1, 0));
