// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

function isVowel(letter){
    const charCode = letter.charCodeAt()

    return (
        (
         charCode === 65 || 
         charCode === 69 ||
         charCode === 73 ||
         charCode === 79 ||
         charCode === 85 ||
         charCode === 97 ||
         charCode === 101 ||
         charCode === 105 ||
         charCode === 111 ||
         charCode === 117
        )
    )
}


function reverseVowels(s){
    let arr = s.split("")
    let leftPointer = 0
    let rightPointer = arr.length-1

    while(leftPointer <= rightPointer){
        if (!isVowel(arr[leftPointer])){
            leftPointer++
        } else if (!isVowel(arr[rightPointer])){
            rightPointer--
        } else {
            let temp = arr[leftPointer]
            arr[leftPointer] = arr[rightPointer]
            arr[rightPointer] = temp
            leftPointer++
            rightPointer--
        }
    }

    return arr.join('')
}


console.log(reverseVowels("IceCreAm"));