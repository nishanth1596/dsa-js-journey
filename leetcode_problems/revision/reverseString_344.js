// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

function reverseString(array){
    // for (let i=0; i<=array.length/2; i++){
    //     let swap = array[i]
    //     array[i] = array[array.length-1-i]
    //     array[array.length-1-i] = swap
    // }

    // return array

    let leftPointer = 0
    let rightPointer = array.length -1

    while (leftPointer < rightPointer){
        let temp = array[leftPointer]
        array[leftPointer] = array[rightPointer]
        array[rightPointer] = temp

        leftPointer++
        rightPointer--
    }

    return array
}

console.log(reverseString(["h","e","l","l","o"]));