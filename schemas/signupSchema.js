const mongoose = require("mongoose");
const signupSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    phoneNumber: { type: Number },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("signup", signupSchema);
