import { OrderPayload } from "@/dev/types/Order/ordrePayload";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "order/create-order",
  (data: OrderPayload, { rejectWithValue }) => {
    try {
        // const {}=await 
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);

// const OrderModel = new mongoose.Schema(
//   {
//     userId: mongoose.Types.ObjectId,
//     paymentMode: {
//       type: String,
//       enum: ["online", "cod"],
//     },
//     status: {
//       type: String,
//       enum: ["pending", "shipped", "delivered"],
//     },
//     totalAmount: {
//       type: Number,
//     },
//     products: [
//       {
//         productId: mongoose.Types.ObjectId,
//         qty: Number,
//         price: Number,
//       },
//     ],
//     address: {
//       place: String,
//       street: String,
//       state: String,
//       pincode: String,
//       phone: String,
//       email: String,
//     },
//   },
