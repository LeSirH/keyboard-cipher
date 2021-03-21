const decrypt = require('../src/decrypt');

test('Returns left shift', () => {
    const ciphertext = 'gwkki qieks';
    const plaintext = decrypt(ciphertext, 'left');

    expect(plaintext).toBe('hello world');
})

test('Returns right shift', () => {
    const ciphertext = 'jr;;p ept;f';
    const plaintext = decrypt(ciphertext, 'right');

    expect(plaintext).toBe('hello world');
});
