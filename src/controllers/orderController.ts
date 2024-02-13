import { Request, Response } from "express";
import { OrderModel } from "../models/Order";
import { CartModel } from "../models/Cart";
import { ProductModel } from "../models/Product";

// CREATE ORDER
export const createOrder = async (req: Request, res: Response) => {
  try {
    const cart = await CartModel.findById(req.params.cartId);

    if (!cart) {
      throw new Error("Cart is not found");
    }

    let amount = 0;

    for (const cartProduct of cart.products) {
      const product = await ProductModel.findById(cartProduct.productId);
      if (product) {
        amount += cartProduct.quantity * product.price;
      } else {
        throw new Error(`Product with ID ${cartProduct.productId} not found.`);
      }
    }

    const newOrder = new OrderModel({
      userId: cart.userId,
      products: cart.products,
      amount: amount,
      status: "pending",
    });

    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE ORDER
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE ORDER
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET USER ORDERS
export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};
