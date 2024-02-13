import { Router } from "express";
import { register, login } from "../controllers/authController";

export default (router: Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
