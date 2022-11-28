import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, profilePic, coverPic, isAdmin } =
      req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const existingUsers = await User.find();
    const isUserExist = existingUsers.find(
      (user) => user.username == username || user.email == email
    );
    if (!isUserExist) {
      const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });

      res.status(200).json(user);
    }
    res.status(400).json("user already exists");
  } catch (error) {
    res.status(400).json(error);
  }
};
