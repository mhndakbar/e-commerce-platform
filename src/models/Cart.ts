import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export const CartModel = mongoose.model("Cart", CartSchema);

export const getCartById = (id: string) => CartModel.findById(id);
export const createCart = function (values: Record<string, any>) {
  new CartModel(values).save().then((cart) => cart.toObject());
};
export const updateCart = (id: string, values: Record<string, any>) =>
  CartModel.findByIdAndUpdate(id, values);
export const deleteCart = (id: string) =>
  CartModel.findOneAndDelete({ _id: id });
