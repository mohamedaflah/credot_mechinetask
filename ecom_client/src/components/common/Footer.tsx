import HeaderIcon from "../custom/HeaderIcon";
import twitter from "../../assets/twitter.svg";
import faceBook from "../../assets/fb.svg";
import linkedIn from "../../assets/In.svg";
import Yt from "../../assets/YT.svg";
import Payments from "../../assets/payments.svg";
import { IoIosCall } from "react-icons/io";
import { HorizontalLine } from "./HorizontalLine";
function Footer() {
  return (
    <footer className=" sm:static  w-full flex flex-col  py-1 items-center md:mt-4 ">
      <HorizontalLine />
      <div className="flex flex-wrap min-h-auto w-[90%] justify-between  md:w-[80%] ">
        <div className="flex flex-col w-40   gap-3 py-3">
          <h1 className="font-bold text-sm uppercase">Important Linkes</h1>
          <div className="flex flex-col gap-2">
            <span className="text-[#777777] text-[14px]">Helps & FAQS</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
            <span className="text-[#777777] text-[14px]">
              Shipping & Delivery
            </span>
            <span className="text-[#777777] text-[14px]">Orders History</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
          </div>
        </div>
        <div className=" flex flex-col w-40  gap-3 py-3">
          <h1 className="font-bold text-sm uppercase">Important Linkes</h1>
          <div className="flex flex-col gap-2">
            <span className="text-[#777777] text-[14px]">Helps & FAQS</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
            <span className="text-[#777777] text-[14px]">
              Shipping & Delivery
            </span>
            <span className="text-[#777777] text-[14px]">Orders History</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
          </div>
        </div>
        <div className=" flex flex-col w-40  gap-3 py-3">
          <h1 className="font-bold text-sm uppercase">Important Linkes</h1>
          <div className="flex flex-col gap-2">
            <span className="text-[#777777] text-[14px]">Helps & FAQS</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
            <span className="text-[#777777] text-[14px]">
              Shipping & Delivery
            </span>
            <span className="text-[#777777] text-[14px]">Orders History</span>
            <span className="text-[#777777] text-[14px]">Rhoncus</span>
          </div>
        </div>
        <div className=" flex flex-col w-40 md:w-64 item-start  gap-2 py-3 ">
          <h1 className="font-bold text-sm uppercase">social media link</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 ">
            <HeaderIcon Image={faceBook} className="hover:bg-[#1AA5C3]" />
            <HeaderIcon Image={twitter} className="hover:bg-[#1AA5C3]" />
            <HeaderIcon Image={linkedIn} className="hover:bg-[#1AA5C3]" />
            <HeaderIcon Image={Yt} className="hover:bg-[#1AA5C3]" />
          </div>
          <h1 className="font-bold text-sm uppercase md:mt-10">
            Payment methods
          </h1>
          <img src={Payments} className="w-full" />
        </div>
      </div>
      <div className="w-full flex justify-center h-auto bg-[#F4F4F4]">
        <div className="min-h-64 w-[90%] md:w-[80%]  py-2 hidden md:flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:gap-3  md:w-full">
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm ">Mobile:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap text-sm justify-start">
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm">Electronics:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap  text-sm justify-start">
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm">SmartWatch:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap  text-sm justify-start">
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm">laptop Pc:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap   text-sm justify-start">
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm">Gaming:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap  text-sm justify-start">
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h1 className="font-semibold text-sm ">Accessories:</h1>
              <div className="flex gap-4 text-[#535353] flex-wrap justify-start">
                {/* <h1 className="font-semibold text-sm text-black">Accessories:</h1> */}
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                Rhoncus <div className="w-[1px] h-[20px] bg-[#535353]" />
                <span className="text-blue-500">View All</span>
              </div>
            </div>
          </div>
          <div className=" w-1/2 border-t py-2 md:border-t-0 md:border-l md:flex md:items-end md:pl-10">
            <div className="flex gap-2 md:flex-col">
              <div className="w-12 h-12 bg-[#1AA5C3] flex items-center justify-center rounded-full text-2xl text-white">
                <IoIosCall />
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Helpline</span>
                <span className="font-semibold">1800 456 84788</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
