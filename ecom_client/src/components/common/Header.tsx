import Logo from "../../assets/headerLogo.svg";
import Search from "../../assets/Search.svg";
import User from "../../assets/user.svg";
import Whishlist from "../../assets/heart.svg";
import Cart from "../../assets/cart.svg";
import HeaderIcon from "../custom/HeaderIcon";
import { IoMdMenu } from "react-icons/io";
import { Input } from "../../shad/ui/input";
import { IoMdSearch } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shad/ui/sheet";
import { useState } from "react";
import { Button } from "@/shad/ui/button";
import WhishListSheet from "../custom/Whishsheet";
export const Header = () => {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <header className="w-full h-16 sm:h-20  flex items-center justify-center">
      <div className="w-[86%] sm:w-[80%] h-[80%]  flex justify-between items-center">
        <div className="">
          <img src={Logo} className="h-8 sm:h-10" />
        </div>
        <div className="hidden md:flex justify-between md:w-2/3 lg:w-1/2  h-[70%]">
          <div className=" w-[70%] h-full  flex border border-[#EBEBEB] pl-4">
            <input
              type="text"
              className="w-full text-[12px] outline-none border-none placeholder-[#585858]"
              placeholder="What are you looking for?"
            />
            <div className="h-full w-14 flex items-center justify-center  bg-black">
              <img src={Search} alt="Search" className="w-5" />
            </div>
          </div>
          <div className="h-full  w-48  border-l border[#EBEBEB] flex items-center justify-end gap-2">
            <HeaderIcon Image={User} />
            <WhishListSheet ShowIcon={<HeaderIcon Image={Whishlist} />}/>
            <HeaderIcon Image={Cart} />
          </div>
        </div>
        <div className="md:hidden text-3xl cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <IoMdMenu />
            </SheetTrigger>
            <SheetContent side={"left"} className="w-28">
              <SheetHeader>
                <SheetTitle className="uppercase mt-3">menu</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center gap-7 mt-6">
                    <HeaderIcon Image={User} />
                    <HeaderIcon Image={Whishlist} />
                    <HeaderIcon Image={Cart} />
                    <div className="relative">
                      <HeaderIcon
                        Image={Search}
                        onClick={() => setSearch(!search)}
                        className="cursor-pointe bg-slate-600"
                      />

                      <div
                        className={`flex w-full transition-all duration-300 max-w-sm items-center  absolute right-[-200%] top-0 bg-white -z-10 ${
                          search ? "translate-x-[0]" : "translate-x-[-1000%]"
                        }`}
                      >
                        <Input
                          type="search"
                          placeholder="search"
                          className={`${"w-56"} transition-all duration-300 px-2 py-1 border border-gray-1000 rounded-md`}
                        />
                        <Button
                          type="submit"
                          className=" bg-[#435de3] text-white font-semibold text-2xl"
                        >
                          <IoMdSearch />
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
