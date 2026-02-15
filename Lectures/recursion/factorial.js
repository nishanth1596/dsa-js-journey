// write factorial solution
// n =5  gives result of 120
// 5*4*3*2*1

// function factorial(n) {
//         let result = 1
//         let isLoopable = true

//         while (isLoopable) {
//             if (n === 1) {
//                 isLoopable = false
//             } else {
//                 result *= n
//                 n--
//             }
//         }

//         return result
// }

//optimised solution

function factorial(n) {
    if (n === 1) return 1

    return n * factorial(n - 1)
}

console.log('heya', factorial(7));