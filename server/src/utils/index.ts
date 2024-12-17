import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export * from "./responseManager.utils";
import { secret, tokenExpiresIn } from "../config";

export const generateHash = async (password: string) =>
  await bcrypt.hash(password, 10);

export const compareHash = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

export const signToken = async (email: string) =>
  await jwt.sign({ email }, secret, {
    expiresIn: tokenExpiresIn,
  });
