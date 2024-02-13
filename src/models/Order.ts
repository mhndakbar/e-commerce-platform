import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
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
    status: { type: String, required: true, default: "pending" },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Order", OrderSchema);

export const getOrderById = (id: string) => OrderModel.findById(id);
export const createOrder = function (values: Record<string, any>) {
  new OrderModel(values).save().then((order) => order.toObject());
};
export const updateOrder = (id: string, values: Record<string, any>) =>
  OrderModel.findByIdAndUpdate(id, values);
export const deleteOrder = (id: string) =>
  OrderModel.findOneAndDelete({ _id: id });
