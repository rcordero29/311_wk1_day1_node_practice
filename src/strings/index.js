const split = (str, delim) => {
  // write code for strings.split
  return str.split("-", 3);
};

const pairs = (str) => {
  // write code for strings.pairs
  var pairs=[];
  for (var i =0; i<str.length; i+=2) {
  pairs.push(str.substring(i,i+2));
  }
  return pairs
};

function reverse(str) {
  // write code for strings.reverse
  let spiltString = str.split("");
  let reverseArray = spiltString.reverse();
  let together = reverseArray.join("")
  return together
}

module.exports = {
  split,
  pairs,
  reverse,
};
