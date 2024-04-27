import { CartInitial } from "@/dev/types/Cart/cartReducer";
import { createSlice } from "@reduxjs/toolkit";
import { addToCartAction } from "../actions/cart/addTocart";
import toast from "react-hot-toast";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import { getAllProductsinCart } from "../actions/cart/getAllProductIncart";

const initialState: CartInitial = {
  loading: false,
  cart: null,
  err: false,
  cartproducts: null,
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addToCartAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartproducts?.push(payload.cartProduct);
        state.err = false;
        toast.success("Item added in cart ");
      })
      .addCase(addToCartAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      })
      .addCase(getAllProductsinCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsinCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cart = payload.cart;
        state.err = false;
      })
      .addCase(getAllProductsinCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      });
  },
});
export default cartReducer.reducer;
