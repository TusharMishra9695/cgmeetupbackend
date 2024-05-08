const Signin = require("../schemas/signupSchema");

async function handlePostSigninUser(req, res) {
  const { email, password } = req.body;
  try {
    let findUser = await Signin.findOne({ email, password });
    if (findUser) {
      res.status(200).send({
        message: "Login Successfully",
        success: true,
      });
    } else {
      res.status(400).send({
        message: "User not exist! Signup Now",
        success: false,
      });
    }
  } catch (e) {
    res.status(500).send({
      message: `Some Internal Error From Signin`,
      success: false,
    });
  }
}
module.exports = {
  handlePostSigninUser,
};
