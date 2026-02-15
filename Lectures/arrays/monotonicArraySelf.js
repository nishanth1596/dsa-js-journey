// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

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

// const checkMonotonic = function (array) {
//     //write code here to return either true or false 
//     if (array.length <= 1) return true
//     const first = array[0]
//     const last = array[array.length - 1]

//     for (let i = 0; i < array.length; i++) {
//         if (first === last) {
//             if (array[i] > array[i + 1] || array[i] < array[i + 1]) return false
//         } else if (first < last){
//             if (array[i] > array[i+1]) return false
//         } else {
//             if (array[i] < array[i+1]) return false
//         }
//     }
//     return true
// }

function checkMonotonic(array){
    if (array.length <= 1) return true

    let seenIncrease = false;
    let seenDecrease = false;

    for (let i =1; i<array.length; i++){
        if (array[i] > array[i-1]){
            seenIncrease = true
        } else if (array[i] < array[i-1]){
            seenDecrease = true
        }

        if (seenIncrease && seenDecrease) return false
    }

    return true
}

console.log(checkMonotonic([1, 1, 3, 3, 4, 5]));
console.log(checkMonotonic([5, 4, 3, 2, 0, -20]));
console.log(checkMonotonic([-20]));
console.log(checkMonotonic([1, 2, 2, 3]
));
console.log(checkMonotonic([1, 2, 3, 4, 5, 6, 7, 1]));
console.log(checkMonotonic([3,3,3,2,1]));
