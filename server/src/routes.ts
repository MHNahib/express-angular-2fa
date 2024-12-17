import { Application } from "express";

import homeRoute from "./routes/home.route";
import userRoute from "./routes/auth.route";

const setupRoutes = (app: Application) => {
  app.use("/", homeRoute);
  app.use("/auth", userRoute);
};

export default setupRoutes;
