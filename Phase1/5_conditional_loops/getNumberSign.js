const getNumberSign = (number) => {
    if (number === 0) {
        return 'zero';
    } else if (number > 0) {
        return 'positive';
    } else {
        return 'negative';
    } 
}

module.exports = getNumberSign

//to run in node write this line first:
// const getNumberSign = require('./getNumberSign')