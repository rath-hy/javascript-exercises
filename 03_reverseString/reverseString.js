const reverseString = function(str) {
    reversed_str = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed_str += str.at(i);
    }
    return reversed_str;
};

// Do not edit below this line
module.exports = reverseString;
