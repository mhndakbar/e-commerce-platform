import { Request, Response } from "express";
import { UserModel } from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

// REGISTER NEW USER
export const register = async (req: Request, res: Response) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC || ""
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error: any) {
    if (error.code === 11000) {
      res
        .status(400)
        .json(
          "This username or the email is already in use. Please choose another one."
        );
    } else {
      res.status(500).json("An error occurred while processing your request.");
    }
  }
};

// LOGIN USER
export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });

    if (!user) {
      throw new Error("Wrong credentials!");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC || ""
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) {
      throw new Error("Wrong credentials!");
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC || "",
        { expiresIn: "3d" }
      );
      const { password, ...others } = user.toObject();
      res.status(200).json({ ...others, accessToken });
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
