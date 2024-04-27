import { OrderAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersByUser = createAsyncThunk(
  "order/get-ordersbyuser",
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data } = await OrderAxios.post(`/orderbyuser`, {
        userId: userId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
