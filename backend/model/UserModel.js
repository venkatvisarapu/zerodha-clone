const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

const UserModel =  model("User", UserSchema); // Note: Mongoose convention is to use a singular, capitalized name like "User"

module.exports = { UserModel };