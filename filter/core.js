function onlyEven (array) {
  return array.filter((x) => !(x%2));
};

function onlyOneWord (array) {
  return array.filter((x) => !x.match(/\W/g));
};

function positiveRowsOnly (array) {
  return array.filter((row) => row.every((elem) => elem > 0));
};

function allSameVowels (array) {
  return array.filter(sameVowels);
  // Messy one-liner tho
  // return array.filter((word) => word.split("").filter((c) => c.match(/[eyuioa]/)).every((val, _, arr) => val === arr[0]));
};

function sameVowels (word) {
  return word.split("")
    .filter((c) => c.match(/[eyuioa]/))
    .every((val, _, arr) => val === arr[0]);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};