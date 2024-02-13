import { Request, Response } from "express";
import { CartModel } from "../models/Cart";

// CREATE CART
export const createCart = async (req: Request, res: Response) => {
  const newCart = new CartModel(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE CART
export const updateCart = async (req: Request, res: Response) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE CART
export const deleteCart = async (req: Request, res: Response) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GEt USER CART
export const getUserCart = async (req: Request, res: Response) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};
