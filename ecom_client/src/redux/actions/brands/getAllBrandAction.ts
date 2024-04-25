import { BrandAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllBrands = createAsyncThunk(
  "brand/getAll-brand",
  async (query?:"admin"|"user", { rejectWithValue }) => {
    try {
      const { data } = await BrandAxios.get(`/brand`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
