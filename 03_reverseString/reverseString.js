const reverseString = function (sentence) {
  let splitString = sentence.split("");
  let reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
