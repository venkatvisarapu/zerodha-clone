const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  watchlist: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

// This line is the most important one. It adds all the Passport methods.
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = { UserSchema };