const sumAll = function(...nums) {
    let sum = 0;

    for (const elem of nums) {
        if (typeof elem !== 'number' || Number.isNaN(elem)) {
            return "ERROR"
        }       
    }
    if (nums[0] < 0 || nums[1] < 0) {
        return "ERROR"
    }

    if(nums[0] > nums[1]) {
        let temp = nums[0];
        nums[0] = nums[1];
        nums[1] = temp;
    }

    for(let i = nums[0]; i <= nums[1]; i++) {
        sum += i;
    }

    return sum;
};

sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
