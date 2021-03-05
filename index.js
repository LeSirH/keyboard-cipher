const fs = require('fs');
const _ = require("lodash");
const prompt = require('prompt-sync')();

const plainText = prompt('Plaintext: ');
const filePath = './map.json';

const direction = prompt('Left Shift/Right Shift (l/r) : ');

const readFile = (filePath, callback) => {
    const data = fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(`Error reading file: ${err}`);
        }

        callback(JSON.parse(data));
    });
}

readFile(filePath, data => {  
    const keyMap = (direction.toUpperCase() === 'L') ? _.invert(data) : data;

    const plainTextMap = plainText.split('');
    let cipherText = '';

    for (const key of plainTextMap) {
        const shiftedKey = keyMap[key];

        if (shiftedKey === undefined) {
            throw Error(`Unknown key: ${key}`);
        }

        cipherText = `${cipherText}${shiftedKey}`;
    }

    console.log(`\nInput\t---->\t${plainText}`);
    console.log(`Output\t--->\t${cipherText}\n`);
});
