import { BrandAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { uploadImageToCloudinary } from "@/util/uploadImage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addBrandAction = createAsyncThunk(
  "brand/addbrand",
  async (
    sendData: { title: string; image: FileList | null; description: string },
    { rejectWithValue }
  ) => {
    try {
      sendData.image = await uploadImageToCloudinary(sendData.image);
      const { data } = await BrandAxios.post(`/brand`, sendData);
      return data;
    } catch (error) {
   
      return rejectWithValue(handleErrors(error));
    }
  }
);
