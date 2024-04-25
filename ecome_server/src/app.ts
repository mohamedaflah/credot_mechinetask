import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import { errorHandler } from "./middlewares/errorHandler";
import userRouter from "./routers/userRoute";
dotenv.config();
const app: Application = express();

const corsOptions = {
  credentials: true,
  origin: [process.env.CLIENT_SIDE_URL as string],
};

// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(`/api/v1/user`, userRouter); // user router

app.use(errorHandler); // common error handler middleware

app.listen(Number(process.env.PORT), () => console.log(`Server started`));
