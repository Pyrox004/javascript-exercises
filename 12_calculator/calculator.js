const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

const multiply = function(arr) {
  if(!arr || !arr.length) {
    return null;
  }

  let result = 1;
  for(let a of arr) {
    result *= a; 
  } 
  
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
