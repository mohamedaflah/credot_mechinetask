import { ProductReducer } from "@/dev/types/Product/ProductReducer";
import { createSlice } from "@reduxjs/toolkit";
import { addProductAction } from "../actions/product/addProductAction";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import toast from "react-hot-toast";
import { getAllProductAction } from "../actions/product/getAllProductAction";
import { getAllVarients } from "../actions/product/Varients/getAllVarientsAction";

const initialState: ProductReducer = {
  loading: false,
  err: false,
  products: null,
  selectedProduct: null,
  varients: null,
};
const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductAction.fulfilled, (state, { payload }) => {
        state.products?.push(payload.product);
        state.loading = false;
        state.err = false;
        toast.success("Product added");
      })
      .addCase(addProductAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        toast.error(state.err);
      })
      .addCase(getAllProductAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductAction.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.loading = false;
        state.err = false;
      })
      .addCase(getAllProductAction.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        state.loading = false;
      })
      .addCase(getAllVarients.pending, (state) => {
        state.loading = false;
      })
      .addCase(getAllVarients.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.varients = payload.products.variants;
        state.err = false;
      })
      .addCase(getAllVarients.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        state.loading = false;
      });
  },
});
export default productReducer.reducer;
