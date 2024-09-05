import mongoose from "mongoose";

// User Database is responsible for
// 1) Collection of form data during User Registration
// 2) Password need to be encrypted and then store into the DB
// 3) For a particular user, collect list of chats user initiated for future references
// 4) Ensure email collected by the end user is unique --> Primary Key Attribute

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  chats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
    default: [],
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
