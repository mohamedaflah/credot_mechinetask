import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser = require("cookie-parser");
import { errorHandler } from "./middlewares/errorHandler";
import userRouter from "./routers/users/userRoute";
import brandRouter from "./routers/brand/brandRoute";

const app: Application = express();

const corsOptions = {
  credentials: true,
  origin: [process.env.CLIENT_SIDE_URL as string],
};

// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());


app.use(`/api/v1/user`, userRouter); // user router
app.use(`/api/v1/brand`,brandRouter)

app.use(errorHandler); // common error handler middleware

app.listen(Number(process.env.PORT), async() => console.log(`Server started`));
