import { Input } from "@/shad/ui/input";
import { LoaderButton } from "../custom/LoaderButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addressSchema } from "@/Schema/Order/addressSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function AddressForm() {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      email: "",
      pincode: "",
      place: "",
      state: "",
      street: "",
    },
  });
  const handleAddressForm = (values: z.infer<typeof addressSchema>) => {
    values;
  };
  return (
    <form
      className="w-full flex mt-2 flex-col gap-2"
      onSubmit={handleSubmit(handleAddressForm)}
    >
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">state</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter street"
          onChange={(e) => setValue("street", e.target.value)}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.street?.message}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">place</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter place"
          onChange={(e) => setValue("place", e.target.value)}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.place?.message}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">pincode</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter place pincode"
          value={watch("pincode")}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              setValue("pincode", e.target.value);
            }
          }}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.pincode?.message}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">email address</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter email"
          onChange={(e) => setValue("email", e.target.value)}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.email?.message}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">phone</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter phone number"
          value={watch("phone")}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              setValue("phone", e.target.value);
            }
          }}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.phone?.message}
        </p>
      </div>
      <div className="w-full">
        <LoaderButton loading={false} className="w-full">
          Submit
        </LoaderButton>
      </div>
    </form>
  );
}

// export const addressSchema = z.object({
//     place: z.string().min(2),
//     street: z.string().min(2),
//     state: z.string().min(2),
//     pincode: z.string().min(6).max(6),
//     phone: z.number(),
//     email: z.string().email(),
//   });
