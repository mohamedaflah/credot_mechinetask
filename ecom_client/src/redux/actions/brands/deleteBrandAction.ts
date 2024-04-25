import { BrandAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteBrandAction = createAsyncThunk(
  "brand/delete-brand",
  async (
    sendData: {
      brandId: string;
      data: boolean;
    },
    { rejectWithValue }
  ) => {
    try {
      //   brandId, data
      const { data } = await BrandAxios.put(`/brand?type=delete`, {
        brandId: sendData.brandId,
        data: sendData.data,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
