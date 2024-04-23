import { FaPlus } from "react-icons/fa6";
import Iphone from "../../assets/Apple.png";
export default function ProductCard(){
    return(
        <div className="flex flex-col relative border py-2 lg:h-96 lg:px-5 lg:pt-2">
            <div className="absolute top-2 left-2 bg-[#44961D] text-[12px] px-2 text-white">
              HOT
            </div>
            <div className="w-full  h-40 flex justify-center py-3 lg:h-56">
              <img src={Iphone} alt="Product image" className="h-full" />
            </div>
            <div className="px-3 space-y-1 lg:space-y-3">
              <div className="flex items-center justify-between lg:items-end">
                <span className="text-[#1AA5C3] text-[10px] font-semibold uppercase">
                  smart phone
                </span>
                <div className="border rounded-full p-2 text-sm">
                  <FaPlus />
                </div>
              </div>
              <div className="text-center lg:text-start">
                <span className="text-[12px] line-clamp-2 lg:font-semibold lg:text-[14px]">
                  iPhone 14 Pro max 256GB - Deep Purple
                </span>
              </div>
              <div className="flex gap-1 items-center lg:text-start ">
                <span className="text-[11px] text-[#606060]">OMR</span>
                <span className="font-semibold text-sm">4,699.00</span>
                <span className="text-[#606060] text-sm line-through">
                  4,699.00
                </span>
              </div>
            </div>
          </div>
    )
}