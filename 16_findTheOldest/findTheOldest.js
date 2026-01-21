const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = (oldest.yearOfDeath || 2026) - oldest.yearOfBirth;
        const currentPersonAge = (currentPerson.yearOfDeath || 2026) - currentPerson.yearOfBirth;

    return oldestAge < currentPersonAge ? currentPerson : oldest   
    })


};

// Do not edit below this line
module.exports = findTheOldest;
