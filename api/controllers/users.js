import User from "../models/User.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.userid || req.body.isAdmin) {
      // update user password
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(req.body.password, salt);
          req.body.password = hashedPass;
        } catch (error) {
          return res.status(400).json("password update failed");
        }
      }

      //   update user
      try {
        const user = await User.findByIdAndUpdate(
          req.body.userId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ message: "user updated", user });
      } catch (error) {
        return res.status(400).json("user update failed!");
      }
    } else {
      return res.status(400).json("you can only update your account");
    }
  } catch (error) {
    res.status(400).json("user update failed!");
  }
};

export const deleteUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.userid || req.body.isAdmin) {
      const deletedUser = await User.findByIdAndDelete(req.body.userId);
      return res.status(200).json({ message: "user deleted!", deletedUser });
    }
  } catch (error) {
    return res.status(400).json("user deletion failed!");
  }
};

export const getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);
    !user && res.status(404).json({ message: "user not found", error });

    const {
      isAdmin,
      password,
      email,
      isVerified,
      createdAt,
      updatedAt,
      __v,
      ...otherInfos
    } = user._doc;
    return res.status(201).json(otherInfos);
  } catch (error) {
    return res.status(404).json({ message: "operation failed!", error });
  }
};

export const followAUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.profileownerid) {
      const currentUser = await User.findById(req.body.userId);
      const profileOwner = await User.findById(req.params.profileownerid);

      if (!profileOwner.followers.includes(currentUser._id)) {
        // update follower list
        await profileOwner.updateOne({ $push: { followers: req.body.userId } });
        // update followeinglist
        await currentUser.updateOne({
          $push: { followings: req.params.profileownerid },
        });

        return res
          .status(200)
          .json({ message: "user has been followed", currentUser });
      } else {
        return res.status(403).json("You are already following this user");
      }
    } else {
      return res.status(400).json("You cannot follow yourself.");
    }
  } catch (error) {
    return res.status(400).json("operation failed");
  }
};

export const unfollowAUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.profileownerid) {
      const currentUser = await User.findById(req.body.userId);
      const profileOwner = await User.findById(req.params.profileownerid);

      if (profileOwner.followers.includes(currentUser._id)) {
        // update follower list
        await profileOwner.updateOne({ $pull: { followers: req.body.userId } });
        // update followeinglist
        await currentUser.updateOne({
          $pull: { followings: req.params.profileownerid },
        });

        return res
          .status(200)
          .json({ message: "user has been unfollowed", currentUser });
      } else {
        return res.status(403).json("You are not following this user");
      }
    } else {
      return res.status(400).json("You cannot unfollow yourself.");
    }
  } catch (error) {
    return res.status(400).json("operation failed");
  }
};
