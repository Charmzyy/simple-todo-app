const crypto = require('crypto');

// Generate a random string
const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex');
};

// Usage
const secretKey = generateRandomString(32); // 32 bytes (256 bits) is a common size for secret keys
console.log(secretKey)
