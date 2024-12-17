import bcrypt from "bcrypt";

export * from "./responseManager.utils";

export const generateHash = async (password: string) =>
  await bcrypt.hash(password, 10);

export const compareHash = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
