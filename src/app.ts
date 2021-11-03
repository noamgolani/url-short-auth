import express from "express";
const app = express();

import apiRoute from "./routes/apiRoute";
import shortRoute from "./routes/shortRoute";
import appRoute from "./routes/appRoute";
import errorHandler from "./middleware/errorHandler";

app.use(express.json());

app.use("/app", appRoute); // front
app.use("/api", apiRoute); // api
app.use("/", shortRoute); // short route redirecting

app.use(errorHandler);

export default app;
