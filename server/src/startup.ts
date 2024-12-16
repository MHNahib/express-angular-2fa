import { PORT } from "./config";

export const startup = () => {
  if (!PORT) process.exit(1);
};

export default startup;
