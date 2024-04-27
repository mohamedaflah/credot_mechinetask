import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser = require("cookie-parser");
import { errorHandler } from "./middlewares/errorHandler";
import userRouter from "./routers/users/userRoute";
import brandRouter from "./routers/brand/brandRoute";

import productRouter from "./routers/Product/ProductRoute";
import cartRouter from "./routers/cart/cartRouter";
import orderRoute from "./routers/Order/orderRoute";

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
app.use(`/api/v1/brand`, brandRouter); // brand router
app.use(`/api/v1/product`, productRouter); // product router
app.use(`/api/v1/cart`, cartRouter); // cart router
app.use(`/api/v1/order`, orderRoute); // order router

app.use(errorHandler); // common error handler middleware

app.listen(Number(process.env.PORT), async () => console.log(`Server started`));
