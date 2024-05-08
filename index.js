const express = require("express");
const port = 5000;
require("dotenv").config();
require("./utils/dbConfig");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const signup = require("./routes/signup");
const signin = require("./routes/signin");
const userlist = require("./routes/userlist");

app.use("/api/signup", signup);
app.use("/api/signin", signin);
app.use("/api/user-list", userlist);

app.listen(port, () => {
  console.log(`listening in ${port}`);
});
