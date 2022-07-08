const sumAll = function (startNum, endNum) {
  if (typeof endNum !== "number") return "ERROR";
  if (endNum < 0) return "ERROR";
  if (startNum < 0) return "ERROR";

  let result = 0;

  if (startNum < endNum) {
    for (let i = startNum; i <= endNum; i++) {
      result += i;
    }
  } else {
    for (let i = endNum; i <= startNum; i++) {
      result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
