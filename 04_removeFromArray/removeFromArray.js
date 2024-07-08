const removeFromArray = function (array, ...toDelete) {
  array = array.filter((el) => !toDelete.includes(el));
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
