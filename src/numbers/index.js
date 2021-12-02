const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
};

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((total, amount) => total + amount);
};

const comboSum = (array, target) => {
  // write code for numbers.comboSum
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
      if (array[index]+array[j] === target){
        return true
      }
      else {
        return false
      }
    }
  }
  
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
