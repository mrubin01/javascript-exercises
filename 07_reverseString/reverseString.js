const reverseString = function(strng) {
    if (!strng) return "";

    return strng.split("").reverse().join();
};

// Do not edit below this line
module.exports = reverseString;
