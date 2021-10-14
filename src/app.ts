import express, { Application } from "express";
import authRoutes from "./routes/auth";
const app: Application = express();

//middlewares
app.use(express.json());

//routes
app.use("/", authRoutes);

export default app;
