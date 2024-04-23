import Logo from "@/assets/Logo@.svg";
import HeaderIcon from "../custom/HeaderIcon";
import twitter from "@/assets/twitter.svg";
import faceBook from "@/assets/fb.svg";
import linkedIn from "@/assets/In.svg";
import Yt from "@/assets/YT.svg";
import { IoIosCall } from "react-icons/io";
function Footer() {
  return (
    <footer className=" sm:static  w-full flex flex-col justify-center py-1 items-center md:mt-10  ">
      <section className="w-[86%] sm:w-[80%] mx-auto  min-h-56 border-t border-gray-100 mt-10 pt-10">
        <div className="w-full h-full space-y-5">
          <div className="w-full h-10 hidden md:block">
            <img src={Logo} className="h-8 " />
          </div>
          <div className="w-full md:grid md:grid-cols-7 flex flex-col-reverse  gap-y-3">
            <div className="md:col-span-2">
              <div className="w-full space-y-2">
                <h1 className="uppercase font-semibold text-sm">
                  contact with us
                </h1>
                <div className="w-full flex gap-3">
                  <HeaderIcon Image={faceBook} className="hover:bg-[#1AA5C3]" />
                  <HeaderIcon Image={twitter} className="hover:bg-[#1AA5C3]" />
                  <HeaderIcon Image={linkedIn} className="hover:bg-[#1AA5C3]" />
                  <HeaderIcon Image={Yt} className="hover:bg-[#1AA5C3]" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 md:border-r h-48 md:h-24 mt-10 md:mt-auto">
              <div className="w-full space-y-7 md:space-y-2">
                <h1 className="uppercase font-semibold text-sm">
                  important links
                </h1>
                <div className="w-full md:flex-row flex flex-col gap-4 md:gap-6 md:items-end h-8 ">
                  <span className="capitalize text-[#606060] text-[13px]">
                    Terms & Conditions
                  </span>
                  <span className="capitalize text-[#606060] text-[13px]">
                    Privacy Policy
                  </span>
                  <span className="capitalize text-[#606060] text-[13px]">
                    Help & FAQs
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-between  ">
              <div className="w-full flex md:justify-end ">
                <div className="flex flex-col w-48 ">
                  <div className="size-9 bg-[#1AA5C3] flex items-center justify-center rounded-full text-2xl text-white">
                    <IoIosCall className="w-5" />
                  </div>
                  <div className="tex-sm">Helpline</div>
                  <div className="font-semibold text-2xl md:text-1xl">
                    1800 456 84788
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t w-full h-20 flex items-center justify-center mt-4 text-[12px] text-[#7f7e7e]">
        Area Deals 2023. All Rights Reserved
      </section>
    </footer>
  );
}

export default Footer;
