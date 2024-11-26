// NE PAS TOUCHER
const favoriteLetters = "YOH";
const stars = [
  "X-DKMUE",
  "X-BTGFA",
  "X-QGSRW",
  "X-YZYUF",
  "X-HLJPB",
  "X-ZDSKG",
  "X-ZEQBO",
  "X-ZUVGQ",
  "X-PBGRU",
  "X-ZISBY",
  "X-CIDKL",
  "X-PJORH",
  "X-GYPUE",
  "X-YCFVS",
  "X-VCNYG",
  "X-CADVJ",
  "X-ZQCIT",
  "X-GWOLX",
  "X-HWEZA",
  "X-ZIHXK",
  "X-OHZBR",
  "X-BXRLC",
  "X-DHQYU",
  "X-FAJBC",
  "X-DUIEG",
  "X-RWUGZ",
  "X-SHBTF",
  "X-MVSTH",
  "X-WMUDK",
  "X-MWQAK",
  "X-WSALI",
  "X-XMHNL",
  "X-XIFWM",
  "X-CVRIS",
  "X-EITVP",
  "X-OTMQI",
  "X-XKIDR",
  "X-VCBEO",
  "X-KJMCS",
  "X-PLVER",
  "X-JLEOM",
  "X-RCXMJ",
  "X-YDVCS",
  "X-FTXQC",
  "X-NKMFW",
  "X-ALUNH",
  "X-IYREO",
  "X-YBXQP",
  "X-GMRYD",
  "X-OSAGL",
  "X-BLAOV",
  "X-FZLJY",
  "X-HPRMW",
  "X-LNKDA",
  "X-DNQEO",
];
// NE PAS TOUCHER

const getOccurences = (star, favoriteLetters) => {
  const codeStar = star.substring(2).split("");
  const letters = favoriteLetters.split("");
  let occurence = 0;
  letters.forEach((letter) => {
    codeStar.forEach((code) => {
      if (code === letter) {
        occurence++;
      }
    });
  });
  return occurence;
};

const getScore = (occurence) => {
  if (occurence < 1) {
    return 0;
  } else if (occurence < 2) {
    return 10;
  } else if (occurence < 3) {
    return 100;
  } else if (occurence < 4) {
    return 1000;
  }
  throw Error("Wrong dataset format");
};

console.log(
  stars.reduce((sum, star) => {
    const occurence = getOccurences(star, favoriteLetters);
    return sum + getScore(occurence);
  }, 0)
);
