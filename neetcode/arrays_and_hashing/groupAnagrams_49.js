// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
// Constraints:

// 1 <= strs.length <= 10000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

const groupAnagrams = function (strs){
    const map = {}

    for (const word of strs){
        const key = word.split('').sort().join('')
        if (!map[key]){
            map[key] = [ word]
        } else {
            map[key].push(word)
        }
    }

    return Object.values(map)
}


console.log(groupAnagrams(strs = ["act","pots","tops","cat","stop","hat"]));