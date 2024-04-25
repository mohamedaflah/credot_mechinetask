import { signupFormSchema } from "@/Schema/singupForm";

import { Input } from "@/shad/ui/input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userSignupAction } from "@/redux/actions/users/signupAction";
import { LoaderButton } from "@/components/custom/LoaderButton";
export default function Signup() {
  const {
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const submitSIgnupForm = (values: z.infer<typeof signupFormSchema>) => {
    dispatch(userSignupAction({ ...values, role: "admin" }));
  };
  return (
    <main className="w-full bg-[#F4F4F4] h-screen flex items-center justify-center">
      <div className="w-[80%] sm:w-[60%] md:w-[50%]  lg:w-[40%] xl:w-[35%] 2xl:w-[30%]  flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-lg font-semibold">
            Creat An <span>{/* / */}</span>
            {/* Register */}
            account
          </h1>
          <p className="text-[11px] text-center text-[#777777]">
            Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
            egestas placerat ut sagittionec.
          </p>
        </div>
        <form
          className="flex flex-col px-3 gap-5"
          onSubmit={handleSubmit(submitSIgnupForm)}
        >
          <div>
            <Input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setValue("name", e.target.value)}
              value={watch("name")}
              className="py-6 border-gray-300 rounded-sm bg-transparent"
            />
            <p className="text-sm text-red-500">
              {errors && errors.name?.message}
            </p>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter email id"
              onChange={(e) => setValue("email", e.target.value)}
              value={watch("email")}
              className="py-6 border-gray-300 rounded-sm bg-transparent"
            />
            <p className="text-sm text-red-500">
              {errors && errors.email?.message}
            </p>
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setValue("password", e.target.value)}
              value={watch("password")}
              className="py-6 border-gray-300 rounded-sm bg-transparent"
            />
            <p className="text-sm text-red-500">
              {errors && errors.password?.message}
            </p>
          </div>
          <div className="flex justify-end text-sm">
            <Link to={"/login"} className="text-blue-500">
              login
            </Link>
          </div>

          <div className="flex justify-center items-center  h-12 gap-2">
            <LoaderButton type="submit" loading={loading}>
              Register
            </LoaderButton>
          </div>
        </form>
      </div>
    </main>
  );
}
