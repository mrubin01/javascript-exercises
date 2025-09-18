function fibonacci(n) {
  // convert strings numbers
  n = Number(n);

  // validate input
  if (!Number.isInteger(n) || n < 1) {
    console.log("OOPS");
    return;
  }

  if (n === 1 || n === 2) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}


// Do not edit below this line
module.exports = fibonacci;
