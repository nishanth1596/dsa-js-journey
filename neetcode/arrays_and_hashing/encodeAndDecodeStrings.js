// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// String encode(List<String> strs) {
//     // ... your code
//     return encoded_string;
// }
// Machine 2 (receiver) has the function:

// List<String> decode(String encoded_string) {
//     // ... your code
//     return decoded_strs;
// }
// So Machine 1 does:

// String encoded_string = encode(strs);
// and Machine 2 does:

// List<String> decoded_strs = decode(encoded_string);
// decoded_strs in Machine 2 should be the same as the input strs in Machine 1.

// Implement the encode and decode methods.

// Example 1:

// Input: strs = ["Hello","World"]

// Output: ["Hello","World"]
// Explanation:

// Solution solution = new Solution();
// String encoded_string = solution.encode(strs);

// // Machine 1 ---encoded_string---> Machine 2

// List<String> decoded_strs = solution.decode(encoded_string);

// Example 2:

// Input: strs = [""]

// Output: [""]

// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains any possible characters out of 256 valid ASCII characters.

// Follow up: Could you write a generalized algorithm to work on any possible set of characters?

const encode = (strs) => {
    let codedStrs = ''

    for (let i=0; i< strs.length; i++){
        const length = strs[i].length
        codedStrs += length+'#'+strs[i]
    }

    return codedStrs
}

const decode = (str) => {
    let decodedStrs = []

    for (let i =0; i < str.length;  i++){
        const hashIndex = str.indexOf("#", i)
        const number = Number(str.slice(i, hashIndex))
        const codedKey = number + '#'

        if (str.slice(i, hashIndex+1) === codedKey){
            decodedStrs.push(str.slice(hashIndex+1, hashIndex + number+ 1))
            i = number+ hashIndex
        };
    }

    return decodedStrs
}

// console.log('heya', (strs = ["Hello","World"]));
// console.log('heya', encode(strs = ["Hello","World"]));
// console.log('heya', decode("5#Hello5#World"));

// console.log('heya', (strs = ["Hello","World"]));
// console.log('heya', encode(strs = ["we","say",":","yes","!@#$%^&*()"]));
// console.log('heya', decode("2#we3#say1#:3#yes10#!@#$%^&*()"));

console.log('heya', encode(strs = ["http://x.y?a=1&b=2","key=value","semi;colon"]));
console.log('heya', decode("18#http://x.y?a=1&b=29#key=value10#semi;colon"));
// console.log('heya', decode("18#http://x.y?a=1&b=29#key=value10#semi;colon"));