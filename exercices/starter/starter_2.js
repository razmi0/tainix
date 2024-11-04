// Exercice name : Utilisation de forEach (lol)
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

const values = [9, 1, 1, 10, 9, 9, 5, 10, 10, 9, 6, 7, 6, 7, 7, 4, 3, 5, 8, 3, 5, 3];
game.output(values.reduce((acc, cur) => (cur > 4 ? acc + cur : acc), 0));
