import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { CustomRequest } from "./customTypes";

export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = (<string>authHeader).split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (error: any, user: any) => {
      if (error) res.status(401).json("token isn't valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};
