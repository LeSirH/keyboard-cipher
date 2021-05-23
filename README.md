# Keyboard Cipher
[![Linux](https://github.com/sh34/keyboard-cipher/actions/workflows/linux.yml/badge.svg)](https://github.com/sh34/keyboard-cipher/actions/workflows/linux.yml)
[![Windows](https://github.com/sh34/keyboard-cipher/actions/workflows/windows.yml/badge.svg)](https://github.com/sh34/keyboard-cipher/actions/workflows/windows.yml)
![](https://img.shields.io/npm/dt/keyboard-cipher)use rand::Rng;

![](https://img.shields.io/github/languages/code-size/LeSirH/keyboard-cipher?label=Size)

A keyboard shift cipher encryption and decryption algorithm.

## Installation
```bash
# Install with npm
$ npm i --save keyboard-cipher 

# Install with Yarn
$ yarn add keyboard-cipher
```

## Examples

### Encryption
```js
var keyboardCipher = require('keyboard-cipher');

// Message to encrypt.
var plainText = 'hello world';

// Encrypt the message with either types of shifts: left or right.
var leftCipherText = keyboardCipher.encrypt(plainText, 'left');
var rightCipherText = keyboardCipher.encrypt(plainText, 'right');

// Log the results.
console.log(leftCipherText);
console.log(rightCipherText);
```

### Decryption
```js
var keyboardCipher = require('keyboard-cipher');

// Message to decrypt.
var cipherText = 'hello world';

// Decrypt the message with either types of shifts: left or right.
var leftPlainText = keyboardCipher.decrypt(cipherText, 'left');
var rightPlainText = keyboardCipher.decrypt(cipherText, 'right');

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
$ npm install
$ npm run test
```
4. Before committing, run [ESLint](https://eslint.org/).
```bash
$ npm run lint
```

### Security
See the [security policy](/SECURITY.md) for reporting vulnerabilities.

## License
[MIT License](/LICENSE) :copyright: Ryan Harrington
