import { productEdit } from "@/Schema/Product/productEditSchema";
import { categories } from "@/constants/categories";
import { getAllBrands } from "@/redux/actions/brands/getAllBrandAction";
import { AppDispatch, RootState } from "@/redux/store";
import { Input } from "@/shad/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { LoaderButton } from "../custom/LoaderButton";
import { updateProductAction } from "@/redux/actions/product/updateProductAction";

interface ChildProp {
  category: string;
  brand: string;
  productName: string;
  productId: string;
}
export function ProductEditForm({
  category,
  brand,
  productName,
  productId,
}: ChildProp) {
  const {
    setValue,
    formState: { errors },
    handleSubmit,
    
    watch,
  } = useForm<z.infer<typeof productEdit>>({
    resolver: zodResolver(productEdit),
    defaultValues: {
      brand: "",
      category: "",
      productName: "",
    },
  });

  const { brands } = useSelector((state: RootState) => state.brand);
  useEffect(() => {
    
    setValue("productName", productName);
    setValue("category", category);
    if (brands) {
      for (let i = 0; i < brands?.length; i++) {
        if (brands[i].title == brand) {
          setValue("brand", String(brands[i]?._id));
        }
      }
    }
  }, [brands]);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);
  const { loading } = useSelector((state: RootState) => state.product);
  const submitProductEditForm = (values: z.infer<typeof productEdit>) => {
    console.log(values);

    dispatch(updateProductAction({ productId: productId, data: values }));
  };
  return (
    <form
      className="w-full flex flex-col"
      onSubmit={handleSubmit(submitProductEditForm)}
    >
      <div className="space-y-1 relative h-full">
        <label htmlFor="" className="text-sm text-black">
          Product title
        </label>
        <Input
          type="text"
          onChange={(e) => setValue("productName", e.target.value)}
          placeholder="Product name or title"
          className="text-black border-black"
          value={watch("productName")}
        />
        <p className="text-[12px] h-3 text-red-500">
          {errors && errors.productName?.message}
        </p>
      </div>
      <div className="space-y-1 w">
        <label htmlFor="" className="text-sm text-black">
          select category
        </label>
        <select
          onChange={(e) => setValue("category", e.target.value)}
          className="w-full h-10 px-3 rounded-md bg-background border border-black text-black"
          id=""
        >
          {categories?.map((value) => (
            <>
              <option
                value={value}
                className="text-black"
                selected={watch("category") === value}
              >
                {value}
              </option>
            </>
          ))}
        </select>
        <p className="text-[12px] h-3 text-red-500">
          {errors && errors.category?.message}
        </p>
      </div>
      <div className="space-y-1">
        <label htmlFor="" className="text-sm">
          select brand
        </label>
        <select
          onChange={(e) => setValue("brand", e.target.value)}
          className="w-full h-10 px-3 rounded-md bg-background border border-black text-black"
          id=""
        >
          {brands?.map((value) => (
            <>
              <option
                value={value._id}
                className="text-black"
                selected={
                  watch("brand") === value._id
                }
              >
                {value.title}
              </option>
            </>
          ))}
        </select>
        <p className="text-[12px] h-3 text-red-500">
          {errors && errors.brand?.message}
        </p>
      </div>
      <div className="mt-2">
        <LoaderButton loading={loading} type="submit" className="w-full">
          submit
        </LoaderButton>
      </div>
    </form>
  );
}
