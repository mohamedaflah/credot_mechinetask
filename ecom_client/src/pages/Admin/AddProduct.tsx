import { categories } from "@/constants/categories";
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

export function AddProduct() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);
  const [hex, setHex] = useState<string>("");
  const { brands } = useSelector((state: RootState) => state.brand);
  return (
    <main className="w-full h-full overflow-y-auto">
      <div className="w-full h-10 flex">
        <h1>Add Product</h1>
      </div>
      <form action="" className="w-full flex flex-col space-y-3 ">
        <div className="w-full min-h-12  gap-5 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 ">
          <div className="space-y-1">
            <label htmlFor="" className="text-sm">
              Product title
            </label>
            <Input type="text" placeholder="Product name or title" />
          </div>
          <div className="space-y-1 w">
            <label htmlFor="" className="text-sm">
              select category
            </label>
            <Select>
              <SelectTrigger className="w-full md:w-full">
                <SelectValue placeholder="categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((value) => (
                  <SelectItem value={value} key={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <label htmlFor="" className="text-sm">
              select brand
            </label>
            <Select>
              <SelectTrigger className="w-full md:w-full">
                <SelectValue placeholder="brands" />
              </SelectTrigger>
              <SelectContent>
                {brands?.map((value) => (
                  <SelectItem
                    value={String(value?._id)}
                    className=""
                    key={value?._id}
                  >
                    <div className="flex gap-2 items-center text-sm">
                      <img
                        src={value.image}
                        className="size-4 rounded-full object-cover"
                        alt=""
                      />
                      {value?.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <label htmlFor="" className="text-sm">
              price
            </label>
            <Input type="text" placeholder="product price" />
          </div>
        </div>
        <div className="w-full grid grid-cols-10 gap-3 h-[600px] rounded-md ">
          <div className="col-span-6 w-full h-[600px] overflow-y-auto p-2 bg-white rounded-md  ">
            <div className="h-full w-full space-y-3  relative">
              <label className="w-full h-28 rounded-md border sticky bg-wh top-0 left-0 z-10 border-blue-500 border-dashed flex flex-col items-center justify-center cursor-pointer">
                <img src={upload} className="h-20" alt="" />
                <p className="text-[13px] text-gray-500">
                  Click and Upload atlest two images
                </p>
              </label>
              <div className="w-full grid md:grid-cols-3 gap-3 grid-cols-1  ">
                <div className="rounded-md w-full h-64 bg-slate-100 relative flex items-center justify-center">
                  <X className="w-6 absolute right-2 top-2 h-6 p-1 bg-slate-100 rounded-full" />
                </div>
                <div className="rounded-md w-full h-64 bg-slate-100 relative flex items-center justify-center">
                  <X className="w-6 absolute right-2 top-2 h-6 p-1 bg-slate-100 rounded-full" />
                </div>
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
                  placeholder="Enter available stock "
                />
              </div>
            </div>
            <div className="w-full  ">
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  descrption
                </label>
                <Textarea
                  placeholder="production description "
                  className="resize-none"
                ></Textarea>
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="text-sm">
                select status
              </label>
              <Select>
                <SelectTrigger className="w-full md:w-full">
                  <SelectValue placeholder="status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"publish"}>Publish</SelectItem>
                  <SelectItem value={"unpublish"}>unpublish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full flex gap-2 justify-between ">
              <Sketch
                className="w-full   "
                color={hex}
                style={{ width: "70%" }}
                onChange={(color: { hex: string }) => {
                  console.log(color.hex);

                  setHex(color.hex);
                }}
              />
              <div
                className={`w-[30%] rounded-md border shadow-md`}
                style={{ background: hex }}
              ></div>
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
                />
                <button className="h-10 w-28 bg-blue-500 rounded-md text-sm text-white">
                  Add
                </button>
              </div>
              <div className="w-full">
                <ul className="list-disc mt-3  space-y-4 text-sm">
                  <li className="flex gap-2 items-center pl-2">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    Bluthooth v5.0
                  </li>
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
                <Select>
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
              </div>
              <div className="space-y-1 w-full">
                <label htmlFor="" className="text-sm">
                  Enter product model number
                </label>
                <Input
                  type="text"
                  className="w-full h-full"
                  placeholder="Enter model number"
                />
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
                        "w-full pl-3 text-left font-normal"
                        // !field.value && "text-muted-foreground"
                      )}
                    >
                      {/* {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )} */}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      // selected={field.value}
                      // onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
