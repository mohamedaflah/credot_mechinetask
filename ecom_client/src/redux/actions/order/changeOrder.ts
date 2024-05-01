import { OrderAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const changeOrderStatus = createAsyncThunk(
  "order/get-changeorders",
  async (
    sendData: { orderId: string; status: string },
    { rejectWithValue }
  ) => {
    try {
      // const { orderId, data } = req.body;
      const { data } = await OrderAxios.patch(`/order`, {
        orderId: sendData.orderId,
        data: { status: sendData.status },
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
