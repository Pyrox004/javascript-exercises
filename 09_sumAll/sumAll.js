const sumAll = function(a, b) {
    if(!Number.isInteger(a)
    || !Number.isInteger(b) 
    || a < 0
    || b < 0) {
        return 'ERROR'
    }

    let loopArr = []
    
    for(let i = 0; i <= Math.abs(b - a); i++) {
        if(a < b) {
            loopArr.push(a + i)
        } else {
            loopArr.push(a - i)
        }
    }
    return loopArr.reduce((sum, current) => sum + current, 0)
};

// Do not edit below this line
module.exports = sumAll;
