import { getAllVarients } from "@/redux/actions/product/Varients/getAllVarientsAction";
import { AppDispatch, RootState } from "@/redux/store";
import { format } from "date-fns";
import { Edit, ListFilter } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function VarientList() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(getAllVarients(String(productId)));
  }, [dispatch, productId]);
  const { varients } = useSelector((state: RootState) => state.product);
  return (
    <main className="w-full h-full px-5 space-y-5">
      <div className="w-full flex justify-between">
        <div className="">
          <h1>Varients of Apple</h1>
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
      <div className="space-y-2 p-4 bg-white rounded-md">
        <div className="w-full flex justify-end">
          <button
            className="text-sm bg-blue-500 h-10 px-4 rounded-md text-white"
            onClick={() => navigate(`/admin/addvarient/${productId}`)}
          >
            Add Varient
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
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Stock
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Color
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Model Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Released Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {varients?.map((varient) => (
                        <tr key={varient?._id} className="cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 items-center flex gap-2 items-center">
                            {varient && varient.images && (
                              <div className="w-full flex justify-center">
                                <img
                                  src={varient?.images[0]}
                                  className="h-8 w-7 object-cover"
                                  alt=""
                                />
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <div className="mx-auto flex justify-center">
                              <p>{varient?.price}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            <div className="mx-auto flex justify-center">
                              <p>{varient?.stock}</p>
                            </div>
                          </td>
                          <td className="px-6  py-4 whitespace-nowrap text-end text-sm font-medium  ">
                            <div
                              className="size-[12px] rounded-full mx-auto"
                              style={{ background: varient?.color }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="h-8 min-w-10 rounded-3xl bg-green-400 text-[12px] flex items-center justify-center text-white">
                              {varient?.status}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="mx-auto flex justify-center">
                              <p>{varient?.modelNumber}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="mx-auto flex justify-center">
                              <p>
                                {varient && varient.releasedDate && (
                                  <>
                                    {format(
                                      String(varient?.releasedDate),
                                      "PPP"
                                    )}
                                  </>
                                )}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="mx-auto flex justify-center">
                              <Edit onClick={()=>navigate(`/admin/updatevarient/${productId}/${varient?._id}`)}/>
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
      </div>
    </main>
  );
}
