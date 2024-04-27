import { CartAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartAction = createAsyncThunk(
  "cart/add-to-cart",
  async (
    body: { userId: string; productId: string; qty: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await CartAxios.post(`/cart`, {
        userId: body.userId,
        productId: body.productId,
        qty: body.qty,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
