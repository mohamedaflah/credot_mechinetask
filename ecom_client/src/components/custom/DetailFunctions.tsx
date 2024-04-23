import start from "../../assets/Vector.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import QuantityButton from "../common/Qtybutton";
function DetailFunctions() {
  return (
    <div className="w-full min-h-96 flex flex-col py-3 px-2 md:w-auto md:h-full md:py-0">
      <div className="text-xl">
        <h2>AirPods Max</h2>
      </div>
      <div className="flex gap-2 mt-3 h-6 items-center">
        <div className="flex gap-1">
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
        </div>
        <div className="text-[12px] text-[#999999]">
          ( There are no reviews yet )
        </div>
      </div>
      <div className="flex gap-2 mt-3 h-6 items-center">
        <div className="flex gap-1 text-[#606060] text-[12px]">
          <span>OMR</span>
        </div>
        <div className="text-lg text-[#999999] flex gap-2">
          <span className="text-black font-semibold">4,699.00</span>
          <span className="line-through">5,699.00</span>
        </div>
      </div>
      <div className="flex gap-2 mt-3 text-[12px] items-center">
        <p className="text-[#999999]">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.{" "}
        </p>
      </div>
      <div>
        <div className="flex gap-1 mt-4 text-lg items-center">
          <span className="text-lg font-semibold">Color</span>:
          <h2 className="text-[12px]">Sliver</h2>
        </div>
        <div className="flex mt-2 gap-2">
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#161616]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#DE4E47]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#4F6A45]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#9C9C9C]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#9C9C9C]" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#295C87]" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-4 text-lg items-center">
          <span className="text-sm font-semibold">Internal memmory</span>
        </div>
        <div className="flex mt-2 gap-2 md:gap-2">
          <div className="w-full md:w-24  h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-center text-sm">
            256 GB
          </div>
          <div className="w-full md:w-24  h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-center text-sm bg-black text-white border-0">
            512 GB
          </div>
          <div className="w-full md:w-24  h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-center text-sm">
            1 TB
          </div>
          <div className="w-full md:w-24  h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-center text-sm">
            128 GB
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-4 gap-5 justify-between py-4 border-t border-b border-[#DCDCDC] md:justify-start">
          <QuantityButton />
          <button className="h-10 bg-black w-full text-sm rounded-sm text-white md:w-44">
            Add to cart
          </button>
        </div>
        <div className="flex gap-2 items-center mt-3">
          Add to whish list <IoMdHeartEmpty className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default DetailFunctions;
