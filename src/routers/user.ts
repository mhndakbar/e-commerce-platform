import { verifyTokenAndAuthorization } from "../helpers/verifyToken";
import { Router } from "express";
import { deleteUser, updateUser } from "../controllers/userController";

export default (router: Router) => {
  router.put("/users/:id", verifyTokenAndAuthorization, updateUser);
  router.delete("/users/:id", verifyTokenAndAuthorization, deleteUser);
};
