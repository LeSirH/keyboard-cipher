const fs = require('fs');

module.exports = filePath => {
    const data = fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            throw Error(`Error reading file ${filePath}: ${err}`);
        }
    });

    return JSON.parse(data);
};
