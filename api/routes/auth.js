import exress from "express";

import { registerUser } from "../controllers/users.js";
const router = exress.Router();

// register user
router.post("/register", registerUser);

export default router;
