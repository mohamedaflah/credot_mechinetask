import { Input } from "@/shad/ui/input";
import { LoaderButton } from "../custom/LoaderButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addressSchema } from "@/Schema/Order/addressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "@/redux/actions/order/createOrderAciton";
import { useNavigate } from "react-router-dom";
import { setCartEmpty } from "@/redux/reducers/cartReducer";

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
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { cart } = useSelector((state: RootState) => state.cart);
  const { loading } = useSelector((state: RootState) => state.order);
  const navigate = useNavigate();
  const handleAddressForm = (values: z.infer<typeof addressSchema>) => {
    let totalAmount: number = 0;
    const products = cart?.map((cart) => {
      totalAmount += cart.qty * Number(cart?.productDetails?.variant?.price);
      return {
        productId: String(cart?.productDetails?.variant?._id),
        qty: Number(cart?.qty),
        price: Number(cart?.productDetails?.variant?.price),
      };
    });
    dispatch(
      createOrder({
        userId: String(user?._id),
        address: values,
        paymentMode: "cod",
        products: products,
        status: "pending",
        totalAmount: totalAmount,
      })
    ).then((res) => {
      if (res.type.endsWith("fulfilled")) {
        dispatch(setCartEmpty())
        navigate("/order-success");
      }
    });
  };
  return (
    <form
      className="w-full flex mt-2 flex-col gap-2"
      onSubmit={handleSubmit(handleAddressForm)}
    >
      <div className="w-full flex flex-col items-start">
        <label htmlFor="state">street</label>
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
        <label htmlFor="state">state</label>
        <Input
          type="text"
          className="w-full text-sm"
          placeholder="Enter street"
          onChange={(e) => setValue("state", e.target.value)}
        />
        <p className="h-[12px] text-red-400">
          {errors && errors.state?.message}
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
        <LoaderButton loading={loading} className="w-full">
          Submit
        </LoaderButton>
      </div>
    </form>
  );
}
