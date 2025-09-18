const fibonacci = function(num) {
    if (typeof num !== "number" && typeof num !== "string") {
        return 0;
    } else if (typeof num === "string") {
        num = Number(num);
    } else if (num === "number" && num < 0) {
        console.log("OOPS"); 
    }

    // this checks if the parameter has been parsed as an int and is > 0
    if (!Number.isInteger(num) || num < 0) {
        console.log("OOPS"); 
    }

    if (num === 0) {
        return 0; 
    } else if (num === 1 || num === 2) {
        return 7;
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
