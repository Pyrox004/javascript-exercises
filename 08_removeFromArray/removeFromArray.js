const removeFromArray = function(arr, ...numbers) {
    for(i = 0; i < arr.length; i++) {
        if(numbers.includes(arr[i])) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
