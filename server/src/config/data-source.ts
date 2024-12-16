import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "../db.sqlite",
  synchronize: true,
  logging: false,
  entities: ["./src/db/entity/*.ts"],
});
