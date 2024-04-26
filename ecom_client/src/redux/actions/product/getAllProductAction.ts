import { ProductAxios } from "@/constants/axiosInstance";
// type === "admin"
import { handleErrors } from "@/util/handleError";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductAction = createAsyncThunk(
  "product/getAllproduct",
  async (query: "admin" | "user", { rejectWithValue }) => {
    try {
      const { data } = await ProductAxios.get(`/product?type=${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
