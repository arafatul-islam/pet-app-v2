import exress from "express";

import { registerUser, loginUser, logoutUser } from "../controllers/auth.js";
const router = exress.Router();

// register user
router.post("/register", registerUser);

router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
