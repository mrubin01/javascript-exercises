const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) 
    || int1 < 0 || int2 < 0 || int1 === int2) return "ERROR"; 

    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += 1; 
    }
    return sum; 


};

// Do not edit below this line
module.exports = sumAll;
