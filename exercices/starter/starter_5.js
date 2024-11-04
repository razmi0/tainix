// Exercice name : variables et calculs
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

const side = 71;

game.output(side * 4 + side * side);
