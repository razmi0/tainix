// Exercice name : 	Orion defense spatial
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "Euro 2020 en 2021";

const game = new Game(API_KEY, exoCode);

game.start();

const waves = [
  "SDDADSSBDSDBDSA",
  "SBDADSSSAB",
  "SSADDDDSBB",
  "DSSSAABSBADS",
  "DSSAABBSDB",
  "ADBBDSABDABBD",
  "SDDAASBDSAADAAB",
  "BAASDDDADSDD",
  "SBBBSADDAABD",
  "DBDSSADSDBA",
  "DSDBBDSDAS",
  "BBBASBBBABSD",
  "BSSSBBSDSBAA",
  "BBDSAASADAADB",
  "BSABABAAABDAS",
  "BADDAABABSD",
  "BSBSBAAAAAD",
  "AABAABADSAB",
  "DBASSSSABSB",
  "BBAASSSDABBBBD",
  "DAAASAABDADA",
  "BBSADDAASD",
];

game.output(
  waves
    .join("")
    .split("")
    .filter((type) => type === "D").length
);
