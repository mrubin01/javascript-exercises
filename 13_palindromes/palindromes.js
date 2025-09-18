const palindromes = function (raw_str) {
    if (typeof raw_str !== "string" || raw_str.length === 0) {
        return false; 
    } 

    let str = raw_str.toLowerCase().replace(/[^a-z0-9]/g, ""); 

    let rev_str = str.split("").reverse().join(""); 
    return str === rev_str;
};

// Do not edit below this line
module.exports = palindromes;
