import { Link, Outlet } from "react-router-dom";
import Logo from "@/assets/Logo@.svg";
import { Box, Codepen, LogOut, Menu, Package2, UserCog } from "lucide-react";
import { AppDispatch } from "@/redux/store";
import { userLogoutAction } from "@/redux/actions/users/logoutUserAction";
import { useDispatch } from "react-redux";
export function AdminLayout() {
  const dispatch: AppDispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogoutAction());
  };
  return (
    <main className="h-screen flex gap-2 lg:p-5 overflow-hidden  ">
      <aside className="w-72 h-full bg-slate-100 px-3 rounded-sm ">
        <div className="w-full h-20  flex items-center justify-between">
          <img src={Logo} className="w-20" alt="" />
          <Menu className="w-5 cursor-pointer" />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <Link
            to={"users"}
            className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5"
          >
            <UserCog className="w-5" /> <span>Users</span>
          </Link>
          <Link
            to={""}
            className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5"
          >
            <Box className="w-5" /> <span>Products</span>
          </Link>
          <Link
            to={"brands"}
            className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5"
          >
            <Codepen className="w-5" /> <span>Brands</span>
          </Link>
          <Link
            to={""}
            className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5"
          >
            <Package2 className="w-5" /> <span>Orders</span>
          </Link>
        </div>
        <div className="w-full h-20 flex items-end justify-center">
          <div
            className="mt-2 text-sm flex gap-2 cursor-pointer h-10 w-full items-center px-5 bg-gray-200 rounded-md"
            onClick={handleLogout}
          >
            <LogOut className="w-4" />
            Logout
          </div>
        </div>
      </aside>
      <section className="w-full h-full bg-slate-100 rounded-none p-5 ">
        <Outlet />
      </section>
    </main>
  );
}
