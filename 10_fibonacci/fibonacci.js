const fibonacci = function (until) {
  until = +until;
  if (until < 0) return "OOPS"; // Does not accept negatives.

  let firstPrev = 1,
    secondPrev = 0;

  if (until === 0) return until;

  for (let i = 2; i <= until; i++) {
    let count = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = count;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
