import { loginFormSchema } from "@/Schema/user/loginForm";
import { LoaderButton } from "@/components/custom/LoaderButton";
import { userLoginAction } from "@/redux/actions/users/loginUserAction";
import { AppDispatch, RootState } from "@/redux/store";

import { Input } from "@/shad/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { z } from "zod";

export default function Login() {
  const { loading } = useSelector((state: RootState) => state.user);

  const dispatch: AppDispatch = useDispatch();
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitLoginForm = (values: z.infer<typeof loginFormSchema>) => {
    dispatch(userLoginAction(values));
  };
  return (
    <main className="w-full bg-[#F4F4F4] h-screen flex items-center justify-center">
      <form
        className="w-[80%] sm:w-[60%] md:w-[50%]  lg:w-[40%] xl:w-[35%] 2xl:w-[30%]  flex flex-col gap-10"
        onSubmit={handleSubmit(submitLoginForm)}
      >
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-lg font-semibold">
            Login <span>{/* / */}</span>
            {/* Register */}
            to your account
          </h1>
          <p className="text-[11px] text-center text-[#777777]">
            Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
            egestas placerat ut sagittionec.
          </p>
        </div>
        <div className="flex flex-col px-3 gap-5">
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
            <Link to={"/signup"} className="text-blue-500">
              signup
            </Link>
          </div>

          <div className="flex justify-center items-center  h-12 gap-2">
            <LoaderButton type="submit" loading={loading}>
              login
            </LoaderButton>
          </div>
        </div>
      </form>
    </main>
  );
}
