const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/error");

const authMiddleware = (req, res, next) => {
    
  let token =
    req.headers["cookie"] ||
    req.headers["x-access-token"] ||
    req.headers["authorization"]; // Express headers are auto converted to lowercase
console.log(token);
  if (!token) return next(new ErrorResponse("Not Authenticated", 403));

  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  req.user = jwt.verify(token, process.env.TOKEN_SECRET);
  next();
};

module.exports = authMiddleware;
