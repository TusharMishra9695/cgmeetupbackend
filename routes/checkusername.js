const express = require("express");
const router = express.Router();
const { handleCheckUsername } = require("../controllers/checkusername");

router.route("/").post(handleCheckUsername);
module.exports = router;
