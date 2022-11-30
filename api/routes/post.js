import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getAPost,
  likeAPost,
} from "./../controllers/post.js";
const router = express.Router();

router.post("/createpost", createPost);
router.put("/updatepost/:postid", updatePost);
router.delete("/deletepost/:postid", deletePost);

router.get("/getapost/:postid", getAPost);
// router.get("/gettimeline/:profileownerid", getTimeline);

router.put("/likes/:likerid/:postid", likeAPost);

export default router;
