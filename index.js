const fs = require('fs');
const prompt = require('prompt-sync')();

const plainText = prompt('Plaintext: ');
const filePath = './map.json';

const readFile = (filePath, callback) => {
    const data = fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(`Error reading file: ${err}`);
        }

        callback(JSON.parse(data));
    });
}

readFile(filePath, data => {
    const keyMap = data;
    const plainTextMap = plainText.split('');
    let cipherText = '';

    for (const key of plainTextMap) {
        const shiftedKey = keyMap[key];
        cipherText = `${cipherText}${shiftedKey}`;
    }

    console.log(`\nInput\t---->\t${plainText}`);
    console.log(`Output\t--->\t${cipherText}\n`);
});
