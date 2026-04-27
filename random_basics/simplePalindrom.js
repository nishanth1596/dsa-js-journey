// Simple Palindrome 
// "racecar" → true  
// "hello" → false

function isPalindrome(str){
    let leftPointer = 0
    let rightPointer = str.length-1

    while (leftPointer < rightPointer){
        if (str[leftPointer].toLowerCase() === str[rightPointer].toLowerCase()){
            leftPointer++
            rightPointer--
        } else {
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"));