const _ = require("lodash");
const readJSON = require('../lib/readJSON');

module.exports = (plaintext, direction='right') => {
    direction = direction.toLowerCase();

    if (direction !== 'right' && direction !== 'left') {
        throw Error(`Invalid direction provided: ${direction}`);
    }

    const cipherText = [];
    const data = readJSON('./map.json');
    const keyMap = (direction === 'left') ? _.invert(data) : data;
    
    for (let key of plaintext.split('')) {
        const shiftedKey = keyMap[key];
        if (shiftedKey === undefined) {
            throw Error(`Unknown key: ${key}`);
        }

        cipherText.push(shiftedKey);
    }

    return cipherText.join('');
};
