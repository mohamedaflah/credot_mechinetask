import { Input } from "@/shad/ui/input";
import upload from "@/assets/upl.svg";
import { LoaderButton } from "../custom/LoaderButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { brandFormSchema } from "@/Schema/brand/brandForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Brand } from "@/dev/types/Brand/Brand";
import { useEffect } from "react";
import { imageUrlToFileObject } from "@/util/imageTofile";
import { updateBrandAction } from "@/redux/actions/brands/updateBrandAction";
interface ChildProp {
  brand: Brand;
}
export function BrandEditForm({ brand }: ChildProp) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof brandFormSchema>>({
    resolver: zodResolver(brandFormSchema),
    defaultValues: {
      description: "",
      title: "",
      image: null,
    },
  });
  useEffect(() => {
    imageUrlToFileObject(brand.image as string).then((res) => {
      console.log("🚀 ~ imageUrlToFileObject ~ brand:", brand)
      setValue("title", brand.title);

      setValue("description", brand.description);
      setValue("image", res as unknown as FileList);
    });
  },[brand, brand.description, brand.image, brand.title, setValue]);
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.brand);
  async function submitBrandAddForm(values: z.infer<typeof brandFormSchema>) {
    values;
    const res = await dispatch(
      updateBrandAction({ brandId: brand._id as string, sendData: values })
    );
    if (res.type.endsWith("fulfilled")) {
      reset({ title: "", image: null, description: "" });
    }
  }
  return (
    <form
      action=""
      className="w-full h-full space-y-2"
      onSubmit={handleSubmit(submitBrandAddForm)}
    >
      <div className="w-full h-36 flex gap-2">
        <label
          htmlFor="brandImg"
          className={`flex cursor-pointer flex-col w-48 h-full border border-gray-300 rounded-md p-3 items-center justify-center`}
        >
          {!watch("image") ? (
            <>
              <img src={upload} alt="" />
              <p className="text-center text-[12px]">Click and upload</p>
            </>
          ) : (
            <img
              src={URL.createObjectURL(
                watch("image") as unknown  as Blob | MediaSource
              )}
              className="flex items-center justify-center w-full rounded-md h-full object-cover"
              alt="logo"
            />
          )}
          <input
            type="file"
            className="hidden"
            id="brandImg"
            onChange={(e) =>
              setValue(
                "image",
                e?.target?.files?.[0] as unknown as FileList | null
              )
            }
          />
        </label>
        <div className="h-full w-full gap-2 flex flex-col">
          <Input
            type="text"
            value={watch("title")}
            className="w-full border border-gray-300"
            placeholder="Brand name"
            onChange={(e) => setValue("title", e.target.value)}
          />
          <textarea
            onChange={(e) => setValue("description", e.target.value)}
            className="w-full h-full border border-gray-300 rounded-md p-2 text-sm resize-none"
            placeholder="brand descripton "
          >
            {watch("description")}
          </textarea>
        </div>
      </div>
      <div className="text-red-500">
        <p>{errors && errors.title?.message}</p>
        <p>{errors && errors.description?.message}</p>
        <p>{errors && errors.image?.message}</p>
      </div>
      <div className="w-full">
        <LoaderButton
          type="submit"
          className="w-full bg-blue-500"
          loading={loading}
        >
          submit
        </LoaderButton>
      </div>
    </form>
  );
}
