function fibonacci(n) {
    // convert strings to numbers
    n = Number(n);
    // validate input
    if (!Number.isInteger(n) || n < 0) {
        return "OOPS";
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}


// Do not edit below this line
module.exports = fibonacci;
