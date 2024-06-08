const reverseString = function(word) {
    const lastCharIndex = word.length - 1;

    let reversedString = ""
    for(let i = lastCharIndex; i >= 0; i--) {
        reversedString += word[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
