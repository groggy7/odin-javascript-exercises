const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear()
    return array.reduce((acc, curr) => {
        const ageOfPerson = (curr.yearOfDeath || currentYear) - curr.yearOfBirth
        const biggestAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth

        if (ageOfPerson > biggestAge) {
            return curr
        }
        return acc
    }, array[0])
};


// another solution
/*
const findTheOldest = function(array) {
    let biggestAge = 0
    return array.reduce((acc, curr) => {
        const ageOfPerson = (curr.yearOfDeath || new Date().getFullYear()) - curr.yearOfBirth
        
        if (ageOfPerson > biggestAge) {
            biggestAge = ageOfPerson
            return curr
        }
    }, array[0])
};
*/

// Do not edit below this line
module.exports = findTheOldest;
