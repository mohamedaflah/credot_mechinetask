import { CartAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartProductIds = createAsyncThunk(
  "cart/get-cart",
  async (userId: string, { rejectWithValue }) => {
    // getcartproducts
    try {
      const { data } = await CartAxios.post(`/getcartproducts`, {
        userId: userId,
    });
    console.log("🚀 ~ data:", data) 
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
