import { Response } from "express";
import { CustomRequest } from "../helpers/customTypes";
import { OrderModel } from "../models/Order";
import { ProductModel } from "../models/Product";

// CREATE A PURCHASE (simulate purchasing)
export const purchase = async (req: CustomRequest, res: Response) => {
  try {
    const order = await OrderModel.findById(req.params.id);

    if (!order) {
      throw new Error("Order not found");
    }

    if (order.userId !== req.user.id) {
      throw new Error("You are not authorized to make this purchase.");
    }

    const orderProducts = order.products;

    // loop through order's products
    for (const orderProduct of orderProducts) {
      const product = await ProductModel.findById(orderProduct.productId);

      // Check if product available
      if (!product) {
        throw new Error(`Product with ID ${orderProduct.productId} not found.`);
      } else if (product.quantity < orderProduct.quantity) {
        throw new Error(`Product ${product.title} is out of stock.`);
      }
    }

    // If all products are available, update their quantities
    for (const orderProduct of orderProducts) {
      const product = await ProductModel.findById(orderProduct.productId);
      product.quantity -= orderProduct.quantity;
      await product.save();
    }

    order.status = "paid";
    await order.save();

    res.status(200).json("You've successfully placed your order!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
