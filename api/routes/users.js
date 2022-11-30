import express from "express";
import { updateUser, deleteUser, getAUser } from "../controllers/users.js";

const router = express.Router();

router.put("/updateuser/:userid", updateUser);
router.delete("/deleteuser/:userid", deleteUser);
router.get("/getauser/:userid", getAUser);

export default router;
