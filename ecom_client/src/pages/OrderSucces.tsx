import { IoCheckmark } from "react-icons/io5";

export function OrderSucess() {
  return (
    <main className="w-full h-[540px] flex items-center justify-center bg-[#F9F9F9] px-2 flex-col gap-3">
        <div className="shadow-neo size-32  rounded-full flex items-center justify-center">
            <div className="size-20 rounded-full flex items-center justify-center bg-green-600">
            <IoCheckmark className="text-white text-4xl" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="font-semibold text-[18px]">Your order has been placed successfully.</h1>
            <p className="text-[11px] text-[#777777] text-center">Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placera</p>
        </div>
    </main>
  );
}
