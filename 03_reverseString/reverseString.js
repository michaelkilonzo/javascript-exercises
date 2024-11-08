const reverseString = function(string) {
    var revString = "";

    for (i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }
    return revString;
    
};

// Do not edit below this line
module.exports = reverseString;
