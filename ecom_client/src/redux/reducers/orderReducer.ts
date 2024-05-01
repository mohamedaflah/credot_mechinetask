import { OrderInitial } from "@/dev/types/Order/OrderInitial";
import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "../actions/order/createOrderAciton";
import toast from "react-hot-toast";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import { getOrdersByUser } from "../actions/order/getOrdersByUser";
import { getAllOrders } from "../actions/order/getAllOrders";
import { changeOrderStatus } from "../actions/order/changeOrder";
import { AdminOrder } from "@/dev/types/Order/Order";

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
      })
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload.orders;
      })
      .addCase(getAllOrders.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      })
      .addCase(changeOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeOrderStatus.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = state.orders?.map((val) => {
          if (val._id == payload.orderId) {
            return {
              ...val,
              status: payload.status,
            };
          } else {
            return val;
          }
        }) as AdminOrder[];
      })
      .addCase(changeOrderStatus.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      });
  },
});

export default orderReducer.reducer;
