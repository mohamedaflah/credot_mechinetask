import { getAllProductAction } from "@/redux/actions/product/getAllProductAction";
import { AppDispatch, RootState } from "@/redux/store";
import { format } from "date-fns";
import { ListFilter } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ProductList() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction("admin"));
  }, [dispatch]);

  const handleNavigation = (id: string) => {
    navigate(`varient/${id}`);
  };
  const { products } = useSelector((state: RootState) => state.product);
  return (
    <main className="w-full h-full px-5 space-y-5">
      <div className="w-full flex justify-between">
        <div className="">
          <h1>Product listing</h1>
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
                        category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        brand
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        added at
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        last updated
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
                    {products?.map((product) => (
                      <tr
                        key={product?._id}
                        className="cursor-pointer"
                        onClick={()=>handleNavigation(String(product._id))}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 flex gap-2 items-center">
                          {product && product.variants && (
                            <img
                              src={product?.variants[0]?.images[0]}
                              className="h-8 w-7 object-cover"
                              alt=""
                            />
                          )}
                          {product?.productName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {product?.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                          <img
                            src={
                              product?.brand?.split(
                                "[(*)]" as unknown as {
                                  [Symbol.split](
                                    string: string,
                                    limit?: number | undefined
                                  ): string[];
                                }
                              )[1]
                            }
                            className="size-6 rounded-full object-cover"
                            alt=""
                          />
                          {
                            product?.brand?.split(
                              "[(*)]" as unknown as {
                                [Symbol.split](
                                  string: string,
                                  limit?: number | undefined
                                ): string[];
                              }
                            )[0]
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          {format(String(product.createdAt), "PPP")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          {format(String(product.createdAt), "PPP")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Delete
                          </button>
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
