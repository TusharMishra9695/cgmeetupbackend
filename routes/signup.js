const express = require("express");
const router = express.Router();
const { handlePostSignupUser } = require("../controllers/signup");

router.route("/").post(handlePostSignupUser);
module.exports = router;
