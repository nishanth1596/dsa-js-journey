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

// 97, 101, 105, 111, 117, 65, 69, 73, 79, 85

const isVowels = function (char) {
    const charCode = char.charCodeAt()

    return (charCode === 97 || charCode === 101 || charCode === 101 || charCode === 105 || charCode === 111 || charCode === 117 || charCode === 65 || charCode === 69 || charCode === 73 || charCode === 79 || charCode === 85)
}

const reverseVowels = function(s) {
    const array = s.split('')
    let left = 0
    let right = s.length-1

    while (left < right){
        if (isVowels(array[left]) && isVowels(array[right])){
            const dummy = array[left]
            array[left] = array[right]
            array[right] = dummy
            left++
            right--
        } else if (!isVowels(array[left]) && isVowels(array[right])){
            left++
        } else if (isVowels(array[left]) || !isVowels(array[right])){
            right--
        }

    }

    return array.join('')
};

console.log(reverseVowels( "IceCreAm"));