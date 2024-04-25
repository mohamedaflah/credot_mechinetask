import { CustomAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

// /login
export const userLoginAction = createAsyncThunk(
  "user/login",
  async (
    sendData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await CustomAxios.post(`/api/v1/user/login`, sendData);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
