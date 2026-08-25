// You are given an array of strings strs. Return the longest common prefix of all the strings.

// If there is no longest common prefix, return an empty string "".

// Example 1:

// Input: strs = ["bat","bag","bank","band"]

// Output: "ba"
// Example 2:

// Input: strs = ["dance","dag","danger","damage"]

// Output: "da"
// Example 3:

// Input: strs = ["neet","feet"]

// Output: ""
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] is made up of lowercase English letters if it is non-empty.

const longestCommonPrefix = (strs) => {
    let result = ""
    const map = {}

    for (let i=0; i<strs[0].length; i++){
        map[strs[0][i]] = i 
        result += strs[0][i]       
    }
console.log('heya', map, result)

    let pointer = 1
    while (pointer < strs.length ){
        console.log('heya', strs[pointer])
        pointer++
    }
    return result
}

console.log(longestCommonPrefix(["bat","bag","bank","band"]));