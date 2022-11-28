import User from "../models/User.js";
import mongoose from "mongoose";
import exress from "express";

import { registerUser } from "../controllers/users.js";
const router = exress.Router();

// register user
router.post("/register", registerUser);

export default router;
