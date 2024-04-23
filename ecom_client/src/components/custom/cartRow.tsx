import QuantityButton from "@/components/common/Qtybutton";
import ProductImage from "../../assets/prd2.png";
import { IoMdClose } from "react-icons/io";
function CartRow() {
  return (
    <div className="flex border-b border-[#E2E2E2] py-1 h-28 items-center justify-between ">
      <div className="w-56 flex items-center lg:gap-3">
        <div className="h-20  relative bg-[#F9F9F9] p-1">
          <div className="text-[11px] shadow-md bg-white absolute rounded-full p-[2px] top-[-10%] right-[-10%]">
            <IoMdClose />
          </div>
          <img src={ProductImage} className="h-full" alt="" />
        </div>
        <span className="line-clamp-1 text-sm  ml-1 font-semibold">
          Airpod pro max
        </span>
      </div>
      <div className="w-24">
        <span className="text-sm uppercase font-semibold">
          <span>OMR 107.00</span>
        </span>
      </div>
      <div className="w-28">
        <span className="text-sm uppercase">
          <QuantityButton className="w-24 " />
        </span>
      </div>
      <div className="w-28">
        <span className="text-sm uppercase font-semibold">
          <span>OMR 107.00</span>
        </span>
      </div>
    </div>
  );
}
export default CartRow;
