const findTheOldest = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let oldest = arr[0];

    let maxAge = oldest.yearOfDeath - oldest.yearOfBirth;

    for (let i = 1; i < arr.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldest = arr[i]; 
        }
    }

    return oldest.name;

};

// Do not edit below this line
module.exports = findTheOldest;
