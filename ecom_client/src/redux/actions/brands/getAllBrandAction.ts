import { BrandAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllBrands = createAsyncThunk(
  "brand/update-brand",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await BrandAxios.get(`/brand`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
