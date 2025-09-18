const findTheOldest = function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let oldest = arr[0];

    let maxAge = oldest.death - oldest.birth;

    for (let i = 1; i < people.length; i++) {
        let age = arr[i].death - arr[i].birth;

        if (age > maxAge) {
            maxAge = age;
            oldest = arr[i]; 
        }
    }

    return oldest.name;

};

// Do not edit below this line
module.exports = findTheOldest;
