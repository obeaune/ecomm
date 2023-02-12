import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

db.on("error", console.log.bind(console, "Connection error"));

db.once("open", () => console.log("Database connection was successful"));

const swaggerDocument = YAML.load("./swagger/product.yaml");

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
routes(app);

export default app;
