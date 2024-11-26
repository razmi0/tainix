// NE PAS TOUCHER
const favoriteLetters = 'KIB';
const stars = ['X-PQFZT', 'X-BUWGH', 'X-YUJCR', 'X-YRGID', 'X-TZYSA', 'X-UIZVE', 'X-KRZWQ', 'X-KWODS', 'X-AEWJB', 'X-QBFSY', 'X-EBPHX', 'X-ICGFI', 'X-WVMIP', 'X-VXCKR', 'X-MAKWS', 'X-UIBWP', 'X-SIVFD', 'X-EIBJV', 'X-ARYVE', 'X-SWOVB', 'X-RCMWG', 'X-PRVMF', 'X-ULOSF', 'X-IXOFZ', 'X-CRDAF', 'X-UYMDQ', 'X-HFJPR', 'X-HKESU', 'X-PKVWT', 'X-PQMCO', 'X-VMXNK', 'X-PKAIW', 'X-XBQPC', 'X-KYOET', 'X-GXERD', 'X-FNCGZ', 'X-MBHGF', 'X-CYELT', 'X-QIRPM', 'X-JENFC', 'X-YGUTV', 'X-IAEQU', 'X-AIJUF', 'X-QIZPA', 'X-BNJYS', 'X-BWLJZ', 'X-HTDUG', 'X-MFYIN', 'X-YZBVK', 'X-VSDZW', 'X-KJZWC', 'X-CKTUA', 'X-XWNPZ', 'X-IUONE', 'X-CEXFV', 'X-XJWZR', 'X-MGCRJ', 'X-NWAYK', 'X-CLYAO', 'X-HYDKA', 'X-WSDUY', 'X-BEQHR'];
// NE PAS TOUCHER

function getCorrespondance(stars, favoriteLetters) {

  let matchingStarsCount = []
  let fav = favoriteLetters.split('')
  let matchCount

  for (let j = 0; j < stars.length; j++) {
    matchCount = 0

    for (let i = 0; i < fav.length; i++) {
      if (stars[j].includes(fav[i])) {
        matchCount++
      }
    }

    matchingStarsCount.push(matchCount)
  }

  return matchingStarsCount
}
let matchingStarsCount = getCorrespondance(stars, favoriteLetters)


function calcPoint(matchingStarsCount) {
  let sum = 0
  let grid = [0, 10, 100, 1000]
  for (let i = 0; i < matchingStarsCount.length; i++) {
    sum += grid[matchingStarsCount[i]]
  }

  return sum
}

console.log(calcPoint(matchingStarsCount))
