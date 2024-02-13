import {
  verifyTokenAndAuthorization,
  verifyToken,
} from "../helpers/verifyToken";
import { Router } from "express";
import {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
} from "../controllers/cartController";

export default (router: Router) => {
  router.post("/carts", verifyToken, createCart);
  router.put("/carts/:id", verifyToken, updateCart);
  router.delete("/carts/:id", verifyToken, deleteCart);
  router.get("/carts/find/:userId", verifyTokenAndAuthorization, getUserCart);
};
