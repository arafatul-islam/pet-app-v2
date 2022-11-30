import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const allUsers = await User.find();
    const isUserExist = allUsers.find(
      (user) => user.email == email || user.username == username
    );
    if (isUserExist) {
      return res.status(400).json("user already exist");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    const user = new User({
      username,
      email,
      password: hashedPass,
    });
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.json("error");
  }
};

export const loginUser = async (req, res) => {
  try {
    const user =
      (await User.findOne({ email: req.body.email })) ||
      (await User.findOne({ username: req.body.username }));
    if (!user) {
      return res.status(404).json("user not found!");
    }

    const validPass = bcrypt.compareSync(req.body.password, user.password);
    if (!validPass) {
      return res.status(400).json("password incorrect!");
    }

    res.status(201).json(user);
  } catch (error) {
    res.json("error");
  }
};

export const logoutUser = async (req, res) => {};
