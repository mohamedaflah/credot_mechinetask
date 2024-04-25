import { Link, Outlet } from "react-router-dom";
import Logo from "@/assets/Logo@.svg";
import { Box, Menu, Package2 } from "lucide-react";
export function AdminLayout() {
  return (
    <main className="h-screen flex gap-2 p-1 overflow-hidden  ">
      <aside className="w-72 h-full bg-slate-100 px-3 rounded-sm ">
        <div className="w-full h-20  flex items-center justify-between">
          <img src={Logo} className="w-20" alt="" />
          <Menu className="w-5 cursor-pointer"/>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <Link to={""} className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5">
            <Box className="w-5"/> <span>Products</span>
          </Link>
          <Link to={""} className="h-10 w-full bg-slate-200 rounded-lg flex items-center gap-3 px-5">
            <Package2  className="w-5"/> <span>Orders</span>
          </Link>
        </div>
      </aside>
      <section className="w-full h-full bg-slate-100 rounded-none p-5 ">
        <Outlet />
      </section>
    </main>
  );
}
