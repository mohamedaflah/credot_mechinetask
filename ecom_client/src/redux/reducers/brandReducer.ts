import { BrandInitialState } from "@/dev/types/Brand/brandReducer";
import { createSlice } from "@reduxjs/toolkit";
import { getAllBrands } from "../actions/brands/getAllBrandAction";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import { addBrandAction } from "../actions/brands/addBrandAction";
import toast from "react-hot-toast";
import { updateBrandAction } from "../actions/brands/updateBrandAction";
import { Brand } from "@/dev/types/Brand/Brand";
import { deleteBrandAction } from "../actions/brands/deleteBrandAction";

const initialState: BrandInitialState = {
  loading: false,
  err: false,
  brands: null,
  brand: null,
};
const brandReducer = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = payload.brands;
        state.err = false;
      })
      .addCase(getAllBrands.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        state.loading = false;
        state.brands = null;
      })
      .addCase(addBrandAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBrandAction.fulfilled, (state, { payload }) => {
        state.brands?.push(payload.brand);
        state.loading = false;
        state.err = false;
      })
      .addCase(addBrandAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        toast.error(state.err);
      })
      .addCase(updateBrandAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBrandAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = state.brands?.map((brand) => {
          if (brand._id === payload.brand._id) {
            return payload.brand;
          } else {
            return brand;
          }
        }) as Brand[];
        state.err = false;
      })
      .addCase(updateBrandAction.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        state.loading = false;
      })
      .addCase(deleteBrandAction.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteBrandAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = state.brands?.map((brand) => {
          if (brand._id === payload.brand._id) {
            return payload.brand;
          } else {
            brand;
          }
        }) as Brand[];
        state.err = false;
      })
      .addCase(deleteBrandAction.rejected, (state, { payload }) => {
        state.err = (payload as ErrorPayload).message;
        state.loading = false;
      });
  },
});

export default brandReducer.reducer;
