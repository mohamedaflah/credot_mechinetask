import { OrderInitial } from "@/dev/types/Order/OrderInitial";
import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "../actions/order/createOrderAciton";
import toast from "react-hot-toast";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";

const initialState: OrderInitial = {
  loading: false,
  err: false,
  order: null,
  orders: null,
};
const orderReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.err = false;
        toast.success("Your order has been saved");
        payload;
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        toast.error(state.err)
        
      });
  },
});

export default orderReducer.reducer;
