// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// const { memo } = require("react");

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).


// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Constraints:

// 0 <= n <= 30

// solution
// function fibonacci(n) {
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1
//     }

//     memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
//     return memo[n]
// }

function fibonacci(n){
    const memo = {};

    function helper(n){
        if (n <= 1) return n
        if (n in memo) return memo[n]

        memo[n] = helper(n-1) + helper(n-2)
        return memo[n]
    }

    return helper(n)
}

console.log('heya', fibonacci(6));
// time = O(n2) // after optimisation O(n)
// space = O(n)