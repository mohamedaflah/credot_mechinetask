import ProductImage from "../../assets/prd2.png";
import { IoMdClose } from "react-icons/io";
function WhishListRow() {
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
      <div className="w-20 0">
        <span className="text-sm uppercase font-semibold">
          <span>OMR 107.00</span>
        </span>
      </div>
      <div className="w-20">
        <span className="text-sm">In Stock</span>
      </div>
      <div className="w-28 flex gap-1 md:w-60">
        <button className="bg-transparent text-black md:text-sm text-[10px] py-1 px-4 border border-black md:w-full md:h-10">
          <span className="md:hidden">view</span>
          <span className="hidden lg:inline-block">Quick View</span>
        </button>
        <button className="bg-black text-white text-[10px] md:text-sm py-1 px-4 md:w-full md:h-10">
          <span className="md:hidden">cart</span>
          <span className="hidden lg:inline-block">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
export default WhishListRow;
