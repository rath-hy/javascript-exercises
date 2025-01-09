const repeatString = function(str, numberOfRepetitions) {
    new_str = str;

    if (numberOfRepetitions === 0)
        return '';

    else if (numberOfRepetitions < 0)
        return 'ERROR';

    for (let i = 1; i < numberOfRepetitions; i++) {
        new_str += str;
    }
    return new_str;
};

// Do not edit below this line
module.exports = repeatString;
