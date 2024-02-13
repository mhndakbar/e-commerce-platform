import { Request, Response } from "express";
import { ProductModel } from "../models/Product";

// CREATE PRODUCT
export const createProduct = async (req: Request, res: Response) => {
  const newProduct = new ProductModel(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE PRODCUT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET PRODUCT
export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL PRODUCTS
export const getAllProducts = async (req: Request, res: Response) => {
  const pageQueryParam = req.query.page;
  const limitQueryParam = req.query.limit;

  const page =
    typeof pageQueryParam === "string" ? parseInt(pageQueryParam) || 1 : 1;

  const limit =
    typeof limitQueryParam === "string" ? parseInt(limitQueryParam) || 5 : 5;

  try {
    let productQuery = ProductModel.find();

    const skip = (page - 1) * limit;

    const paginatedQuery = productQuery.skip(skip).limit(limit);

    const products = await paginatedQuery;
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
