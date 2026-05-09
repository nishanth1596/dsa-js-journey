// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.



// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.


// Follow up: Can you solve it in O(n) time and O(1) space?

function backspaceCompare(s, t) {
    const firstArray = s.split('')
    const secondArray = t.split('')
    const result1 = []
    const result2 = []


    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            result1.push(s[i])
        } else {
            result1.pop()
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '#') {
            result2.push(t[i])
        } else {
            result2.pop()
        }
    }


    const finalResult =  result1.join('')=== result2.join('')
    return finalResult
}

console.log(backspaceCompare(s = "ab#c", t = "ad#c"));
// console.log(backspaceCompare(s = "a#c", t = "b"));