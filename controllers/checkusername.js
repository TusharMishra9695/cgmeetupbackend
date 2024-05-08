const CheckUsername = require("../schemas/signupSchema");

async function handleCheckUsername(req, res) {
  const { username } = req.body;
  try {
    let findUser = await CheckUsername.findOne({ username }); // unique username finding api for optional point
    console.log(findUser, "finduser");
    if (!findUser) {
      res.status(200).send({
        message: "Username available",
        success: true,
      });
    } else {
      res.status(200).send({
        message: "Username not available",
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
  handleCheckUsername,
};
