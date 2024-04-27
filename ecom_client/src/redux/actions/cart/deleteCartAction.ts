import { CartAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCartAction = createAsyncThunk(
  "cart/delete-cart",
  async (body: { userId: string; productId: string }, { rejectWithValue }) => {
    try {
      const { data } = await CartAxios.delete(
        `/cart?userId=${body.userId}&productId=${body.productId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
