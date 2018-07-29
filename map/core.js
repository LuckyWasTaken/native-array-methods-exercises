function multiplyBy10 (array) {
  return array.map((x) => x*10);
};

function shiftRight (array) {
  //array.unshift(array.pop());  Why bother mapping when you can just do that?
  //return array;
  return array.map((item, i, arr) => i === 0 ? arr[arr.length-1] : arr[i-1]);
};

function onlyVowels (array) {
  return array.map((str) => str.replace(/[^eyuioa]/g,""));
};



function doubleMatrix (array) {
  return array.map((line) => line.map((x) => x*2));
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};