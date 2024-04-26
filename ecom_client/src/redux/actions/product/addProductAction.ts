import { productSchema } from "@/Schema/Product/ProductSchema";
import { ProductAxios } from "@/constants/axiosInstance";
import { Product } from "@/dev/types/Product/Product";

import { handleErrors } from "@/util/handleError";
import { uploadImageToCloudinary } from "@/util/uploadImage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";

export const addProductAction = createAsyncThunk(
  "product/addproduct",
  async (sendData: z.infer<typeof productSchema>, { rejectWithValue }) => {
    try {
      const images = [];
      for (let i = 0; i < sendData.images.length; i++) {
        const newImg = await uploadImageToCloudinary(sendData.images[i]);
        images.push(newImg);
      }
      const sendPaylod: Product = {
        productName: sendData.productName,
        brand: sendData.brand,
        category: sendData.category,
        variants: [
          {
            color: sendData.color,
            description: sendData.description,
            images: images,
            memory: sendData.memory,
            modelNumber: sendData.modelNumber,
            releasedDate: new Date(sendData.releasedDate),
            price: sendData.price,
            specifications: sendData.specifications,
            status: sendData.status as "publish" | "unpublish",
            stock: sendData.stock,
          },
        ],
      };
      const { data } = await ProductAxios.post("/product", sendPaylod);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
