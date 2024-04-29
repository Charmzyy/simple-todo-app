const  jwt = require("jsonwebtoken"); 
const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '5m' });
};

module.exports = generateAccessToken;
