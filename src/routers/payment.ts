import { verifyToken } from "../helpers/verifyToken";
import { Router } from "express";
import { purchase } from "../controllers/paymentController";

export default (router: Router) => {
  router.post("/payments/purchase/:id", verifyToken, purchase);
};
