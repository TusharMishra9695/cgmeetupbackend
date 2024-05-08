const Signin = require("../schemas/signupSchema");
const { setUser } = require("../services/auth");
const bcrypt = require("bcryptjs");

async function handlePostSigninUser(req, res) {
  const { email, password } = req.body;
  try {
    let findUser = await Signin.findOne({ email });
    if (findUser) {
      const passwordMatch = await bcrypt.compare(
        password + process.env.PEP_SECRET, // comparing entered pass with hashed pass
        findUser.password
      );
      if (passwordMatch) {
        const token = setUser(req.body);
        res.status(200).send({
          token: token, // sending token
          message: "Login Successfully",
          success: true,
        });
      } else {
        res
          .status(200)
          .json({ message: "Invalid credentials!", success: false });
      }
    } else {
      res.status(200).send({
        message: "User does not exist! Signup Now",
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
