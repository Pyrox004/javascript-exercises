const repeatString = function(str, num) {
    if(num < 0) return Error
    let container = ''
    for(i = 0; i < num; i++) {
        container += str
    }
    return container
};

// Do not edit below this line
module.exports = repeatString;
