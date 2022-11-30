import express from "express";
import {
  updateUser,
  deleteUser,
  getAUser,
  followAUser,
  unfollowAUser,
} from "../controllers/users.js";

const router = express.Router();

router.put("/updateuser/:userid", updateUser);
router.delete("/deleteuser/:userid", deleteUser);
router.get("/getauser/:userid", getAUser);
router.put("/follow/:profileownerid", followAUser);
router.put("/unfollow/:profileownerid", unfollowAUser);

export default router;
