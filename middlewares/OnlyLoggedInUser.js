const { verifyUser } = require("../services/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const userId = req.headers["authorization"];
  if (userId) {
    const token = userId.split(" ")[1];
    const user = verifyUser(token);
    if (!user) {
      res.status(401).send({
        message: "Unauthorized access !", // token not matched
        success: false,
      });
    } else {
      req.user = user; // token matched send user data
      next();
    }
  } else {
    res.status(400).send({
      message: "Please Login First !",
      success: false,
    });
  }
}
module.exports = {
  restrictToLoggedInUserOnly,
};
