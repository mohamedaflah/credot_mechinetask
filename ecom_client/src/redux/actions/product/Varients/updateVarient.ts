import { productSchema } from "@/Schema/Product/ProductSchema";
import { ProductAxios } from "@/constants/axiosInstance";
import { handleErrors } from "@/util/handleError";
import { uploadImageToCloudinary } from "@/util/uploadImage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";

export const updateVarientAction = createAsyncThunk(
  "product/varient/updatevarient",
  async (
    paylod: {
      sendData: z.infer<typeof productSchema>;
      productId: string;
      varientId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const images = [];
      for (let i = 0; i < paylod.sendData.images.length; i++) {
        const newImg = await uploadImageToCloudinary(paylod.sendData.images[i]);
        images.push(newImg);
      }
      const sendPaylod = {
        color: paylod.sendData.color,
        description: paylod.sendData.description,
        images: images,
        memory: paylod.sendData.memory,
        modelNumber: paylod.sendData.modelNumber,
        releasedDate: new Date(paylod.sendData.releasedDate),
        price: paylod.sendData.price,
        specifications: paylod.sendData.specifications,
        status: paylod.sendData.status as "publish" | "unpublish",
        stock: paylod.sendData.stock,
      };
      const { data } = await ProductAxios.put(
        `/product/${paylod.productId}/${paylod.varientId}`,
        sendPaylod
      );
      //   /product/:productId/:varientId
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
