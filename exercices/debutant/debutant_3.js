// Exercice name : 	Euro 2020 en 2021
// @ts-check
// --
import Game from "../../Game.js";
import API_KEY from "../../secret.js";

const exoCode = "Euro 2020 en 2021";

const game = new Game(API_KEY, exoCode);

game.start();

const group = ["TUR", "RUS", "UKR", "ECO", "SUI", "FIN", "ALL"];
const scores = [
  "TUR_RUS_3_3",
  "TUR_UKR_0_1",
  "TUR_ECO_1_1",
  "TUR_SUI_2_2",
  "TUR_FIN_0_4",
  "TUR_ALL_2_0",
  "RUS_TUR_0_1",
  "RUS_UKR_1_1",
  "RUS_ECO_0_0",
  "RUS_SUI_2_1",
  "RUS_FIN_1_0",
  "RUS_ALL_1_0",
  "UKR_TUR_1_0",
  "UKR_RUS_0_3",
  "UKR_ECO_0_4",
  "UKR_SUI_2_1",
  "UKR_FIN_1_0",
  "UKR_ALL_2_4",
  "ECO_TUR_1_2",
  "ECO_RUS_0_1",
  "ECO_UKR_0_0",
  "ECO_SUI_2_2",
  "ECO_FIN_0_1",
  "ECO_ALL_2_2",
  "SUI_TUR_1_3",
  "SUI_RUS_0_1",
  "SUI_UKR_3_4",
  "SUI_ECO_3_1",
  "SUI_FIN_1_0",
  "SUI_ALL_1_2",
  "FIN_TUR_0_0",
  "FIN_RUS_1_0",
  "FIN_UKR_1_0",
  "FIN_ECO_3_1",
  "FIN_SUI_1_0",
  "FIN_ALL_3_1",
  "ALL_TUR_2_3",
  "ALL_RUS_0_4",
  "ALL_UKR_3_4",
  "ALL_ECO_1_0",
  "ALL_SUI_0_2",
  "ALL_FIN_1_2",
];

const getScores = (score) => {
  const cleared = score.split("_");
  return {
    team1: cleared[0],
    team2: cleared[1],
    score1: parseInt(cleared[2], 10),
    score2: parseInt(cleared[3], 10),
  };
};

const ranks = group.reduce((acc, cur) => {
  return { ...acc, [cur]: 0 };
}, {});

scores.forEach((trigramme) => {
  const { team1, team2, score1, score2 } = getScores(trigramme);
  console.log(team1, team2, score1, score2);
  if (score1 > score2) {
    ranks[team1] += 3;
  } else if (score1 === score2) {
    ranks[team1] += 1;
    ranks[team2] += 1;
  } else if (score2 > score1) {
    ranks[team2] += 3;
  }
});

const sortRanks = () => {
  return Object.keys(ranks)
    .sort((a, b) => ranks[b] - ranks[a])
    .join("");
};

game.output(sortRanks());
