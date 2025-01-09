const convertToCelsius = function(fahrenheit) {
  result = ((5 / 9) * (fahrenheit - 32));

  if (!Number.isInteger(result))
    return Number(result.toFixed(1));

  return Number(result);
};

const convertToFahrenheit = function(celsius) {
  result = (((9 / 5) * (celsius)) + 32);

  if (!Number.isInteger(result))
    return Number(result.toFixed(1));

  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
