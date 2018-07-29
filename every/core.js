// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every((x) => !(x%2));
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every((x) => typeof(x) === typeof(input[0]));
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every((row) => row.every((x) => x>0));
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(sameVowels);
};

function sameVowels (word) {
  return word.split("")
    .filter((c) => c.match(/[eyuioa]/))
    .every((val, _, arr) => val === arr[0]);
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
