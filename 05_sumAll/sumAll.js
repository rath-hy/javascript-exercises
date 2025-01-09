const sumAll = function(num_a, num_b) {
    if (num_a < 0 || num_b < 0 
        || typeof num_a !== 'number' || typeof num_b != 'number'
        || !Number.isInteger(num_a) || !Number.isInteger(num_b)
    )
        return 'ERROR'

    return (num_a > num_b) ? sumSmallertoLarger(num_b, num_a) : sumSmallertoLarger(num_a, num_b);

};

function sumSmallertoLarger(num_a, num_b) {
    sum = 0;
    for (let i = num_a; i <= num_b; i++) {
        sum += i;
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
