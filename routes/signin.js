const express = require("express");
const router = express.Router();
const { handlePostSigninUser } = require("../controllers/signin");

router.route("/").post(handlePostSigninUser);
module.exports = router;
