const palindromes = function (string) {
  // Removes all punctuation and white spaces.
  const punctuationless = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replaceAll(" ", "")
    .toLowerCase();

  const stringLength = punctuationless.length;
  for (let i = 0; i < stringLength; i++) {
    if (punctuationless[i] !== punctuationless[stringLength - 1 - i])
      return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
