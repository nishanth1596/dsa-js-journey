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
    const firstWord = strs[0]
    // console.log('heya', firstWord)
    let pointer = 1
    let charPointer = 0
    while (charPointer < strs[0].length){

        while (pointer < strs.length){
            // console.log('char',strs[charPointer] )
            pointer++
        }
        charPointer++
    }

  return ;
};

// console.log(longestCommonPrefix(["bat", "bag", "bank", "band"]));
// console.log(longestCommonPrefix(["neet","feet"]));
// console.log(longestCommonPrefix(["dance", "dag", "danger", "damage"]));
// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(strs=["interview","internet","internal","interval"]));
// console.log(longestCommonPrefix(strs=[]));
