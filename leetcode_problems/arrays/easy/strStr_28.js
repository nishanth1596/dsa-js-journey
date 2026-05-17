// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

const strStr = function (haystack, needle){
    let firstOccurence;
    let haystackPointer = 0
    let needlePointer = 0

    while (haystackPointer <= haystack.length){
        let needleChar = needle[needlePointer]
        let haystackChar = haystack[haystackPointer]

        if (needlePointer >= needle.length) return firstOccurence

        if (firstOccurence !== undefined){
            if (needleChar === haystackChar){
                needlePointer++
            } else {
                firstOccurence = undefined
                needlePointer = 0
            }
        } else {
             if (needleChar === haystackChar){
                firstOccurence = haystackPointer
                needlePointer++
            } 

        } 
        haystackPointer++
    }

    return  -1
}


// console.log(strStr(haystack = "sadbutsad", needle = "sad"));
console.log(strStr(haystack = "mississippi", needle = "issip"));
// console.log(strStr(haystack = "leetcode", needle = "leet"));