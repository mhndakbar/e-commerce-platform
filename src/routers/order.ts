import {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} from "../helpers/verifyToken";
import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getUserOrders,
  updateOrder,
} from "../controllers/orderController";

export default (router: Router) => {
  router.post("/orders", verifyToken, createOrder);
  router.put("/orders/:id", verifyTokenAndAdmin, updateOrder);
  router.delete("/orders/:id", verifyTokenAndAdmin, deleteOrder);
  router.get(
    "/orders/find/:userId",
    verifyTokenAndAuthorization,
    getUserOrders
  );
};
