import { CustomAxios } from "@/constants/axiosInstance";
import { User } from "@/dev/types/user.type";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userSignupAction = createAsyncThunk(
  "user/signp",
  async (sendPayload: User, { rejectWithValue }) => {
    try {
      const { data } = await CustomAxios.post(`/api/v1/user/user`, sendPayload);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
