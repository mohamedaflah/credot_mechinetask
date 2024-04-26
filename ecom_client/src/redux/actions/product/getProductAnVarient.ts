import { ProductAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

// product,varient
export const getProductAndVarient = createAsyncThunk(
  "product/getproduct/getvarient",
  async (
    param: { productId: string; varientId: string },
    { rejectWithValue }
  ) => {
    try {
      // /product/:productId/:varientId
      const { data } = await ProductAxios.get(
        `/product/${param.productId}/${param.varientId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
