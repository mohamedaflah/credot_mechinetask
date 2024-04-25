import { BrandAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { uploadImageToCloudinary } from "@/util/uploadImage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateBrandAction = createAsyncThunk(
  "brand/update-brand",
  async (
    daat: {
      brandId: string;
      sendData: { title: string; image: FileList | null; description: string };
    },
    { rejectWithValue }
  ) => {
    try {
      daat.sendData.image = await uploadImageToCloudinary(daat.sendData.image);
      //   brandId, data
      const { data } = await BrandAxios.put(`/brand?type=update`, {
        brandId: daat.brandId,
        data: daat.sendData,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
