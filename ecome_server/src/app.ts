import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
dotenv.config();
const app: Application = express();

const corsOptions = {
  credentials: true,
  origin: [process.env.CLIENT_SIDE_URL as string],
};

// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());


app.listen(Number(process.env.PORT), () => console.log(`Server started`));
