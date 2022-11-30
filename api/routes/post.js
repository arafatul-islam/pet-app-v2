import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getAPost,
  getTimeline,
} from "./../controllers/post.js";
const router = express.Router();

router.post("/createpost", createPost);
router.put("/updatepost/:postid", updatePost);
router.delete("/deletepost/:postid", deletePost);


export default router;
