// Exercice name : concatenation
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "STARTER_6";

const game = new Game(API_KEY, exoCode);

game.start();

const name = "John";
const room = "kitchen";

game.output(`Hello ${name}, welcome to the ${room}!`);
