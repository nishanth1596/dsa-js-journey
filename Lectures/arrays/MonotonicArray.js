// Question
// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

// Clarifying Questions
// is an empty array monotonic? yes
// is an array with only 1 integer monotonic? yes

// Test cases
// [1,2,3] True -ND monotic or monotone increasing
// [3,2,1] True = MD
// [1,2,2] TRUE = MI
// [3,3,3] True
// [7] True
// [] True
// [2,2,3,1] FALSE

// Solution

// My solution before DSA
// function checkMonotonic(array) {
//   //write code here to return either true or false
//   let currentValue = array[0];
//   let trend;
//   if (array[1] - currentValue >= 0) {
//     trend = "increasing";
//   } else {
//     trend = "decreasing";
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (trend === "increasing") {
//       if (array[i] >= currentValue) {
//         currentValue = array[i];
//       } else {
//         return false;
//       }
//     } else {
//       if (array[i] <= currentValue) {
//         currentValue = array[i];
//       } else {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(checkMonotonic([1, 2, 3, 4, 5]));
// console.log(checkMonotonic([5, 4, 3, 2, 1]));

// DSA Solution
function checkMonotonic(array) {
  if (array.length === 0) return true;

  const first = array[0];
  const last = array[array.length - 1];
  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    // first > last
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) return false;
    }
  }

  return true;
}

console.log(checkMonotonic([1, 2, 3, 4, 5]));
console.log(checkMonotonic([5, 4, 3, 2, 0, -20]));
