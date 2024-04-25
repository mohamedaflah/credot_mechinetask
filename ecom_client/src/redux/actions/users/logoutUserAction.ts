import { CustomAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogoutAction = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await CustomAxios.get(`/api/v1/user/logout`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
