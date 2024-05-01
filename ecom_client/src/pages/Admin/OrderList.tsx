import { orderStatus } from "@/constants/orderStatus";
import { changeOrderStatus } from "@/redux/actions/order/changeOrder";
import { getAllOrders } from "@/redux/actions/order/getAllOrders";

import { AppDispatch, RootState } from "@/redux/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shad/ui/select";
import { format } from "date-fns";
import { ListFilter } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function OrderList() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleNavigation = (id: string) => {
    navigate(`varient/${id}`);
  };
  handleNavigation;
  const handleChangeOrder = (value: string, orderId: string) => {
    dispatch(changeOrderStatus({ orderId: orderId, status: value }));
  };
  const { orders } = useSelector((state: RootState) => state.order);
  return (
    <main className="w-full h-full px-5 space-y-5 overflow-y-auto">
      <div className="w-full flex justify-between">
        <div className="">
          <h1>Orders listing</h1>
        </div>
        <div className="flex gap-4">
          <div className="h-10 flex gap-1 ">
            <input
              type="text"
              className="px-3 text-sm outline-none rounded-md"
              placeholder="Search products."
            />
            <button className="w-full h-full bg-blue-500 px-3 text-sm rounded-md text-white">
              Search
            </button>
          </div>
          <div className="min-w-20 h-10 bg-blue-500 rounded-md flex items-center justify-center gap-2 text-white px-2">
            <ListFilter className="w-5" />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="text-sm bg-blue-500 h-10 px-4 rounded-md text-white"
          onClick={() => navigate("addproduct")}
        >
          Add new product
        </button>
      </div>
      <div className="w-full h-full  ">
        <div className="flex flex-col border rounded-sm">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        orderId
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        totalAmount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        ordered at
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders?.map((order) => (
                      <tr
                        key={order?._id}
                        className="cursor-pointer hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 flex gap-2 items-center">
                          {order && order.products[0] && (
                            <img
                              src={
                                order.products[0].productDetails.variant
                                  .images[0]
                              }
                              className="h-8 w-7 object-cover"
                              alt=""
                            />
                          )}
                          {order.products[0].productDetails.productName}
                          <div className="font-sans">
                            {order.products.filter((_, index) => index >= 1)
                              .length >= 1 && (
                              <>
                                {
                                  order.products.filter(
                                    (_, index) => index >= 1
                                  ).length
                                }{" "}
                                more
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          <div className="line-clamp-1 text-[12px]">
                            <span>{order?._id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                          ₹{order?.totalAmount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          {format(String(order.createdAt), "PPP")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <div className="w-full h-full ">
                            <>
                              <div className="px-2 h-7 text-[11px] text-white rounded-3xl bg-green-400 flex items-center justify-center">
                                {order.status}
                              </div>
                            </>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <div className="w-full flex justify-end">
                            <Select
                              onValueChange={(value) =>
                                handleChangeOrder(value, String(order._id))
                              }
                            >
                              <SelectTrigger className="w-[95px]">
                                <SelectValue placeholder="status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Order status</SelectLabel>
                                  {orderStatus.map((value) => (
                                    <SelectItem
                                      value={value}
                                      className="capitalize"
                                      key={value}
                                    >
                                      {value}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
