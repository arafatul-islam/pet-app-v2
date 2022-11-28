import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 15,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      verified: Boolean,
      default: false,
    },
    password: {
      type: String,
      min: 8,
      max: 32,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
