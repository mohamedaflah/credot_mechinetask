import { CustomAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/get-user",
  (_, { rejectWithValue }) => {
    return CustomAxios.get(`/api/v1/user/user`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => rejectWithValue(handleErrors(err)));
  }
);
