import { CustomAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsersAction = createAsyncThunk(
  "users/getallusers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await CustomAxios.get(`/api/v1/user/getAllusers`);
      console.log("🚀 ~ data:", data)
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
