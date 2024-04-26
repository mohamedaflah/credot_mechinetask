import { getAllBrands } from "@/redux/actions/brands/getAllBrandAction";
import { AppDispatch, RootState } from "@/redux/store";
import { Input } from "@/shad/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/shad/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import upload from "@/assets/upl.svg";
import { CalendarIcon, X } from "lucide-react";
import { Textarea } from "@/shad/ui/textarea";
import { Sketch } from "@uiw/react-color";
import { Popover, PopoverContent, PopoverTrigger } from "@/shad/ui/popover";
import { Button } from "@/shad/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/shad/ui/calendar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { productSchema } from "@/Schema/Product/ProductSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { format } from "date-fns";
import { LoaderButton } from "@/components/custom/LoaderButton";

import { useNavigate, useParams } from "react-router-dom";
import { ProductAxios } from "@/constants/axiosInstance";
import { addVarientAction } from "@/redux/actions/product/Varients/addNewVarient";

export function AddVarient() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const { loading } = useSelector((state: RootState) => state.product);

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      brand: "",
      category: "",
      color: "",
      images: [],
      description: "",
      memory: "",
      modelNumber: "",
      productName: "",
      releasedDate: "",
      status: "",
      specifications: [],
    },
  });

  const [spec, setSpec] = useState<string>("");
  const [memmoryerr, setMemmoryErr] = useState<boolean>(false);

  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // /product
    ProductAxios.post(`/getoneproduct`, { productId }).then((res) => {
      setValue("category", String(res.data.product.category));
      setValue("productName", String(res.data.product.productName));
      setValue("brand", String(res.data.product.brand));
    });
  }, [productId, setValue]);
  const submitProductForm = (values: z.infer<typeof productSchema>) => {
    values;
    console.log("🚀 ~ submitProductForm ~ values:", values);
    dispatch;
    navigate;
    dispatch(addVarientAction({ productId: String(productId), sendData: values })).then(
      (res) => {
        if (res.type.endsWith("fulfilled")) {
          navigate(`/admin/varient/${productId}`);
        }
      }
    );

    if (
      values.category &&
      values.category.split(
        " " as unknown as {
          [Symbol.split](string: string, limit?: number | undefined): string[];
        }
      )[
        values.category.split(
          " " as unknown as {
            [Symbol.split](
              string: string,
              limit?: number | undefined
            ): string[];
          }
        ).length - 1
      ] === "Phone"
    ) {
      if (!values.memory) {
        return setMemmoryErr(true);
      } else {
        setMemmoryErr(false);
      }
    }
  };
  return (
    <main className="w-full h-full overflow-y-auto">
      <div className="w-full h-10 flex">
        <h1>Add new Varient</h1>
      </div>
      <form
        className="w-full flex flex-col space-y-3 "
        onSubmit={handleSubmit(submitProductForm)}
      >
        <div className="w-full min-h-12  gap-5 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 ">
          <div className="space-y-1 relative h-full">
            <label htmlFor="" className="text-sm">
              Product title
            </label>
            <Input
              type="text"
              onChange={(e) => setValue("productName", e.target.value)}
              placeholder="Product name or title"
              value={watch("productName")}
              className="pointer-events-none"
            />
            <p className="text-[12px] h-3 text-red-500">
              {errors && errors.productName?.message}
            </p>
          </div>
          <div className="space-y-1 w">
            <label htmlFor="" className="text-sm">
              select category
            </label>
            <Input
              type="text"
              value={watch("category")}
              placeholder="Product name or title"
              className="pointer-events-none "
            />
            <p className="text-[12px] h-3 text-red-500">
              {errors && errors.category?.message}
            </p>
          </div>
          <div className="space-y-1">
            <label htmlFor="" className="text-sm">
              select brand
            </label>
            <div className="pointer-events-none h-10 w-full bg-background  rounded-md flex gap-2 items-center px-3">
              <img
                src={
                  watch("brand").split(
                    "[(*)]" as unknown as {
                      [Symbol.split](
                        string: string,
                        limit?: number | undefined
                      ): string[];
                    }
                  )[1]
                }
                className="size-6 rounded-full"
                alt=""
              />
              {
                watch("brand").split(
                  "[(*)]" as unknown as {
                    [Symbol.split](
                      string: string,
                      limit?: number | undefined
                    ): string[];
                  }
                )[0]
              }
            </div>
            <p className="text-[12px] h-3 text-red-500">
              {errors && errors.brand?.message}
            </p>
          </div>
          <div className="space-y-1">
            <label htmlFor="" className="text-sm">
              price
            </label>
            <Input
              type="text"
              onChange={(e) => setValue("price", Number(e.target.value))}
              placeholder="product price"
            />
            <p className="text-[12px] h-3 text-red-500">
              {errors && errors.price?.message}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-10 gap-3 h-[630px] rounded-md ">
          <div className="col-span-6 w-full h-[630px] overflow-y-auto p-2 bg-white rounded-md  ">
            <div className="h-full w-full space-y-3  relative">
              <label
                htmlFor="ImagesInp"
                className="w-full h-28 rounded-md border sticky bg-wh top-0 left-0 z-10 border-blue-500 border-dashed flex flex-col items-center justify-center cursor-pointer"
              >
                <input
                  type="file"
                  className="hidden"
                  id="ImagesInp"
                  multiple
                  onChange={(e) => {
                    // Check if the event and files exist and are not null
                    if (e.target && e.target.files) {
                      // Convert FileList to an array
                      const filesArray = Array.from(e.target.files);

                      // Append the new files to the existing files array in the form
                      const previousImages = getValues("images");
                      if (previousImages && previousImages.length > 0) {
                        setValue("images", [
                          ...getValues("images"),
                          ...(filesArray as unknown as (FileList | null)[]),
                        ]);
                      } else {
                        setValue("images", [
                          ...(filesArray as unknown as (FileList | null)[]),
                        ]);
                      }
                      console.log(getValues("images"));
                    }
                  }}
                />
                <img src={upload} className="h-20" alt="" />
                <p className="text-[13px] text-gray-500">
                  {errors && errors.images?.message ? (
                    <>
                      <p className="text-[12px] h-3 text-red-500 animate-bounce">
                        {errors && errors.images?.message}
                      </p>
                    </>
                  ) : (
                    <>Click and Upload atlest two images</>
                  )}
                </p>
              </label>
              <div className="w-full grid md:grid-cols-3 gap-3 grid-cols-1  ">
                {watch("images") && watch("images").length <= 0 && (
                  <>
                    <div className="h-full w-full flex items-center  text-sm justify-center">
                      <p>No Images Add yet</p>
                    </div>
                  </>
                )}
                {watch("images")?.map((img, index) => {
                  return (
                    <div
                      key={JSON.stringify(img)}
                      className="rounded-md w-full h-64 bg-slate-100 relative flex items-center justify-center"
                    >
                      <X
                        className="w-6 absolute right-2 top-2 h-6 p-1 bg-slate-100 rounded-full cursor-pointer"
                        onClick={() => {
                          setValue(
                            "images",
                            getValues("images").filter((_, I) => I !== index)
                          );
                        }}
                      />
                      <img
                        src={
                          img
                            ? URL.createObjectURL(
                                img as unknown as Blob | MediaSource
                              )
                            : ""
                        }
                        className="w-[90%] h-[90%] object-cover rounded-md"
                        alt="product"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-4 h-full bg-white rounded-md p-2 space-y-3 flex flex-col justify-between">
            <div className="w-full  ">
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  stock
                </label>
                <Input
                  type="text"
                  className="w-full"
                  onChange={(e) => setValue("stock", Number(e.target.value))}
                  placeholder="Enter available stock "
                />
                <p className="text-[12px] h-2 text-red-500">
                  {errors && errors.stock?.message}
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  descrption
                </label>
                <Textarea
                  onChange={(e) => setValue("description", e.target.value)}
                  placeholder="production description "
                  className="resize-none"
                ></Textarea>
                <p className="text-[12px] h-3 text-red-500">
                  {errors && errors.description?.message}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="text-sm">
                select status
              </label>
              <Select onValueChange={(value) => setValue("status", value)}>
                <SelectTrigger className="w-full md:w-full">
                  <SelectValue placeholder="status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"publish"}>Publish</SelectItem>
                  <SelectItem value={"unpublish"}>unpublish</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-[12px] h-3 text-red-500">
                {errors && errors.status?.message}
              </p>
            </div>
            <div>
              <div className="w-full flex gap-2 justify-between ">
                <Sketch
                  className="w-full   "
                  color={watch("color")}
                  style={{ width: "70%" }}
                  onChange={(color: { hex: string }) => {
                    setValue("color", color.hex);
                  }}
                />
                <div
                  className={`w-[30%] rounded-md border shadow-md`}
                  style={{ background: watch("color") }}
                ></div>
              </div>
              <p className="text-[12px] h-3 text-red-500">
                {errors && errors.color?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-10 min-h-56 rounded-md gap-3">
          <div className="col-span-6 h-[400px] overflow-y-auto bg-white rounded-md p-2">
            <div className="w-full  ">
              <div className=" w-full h-full flex  items-center gap-3">
                <Input
                  type="text"
                  className="w-full h-full"
                  placeholder="Enter specificaiton and add "
                  onChange={(e) => setSpec(e.target.value)}
                  value={spec}
                />
                <button
                  className={`h-10 w-28 bg-blue-500 rounded-md text-sm text-white ${
                    !spec ||
                    (spec.trimEnd() == "" && "pointer-events-none bg-blue-300")
                  }`}
                  disabled={spec.trimEnd() == ""}
                  onClick={() => {
                    setValue("specifications", [
                      ...getValues("specifications"),
                      spec,
                    ]);
                    setSpec("");
                  }}
                  type="button"
                >
                  Add
                </button>
              </div>
              <p className="text-[12px] h-3 text-red-500">
                {errors && errors.specifications?.message}
              </p>
              <div className="w-full">
                <ul className="list-disc mt-3  space-y-4 text-sm">
                  {watch("specifications")?.map((spec, index) => (
                    <li
                      key={spec}
                      className="flex gap-2 items-center pl-2 justify-between"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 bg-gray-600 rounded-full" />
                        {spec}
                      </div>
                      <div className="pr-2">
                        <X
                          className="w-5 cursor-pointer"
                          onClick={() => {
                            setValue(
                              "specifications",
                              getValues("specifications").filter(
                                (_, I) => I !== index
                              )
                            );
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-white h-[400px] rounded-md ">
            <div className="w-full h-full overflow-auto p-2 space-y-3">
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  select internal memmory
                </label>
                <Select onValueChange={(value) => setValue("memory", value)}>
                  <SelectTrigger className="w-full md:w-full">
                    <SelectValue placeholder="Memmory size if product is mobile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"256 GB"}>256 GB</SelectItem>
                    <SelectItem value={"512 GB"}>512 GB</SelectItem>
                    <SelectItem value={"1 TB"}>1 TB</SelectItem>
                    <SelectItem value={"128 GB"}>128 GB</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[12px] h-3 text-red-500">
                  {memmoryerr && "Please selecto internal memory"}
                </p>
              </div>
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  Enter product model number
                </label>
                <Input
                  type="text"
                  className="w-full h-full"
                  placeholder="Enter model number"
                  onChange={(e) => setValue("modelNumber", e.target.value)}
                />
                <p className="text-[12px] h-3 text-red-500">
                  {errors && errors.modelNumber?.message}
                </p>
              </div>
              <div className="space-y-1 w-full flex flex-col">
                <label htmlFor="" className="text-sm">
                  Select product released year
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !watch("releasedDate") && "text-muted-foreground"
                      )}
                    >
                      {watch("releasedDate") ? (
                        format(watch("releasedDate"), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(watch("releasedDate"))}
                      onSelect={(date) =>
                        setValue("releasedDate", String(date))
                      }
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-[12px] h-3 text-red-500">
                  {errors && errors.releasedDate?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <LoaderButton type="submit" loading={loading}>
            Submit
          </LoaderButton>
        </div>
      </form>
    </main>
  );
}
