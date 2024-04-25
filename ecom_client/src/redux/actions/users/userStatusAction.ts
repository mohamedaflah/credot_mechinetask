import { CustomAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userStatusAction = createAsyncThunk(
  "user/update-status",
  async (query: { status: boolean; userId: string }, { rejectWithValue }) => {
    try {
      // status, userId
      const { data } = await CustomAxios.put(
        `/api/v1/user/user?status=${query.status}&userId=${query.userId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
