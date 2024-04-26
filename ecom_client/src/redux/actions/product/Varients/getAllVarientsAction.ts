import { ProductAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllVarients = createAsyncThunk(
  "product/varient/get-allvarient",
  async (productId: string, { rejectWithValue }) => {
    try {
      const { data } = await ProductAxios.get(`/variants/${productId}`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
