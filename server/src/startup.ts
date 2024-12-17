import { AppDataSource, PORT } from "./config";

export const startup = () => {
  try {
    if (!PORT) process.exit(1);

    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
        process.exit(1);
      });
  } catch (error) {
    console.log("error: ", error);
  }
};

export default startup;
