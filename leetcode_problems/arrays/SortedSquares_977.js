// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


function sortedSquares(array){
    const newArray = new Array(array.length).fill(0)
    let leftPointer = 0
    let rightPointer = array.length-1

    for(let i=0; i< array.length; i++){
        const leftSquare = array[leftPointer]* array[leftPointer]
        const rightSquare = array[rightPointer] * array[rightPointer]
        
        console.log('heya', leftSquare, rightSquare);
        if(rightSquare > leftSquare){
            newArray[array.length-1-i] = rightSquare
            rightPointer--;
        } else {
            newArray[array.length-1-i] = leftSquare
            leftPointer++;
        }
    }

    return newArray
}

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
