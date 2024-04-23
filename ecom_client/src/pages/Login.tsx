import { Button } from "@/shad/ui/button";
import { Input } from "@/shad/ui/input";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
export default function Login() {
  return (
    <main className="w-full bg-[#F4F4F4] h-screen flex items-center justify-center">
      <div className="w-[80%] sm:w-[60%] md:w-[50%]  lg:w-[40%] xl:w-[35%] 2xl:w-[30%]  flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-lg font-semibold">
            Login <span>/</span> Register to your account
          </h1>
          <p className="text-[11px] text-center text-[#777777]">
            Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
            egestas placerat ut sagittionec.
          </p>
        </div>
        <div className="flex flex-col px-3 gap-5">
          <Input
            type="text"
            placeholder="Enter Mobile Number"
            className="py-6 rounded-sm bg-transparent"
          />
          <div className="flex items-center justify-center py-3 ">
            <span className="text-sm text-[#777777]">OR</span>
          </div>
          <div className="flex justify-center items-center border h-12 gap-2">
            <FcGoogle className="text-2xl" />{" "}
            <span className="text-sm">Login with Google</span>
          </div>
          <div className="flex justify-center items-center border h-12 gap-2">
            <ImAppleinc className="text-2xl" />{" "}
            <span className="text-sm">Signin with Apple</span>
          </div>
          <div className="flex justify-center items-center  h-12 gap-2">
            
            <Button className="bg-[#1AA5C3] rounded-sm w-32 h-full uppercase">Get Otp</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
