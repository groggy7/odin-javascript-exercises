const palindromes = function (string) {
    const regex = /[^\ws]/g;
    string = string.toLowerCase().replace(regex, "")

    const reversedString = string.split('').reverse().join('')

    return string === reversedString
};

console.log(palindromes("racecar"))
// Do not edit below this line
module.exports = palindromes;
