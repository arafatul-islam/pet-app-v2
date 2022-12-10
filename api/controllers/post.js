import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    return res
      .status(200)
      .json({ message: "your post successfy published", savedPost });
  } catch (error) {
    return res.status(400).json("Operation Failed!");
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    if (post.userId === req.body.userId) {
      const updatedPost = await post.updateOne({ $set: req.body });

      return res.status(200).json({ message: "post updated", updatedPost });
    } else {
      return res.status(403).json("You can only update your own post");
    }
  } catch (error) {
    return res.status(404).json("post not found");
  }
};
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    if (post.userId === req.body.userId) {
      const deletedPost = await Post.findByIdAndDelete(req.params.postid);
      return res.status(200).json({ message: "post deleted", deletedPost });
    } else {
      return res.status(400).json("You are not allowed to delete this post");
    }
  } catch (error) {
    return res.status(404).json("post not found");
  }
};
export const likeAPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    if (!post.likes.includes(req.params.likerid)) {
      const updatedPost = await post.updateOne({
        $push: { likes: req.params.likerid },
      });

      return res.status(200).json({ message: "post liked", updatedPost });
    } else {
      const updatedPost = await post.updateOne({
        $pull: { likes: req.params.likerid },
      });

      return res.status(200).json({ message: "post disliked ", updatedPost });
    }
  } catch (error) {
    return res.status(404).json("post not found");
  }
};

export const getAPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).json("post not found");
  }
};
export const getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    return res.status(404).json("operation failed");
  }
};
