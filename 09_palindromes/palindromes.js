const palindromes = function (string) {
    const regex = /[^\ws]/g;
    string = string.toLowerCase()
    string = string.replace(regex, "")

    let reversedString = ""
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }

    return string === reversedString
};

console.log(palindromes("racecar"))
// Do not edit below this line
module.exports = palindromes;
