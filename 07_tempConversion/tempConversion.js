const convertToCelsius = function (fehrenheit) {
  const celsius = (fehrenheit - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  const fehrenheit = celsius * (9 / 5) + 32;
  return Number(fehrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
