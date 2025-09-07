const leapYears = function(year) {
    if (!year || !Number.isInteger(year)) return false;

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true; 
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        return false; 
    } else {return false}; 

};

// Do not edit below this line
module.exports = leapYears;
