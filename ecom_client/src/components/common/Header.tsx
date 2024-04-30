import Logo from "@/assets/Logo@.svg";
import Search from "../../assets/Search.svg";
import User from "../../assets/user.svg";

import Cart from "../../assets/cart.svg";
import HeaderIcon from "../custom/HeaderIcon";
import Order from '@/assets/order.svg'

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ProfilePopover } from "../Popover";
import toast from "react-hot-toast";

export const Header = () => {
 
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.user);
  return (
    <header className="w-full h-16 sm:h-20  flex items-center justify-center">
      <div className="w-[86%] sm:w-[80%] h-[80%]  flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} className="h-8 sm:h-10" />
        </div>
        <div className=" md:flex justify-between md:w-2/3 lg:w-1/2  h-[70%]">
          <div className=" w-[70%] h-full hidden lg:flex border border-[#EBEBEB] pl-4">
            <input
              type="text"
              className="w-full text-[12px] outline-none border-none placeholder-[#585858]"
              placeholder="Search product"
            />
            <div className="h-full w-14 flex items-center justify-center  bg-black">
              <img src={Search} alt="Search" className="w-5" />
            </div>
          </div>
          <div className="h-full  w-48   border[#EBEBEB] flex items-center justify-end gap-2">
            {!user ? (
              <div
                className="h-full border-r px-2"
                onClick={() => {
                  if (!user) {
                    navigate("/login");
                  }
                }}
              >
                <HeaderIcon Image={User} />
              </div>
            ) : (
              <div className="h-full lg:border-r px-2">
                <ProfilePopover />
              </div>
            )}
            <HeaderIcon
              Image={Cart}
              onClick={() => {
                if (!user) {
                  toast.error("Please login to access cart")
                  navigate('login')
                } else {
                  navigate(`/cart/${user?._id}`);
                }
              }}
            />
            <HeaderIcon
              Image={Order}
              onClick={() => {
                if (!user) {
                  toast.error("Please login to access order")
                  navigate('login')
                } else {
                  navigate(`/orders`);
                }
              }}
            />
          </div>
        </div>
        
      </div>
    </header>
  );
};
