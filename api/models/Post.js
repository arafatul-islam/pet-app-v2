import mongoose from "mongoose";


const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postImg: {
      type: String,
    },
    description: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
