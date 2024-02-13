import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", ProductSchema);

export const getProducts = () => ProductModel.find();
export const getProductById = (id: string) => ProductModel.findById(id);
export const createProduct = function (values: Record<string, any>) {
  new ProductModel(values).save().then((product) => product.toObject());
};
export const updateProduct = (id: string, values: Record<string, any>) =>
  ProductModel.findByIdAndUpdate(id, values);
export const deleteProduct = (id: string) =>
  ProductModel.findOneAndDelete({ _id: id });
