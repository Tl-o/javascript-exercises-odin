const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  return "".padStart(string.length * num, string);
};

// Do not edit below this line
module.exports = repeatString;
