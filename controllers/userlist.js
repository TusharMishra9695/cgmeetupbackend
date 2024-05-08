const UserList = require("../schemas/signupSchema");

async function handleGetUserList(req, res) {
  try {
    let findUser = await UserList.find();
    console.log(findUser, "finduse k");
    if (findUser.length > 0) {
      const sendResult = findUser.map((user) => {
        return { firstname: user.firstname, username: user.username }; // getting only firstname and username from the array
      });
      res.status(200).send({
        result: sendResult,
        message: "User List fetched Successfully",
        success: true,
      });
    } else {
      res.status(400).send({
        message: "No User Found!",
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
  handleGetUserList,
};
