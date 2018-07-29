function sum (array) {
    return array.reduce((acc, val) => val + acc);
}

function productAll (array) {
    return array.reduce((acc, val) => typeof(val) === "number"
        ? val * acc
        : productAll(val) * acc, 1);
}

function objectify (array) {
    return array.reduce((acc, val) => { 
        acc[val[0]] = val[1]
        return acc;
    }, {});
}

function luckyNumbers (array) {
    return array.reduce((acc, val, i) => (i === array.length - 1)
        ? acc + `and ${val}`
        : acc + `${val}, `, "Your lucky numbers are: ");
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
