import { ProductAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProductAction = createAsyncThunk(
  "product/update-product",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  async (body: { productId: string; data: any }, { rejectWithValue }) => {
    try {
      const { data } = await ProductAxios.patch(`/product`, {
        productId: body.productId,
        data: body.data,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
