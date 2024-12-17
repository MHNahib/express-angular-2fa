import { AppDataSource as AppDataConnector } from "./data-source";

export const PORT = process.env.PORT || 3000;
export const AppDataSource = AppDataConnector;
export const secret = process.env.SECRET || "secret";
export const tokenExpiresIn = process.env.EXPIRES_IN || "1d";
