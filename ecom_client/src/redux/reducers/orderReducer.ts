import { OrderInitial } from "@/dev/types/Order/OrderInitial";
import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "../actions/order/createOrderAciton";
import toast from "react-hot-toast";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import { getOrdersByUser } from "../actions/order/getOrdersByUser";

const initialState: OrderInitial = {
  loading: false,
  err: false,
  userorder: null,
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
        toast.error(state.err);
      })
      .addCase(getOrdersByUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrdersByUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userorder = payload.order;
        state.err = false;
      })
      .addCase(getOrdersByUser.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        toast.error(state.err);
        state.loading = false;
        
      });
  },
});

export default orderReducer.reducer;
