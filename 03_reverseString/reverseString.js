const reverseString = function (string) {
  return reverseStringRecursive(string, string.length - 1);
};

const reverseStringRecursive = function (string, length) {
  if (length < 0) return "";

  return string.charAt(length) + reverseStringRecursive(string, length - 1);
};

// Do not edit below this line
module.exports = reverseString;
