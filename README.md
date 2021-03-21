# Keyboard Cipher
![](https://github.com/LeSirH/keyboard-cipher/actions/workflows/test.yml/badge.svg)
![](https://img.shields.io/github/languages/code-size/LeSirH/keyboard-cipher?label=Size)
![](https://img.shields.io/jsdelivr/npm/hm/keyboard-cipher?label=Downloads)

A keyboard shift cipher encryption and decryption algorithm.

## Installation
```bash
$ npm install keyboard-cipher --save
```

## Examples

### Encryption
```js
var keyboardCipher = require('keyboard-cipher');

// Message you want to encrypt.
var plainText = 'hello world';

// Encrypt the message with 2 types of shifts: left or right.
var leftCipherText = keyboardCipher.encrypt(plainText, 'left');
var rightCipherText = keyboardcipher.encrypt(plainText, 'right');

// Log the results.
console.log(leftCipherText);
console.log(rightCipherText);
```

### Decryption
```js
var keyboardCipher = require('keyboard-cipher');

// Message you want to decrypt.
var cipherText = 'hello world';

// Decrypt the message with 2 types of shifts: left or right.
var leftPlainText = keyboardCipher.decrypt(cipherText, 'left');
var rightPlainText = keyboardcipher.decrypt(plainText, 'right');

// Log the results.
console.log(leftPlainText);
console.log(rightPlainText);
```

## Contributing
1. Fork the repository.
2. Clone the forked repository.
```bash
$ git clone git@github.com:GITHUB_USERNAME/keyboard-cipher.git
```
3. Install and test.
```bash
$ yarn install
$ yarn test
```
4. Before committing, run ESLint.
```bash
$ yarn lint
```

### Security
See the [security policy](/SECURITY.md).

## License
[MIT License](/LICENSE) :copyright: Ryan Harrington