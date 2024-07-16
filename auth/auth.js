const jwt = require("jsonwebtoken");
const { getUserById } = require("../controllers/users");
const secretJwt = process.env.SECRET_JWT;

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Not authorized");
  }
  try {
    const { id } = jwt.verify(token, secretJwt);
    const user = await getUserById(id);
    if (user && user.token === token) {
      req.user = user;
      next();
    } else {
      return res.status(401).send("Not authorized");
    }
  } catch (err) {
    return res.status(401).send("Not authorized");
  }
};

module.exports = { auth };
