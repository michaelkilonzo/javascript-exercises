const removeFromArray = function(arr, ...args) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
