const removeFromArray = function (arr, ...args) {
  const result = arr.filter((item) => {
    return args.indexOf(item) == -1;
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
