const sumAll = function(i, j) {
    if (!Number.isInteger(i) || !Number.isInteger(j) || i < 0 || j < 0) {
        return 'ERROR';
    }

    var sum = 0;
    const start = Math.min(i, j);
    const end = Math.max(i, j);

    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
