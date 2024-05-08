const express = require("express");
const router = express.Router();
const { handleGetUserList } = require("../controllers/userlist");

router.route("/").get(handleGetUserList);
module.exports = router;
