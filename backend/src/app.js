import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
import urlRouter from "./routes/url.routes.js";
app.use("/api/v1/urls", urlRouter);

export { app };
