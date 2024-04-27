import { IoMdClose } from "react-icons/io";
import { Cart } from "@/dev/types/Cart/Cart";
import { Minus, Plus } from "lucide-react";
interface ChildProp {
  cartData: Cart;
}
function CartRow({ cartData }: ChildProp) {
  return (
    <div className="flex border-b border-[#E2E2E2] py-1 h-28 items-center justify-between min-w-[500px]">
      <div className="w-56 flex items-center lg:gap-3">
        <div className="h-14  relative w-14 p-1 bg-[#F9F9F9]  ">
          <div className="text-[11px] shadow-md bg-white absolute rounded-full p-[2px] top-[-10%] right-[-10%]">
            <IoMdClose />
          </div>
          <img
            src={cartData.productDetails.variant?.images[0]}
            className="size-12 object-cover"
            alt=""
          />
        </div>
        <span className="line-clamp-1 text-sm  ml-1 font-semibold">
          {cartData.productDetails.productName}
        </span>
      </div>
      <div className="w-24">
        <span className="text-sm uppercase font-semibold">
          <span>OMR {cartData.productDetails.variant?.price}</span>
        </span>
      </div>
      <div className="w-28">
        <span className="text-sm uppercase">
          <div
            className={` w-full h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-between text-sm md:w-40`}
          >
            <div className="h-full flex items-center justify-center text-1xl w-full border-r border-[#DCDCDC] cursor-pointer">
              <Minus className="w-4" />
            </div>
            <div className="h-full  flex items-center justify-center w-full">
              {cartData.qty}
            </div>
            <div className="h-full flex items-center justify-center text-1xl w-full border-l border-[#DCDCDC] cursor-pointer">
              <Plus className="w-4" />
            </div>
          </div>
        </span>
      </div>
      <div className="w-28">
        <span className="text-sm uppercase font-semibold">
          {cartData &&
            cartData.productDetails &&
            cartData.productDetails.variant && (
              <span>
                OMR {cartData.qty * cartData?.productDetails?.variant?.price}
              </span>
            )}
        </span>
      </div>
    </div>
  );
}
export default CartRow;
