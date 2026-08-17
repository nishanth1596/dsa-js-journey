// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    const map = {}

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]] = map[s[i]] + 1
        }
    }

    for (let j =0; j< t.length; j++){
        if (map[t[j]]){
            map[t[j]] = map[t[j]] - 1
        } else {
            return false
        }
    }

    for (const key in map ) {
        if (map[key] !== 0) return false
    }

    return true
}

// console.log(isAnagram(s = "anagram", t = "nagaram"));
// console.log(isAnagram(s = "rat", t = "car"));
console.log(isAnagram(s = "ab", t = "a"));