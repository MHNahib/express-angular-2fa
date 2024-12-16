import { AppDataSource as AppDataConnector } from "./data-source";

export const PORT = process.env.PORT || 3000;
export const AppDataSource = AppDataConnector;
