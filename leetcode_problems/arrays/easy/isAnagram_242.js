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

function isAnagram(s,t){
    if (s.length !== t.length) return false

    const map = {}

    // for (let i =0 ; i<s.length; i++){
    //     if (map[s[i]]){
    //         map[s[i]] = map[s[i]]+1
    //     } else {
    //         map[s[i]] = 1
    //     }
    // }

    for (let char of s){
        map[char] = (map[char] || 0) + 1
    }

    for (let char of t){
        if (!map[char]) return false
        map[char]--
    }

    return true

}

console.log(isAnagram(s = "anagram", t = "nagaram"));