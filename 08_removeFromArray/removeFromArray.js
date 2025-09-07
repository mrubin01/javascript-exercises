const removeFromArray = function(arr, ...args) {
    if (!arr) return "";

    item_arrays = []
    args.forEach(item => {
        if (!item_arrays.includes(item)) {
            item_arrays.push(item); 
        }
    });

    return arr.filter(item => !item_arrays.includes(item))

};

// Do not edit below this line
module.exports = removeFromArray;
