const add = function(num1, num2) {
  return num1+num2
};

const subtract = function(num1, num2) {
  return num1-num2
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1)
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
  let result = 1
  for(let i = num; i > 1; i--) {
    result *= i
  }

  return result
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
