import { OrderAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllOrders = createAsyncThunk(
  "order/get-getAllorders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await OrderAxios.get(`/order`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
