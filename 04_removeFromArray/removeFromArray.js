const removeFromArray = function(arr) {

    for (let itemNumber = 1; itemNumber < arguments.length; itemNumber++) {
        arr = removeOneItemFromArray(arr, arguments[itemNumber]);
    }

    return arr;
};

const removeOneItemFromArray = function(arr, itemToRemove) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === itemToRemove) {
            arr = arr.toSpliced(i, 1);
            i = 0;
        }
    }

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
