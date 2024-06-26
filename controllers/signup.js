const Signup = require("../schemas/signupSchema");
const { setUser } = require("../services/auth");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10); // adding salt to make secure pass
const pepper = process.env.PEP_SECRET; // ading pepper to make extra secure pass

async function handlePostSignupUser(req, res) {
  const { email } = req.body;
  try {
    let findUser = await Signup.findOne({ email });
    if (findUser) {
      res.status(200).send({
        message: "Email is already registered",
        success: false,
      });
    } else {
      const hashedPassword = bcrypt.hashSync(req.body.password + pepper, salt); // hashing pass to make it secure before save it
      let User = new Signup(req.body);
      User.password = hashedPassword;
      await User.save();
      const token = setUser(req.body);
      res.status(200).send({
        token: token, // sending token
        message: "Sign Up Successful! Login Now",
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
