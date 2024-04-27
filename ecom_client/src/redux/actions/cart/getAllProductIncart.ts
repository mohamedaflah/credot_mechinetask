import { CartAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductsinCart = createAsyncThunk(
  "cart/getallproduct",
  async (body: { userId: string }, { rejectWithValue }) => {
    try {
      const { data } = await CartAxios.get(`/cart?userId=${body.userId}`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
