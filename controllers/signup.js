const Signup = require("../schemas/signupSchema");

async function handlePostSignupUser(req, res) {
  const { email } = req.body;
  try {
    let findUser = await Signup.findOne({ email });
    if (findUser) {
      res.status(400).send({
        message: "Email is already registered",
        success: false,
      });
    } else {
      let User = new Signup(req.body);
      await User.save();
      res.status(200).send({
        message: "Sign Up Successful",
        success: true,
      });
    }
  } catch (e) {
    res.status(500).send({
      message: `Some Internal Error From SignUp`,
      success: false,
    });
  }
}
module.exports = {
  handlePostSignupUser,
};
