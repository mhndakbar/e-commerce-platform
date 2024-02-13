import { Router } from "express";
import auth from "./auth";
import carts from "./cart";
import orders from "./order";
import payments from "./payment";
import products from "./product";
import users from "./user";

const router = Router();

export default (): Router => {
  auth(router);
  carts(router);
  orders(router);
  payments(router);
  products(router);
  users(router);
  return router;
};
