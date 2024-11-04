// Exercice name : 	STARSHIP 1 : Défense orbitale
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "PIERRE_FEUILLE_CISEAUX";

const game = new Game(API_KEY, exoCode);

game.start();

// NE PAS TOUCHER
const ships = [
  820, 5580, 4516, 937, 212, 61, 1422, 1842, 69, 8897, 30, 72, 2484, 126, 130, 611, 30, 4889, 1962, 706, 7102, 92, 621,
  755, 728, 2237, 438, 19, 595, 106, 2876, 74, 905, 1177,
];
// NE PAS TOUCHER

console.log(
  ships
    .map((resistance) => {
      if (resistance < 100) {
        return Math.ceil(resistance / 10);
      } else if (resistance < 1000) {
        return 25 + 3 * Math.ceil(resistance / 100);
      } else if (resistance < 10000) {
        return 80 + 5 * Math.ceil(resistance / 1000);
      }
    })
    .reduce((acc, cur) => acc + cur, 0)
);
