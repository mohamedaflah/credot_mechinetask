import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import HeaderIcon from "./custom/HeaderIcon";
import User from "@/assets/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { userLogoutAction } from "@/redux/actions/users/logoutUserAction";
export const ProfilePopover = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch: AppDispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogoutAction());
  };
  return (
    <Popover>
      <PopoverTrigger className="p-0  ">
        <HeaderIcon Image={User} />
      </PopoverTrigger>
      <PopoverContent className="bg-white border-2 mt-2 min-w-36 min-h-[200px] z-10 p-2 rounded-md">
        <div className="w-full h-10 font-semibold font-sans ">{user?.name}</div>
        <div className="w-full px-2 flex flex-col gap-2">
          <Link
            to={"/orders/:userId"}
            className="border border-gray-100 border-r-0 border-l-0 p-1 text-sm"
          >
            Orders
          </Link>
          <Link
            to={"/"}
            className="border border-gray-100 border-r-0 border-l-0 p-1 text-sm"
          >
            Cart
          </Link>
          <div className="mt-2 text-sm flex gap-2 cursor-pointer" onClick={handleLogout}>
            <LogOut className="w-4" />
            Logout
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
