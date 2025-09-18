const fibonacci = function(num) {
    if (typeof num !== "number" || Number.isInteger(num)) {
        return 0;
    }

    if (num === 1 || num === 2) {
        return 1;
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;

};

// Do not edit below this line
module.exports = fibonacci;
