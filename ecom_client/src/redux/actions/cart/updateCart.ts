import { CartAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCartAction = createAsyncThunk(
  "cart/update-cart",
  async (
    body: {
      productId: string;
      cartId: string;
      userId: string;
      currentQty: number;
      incQty: number;
      currentSotck: number;
    },
    { rejectWithValue }
  ) => {
    try {
      // userId, productId, qty, cartId
      const { data } = await CartAxios.put(`/cart`, {
        userId: body.userId,
        productId: body.productId,
        qty: body.incQty + body.currentQty,
        cartId: body.cartId,
        currentSotck: body.currentSotck,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
