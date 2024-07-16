const jwt = require("jsonwebtoken");
const secretJwt = process.env.SECRET_JWT;

const token = (user) => {
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, secretJwt);
  return token;
};

module.exports = token;
