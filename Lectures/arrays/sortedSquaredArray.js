// You are given an array of integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// Solution before DSA
// BRUTE FORCE METHOD
// function sortedSquaredArray(inputArrary) {
//   return inputArrary.map((item) => item * item).sort((a, b) => a - b);
// }
// function sortedSquaredArray(array) {
//   let newArray = new Array(array.length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i] * array[i];
//   }

//   newArray.sort((a, b) => a - b);

//   return newArray;
// }

console.log(sortedSquaredArray([1, 2, 4, 5]));
console.log(sortedSquaredArray([1, 3, 5]));
console.log(sortedSquaredArray([-4, -2, 0, 1, 3]));

// DSA Best method
function sortedSquaredArray(array) {
  const newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      pointerRight--;
    }
  }

  return newArray;
}
