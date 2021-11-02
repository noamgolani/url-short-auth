import express from "express";
const app = express();

import apiRoute from "./routes/apiRoute";
import shortRoute from "./routes/shortRoute";
import appRoute from "./routes/appRoute";
import errorHandler from "./middleware/errorHandler";

app.use(express.json());

app.use("/app", appRoute);
app.use("/api", apiRoute);
app.use("/", shortRoute);
app.use(errorHandler);

export default app;
