const encrypt = require('../src/encrypt');

test('Returns left shift', () => {
    const plaintext = 'hello world';
    const ciphertext = encrypt(plaintext, 'left');

    expect(ciphertext).toBe('gwkki qieks');
});

test('Returns right shift', () => {
    const plaintext = 'hello world';
    const ciphertext = encrypt(plaintext, 'right');

    expect(ciphertext).toBe('jr;;p ept;f');
});
