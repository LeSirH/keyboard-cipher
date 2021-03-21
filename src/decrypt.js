const _ = require('lodash');
const data = require('../data/map');

module.exports = (plaintext, direction) => {
    direction = direction.toLowerCase();

    if (direction !== 'right' && direction !== 'left') {
        throw Error(`Invalid direction provided: ${direction}`);
    }

    const cipherText = [];
    const keyMap = (direction === 'left') ? data : _.invert(data);

    for (const key of plaintext.split('')) {
        const shiftedKey = keyMap[key];
        if (shiftedKey === undefined) {
            throw Error(`Unknown key: ${key}`);
        }

        cipherText.push(shiftedKey);
    }

    return cipherText.join('');
};
