const add = function(num1, num2) {
  return num1 + num2; 	
};

const subtract = function(num1, num2) {
  return num1 - num2; 	
};

const sum = function(arr) {
  s = 0;

  for (let item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
      s += item;
    }
  }

  return s;	
};

const multiply = function(arr) {
  t = 1;

  for (let item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
      t *= item;
    }
  }

  return t; 

};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  let tot = 1;
	if (num === 0 || num === 1) {
    return tot;
  } else if (num > 1) {
    for (i = num; i > 1; i--) {
      i * tot;
    }
    return tot;
  }
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
