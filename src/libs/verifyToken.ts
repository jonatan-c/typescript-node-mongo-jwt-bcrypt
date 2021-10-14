import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const TokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json("Access denied");

  interface IPayload {
    _id: string;
    iat: number;
    exp: number;
  }

  const payload = jwt.verify(
    token,
    process.env.TOKEN_PALABRA_SECRETA || "secretoRevelado"
  ) as IPayload;

  req.userId = payload._id;
  next();
};
