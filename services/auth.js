const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(
    {
      email: user.email,
    },
    process.env.MONGODB_SECRET
  );
}

function verifyUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.MONGODB_SECRET);
  } catch (e) {
    return false;
  }
}
module.exports = {
  setUser,
  verifyUser,
};
