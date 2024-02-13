import { verifyTokenAndAdmin } from "../helpers/verifyToken";
import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController";

export default (router: Router) => {
  router.post("/products", verifyTokenAndAdmin, createProduct);
  router.put("/products/:id", verifyTokenAndAdmin, updateProduct);
  router.delete("/products/:id", verifyTokenAndAdmin, deleteProduct);
  router.get("/products/find/:id", getProduct);
  router.get("/products", getAllProducts);
};
