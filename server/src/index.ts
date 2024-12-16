import app from "./app";
import { PORT } from "./config";
import startup from "./startup";
import setupRoutes from "./routes";

startup();

setupRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
