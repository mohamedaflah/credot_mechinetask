import { BrandEditForm } from "@/components/brand/BrandEditForm";
import { BrandForm } from "@/components/brand/BrandForm";
import { AmdinLoader } from "@/components/custom/AdminTableLoader";
import { CustomeModal } from "@/components/custom/CustomeModa";
import { getAllBrands } from "@/redux/actions/brands/getAllBrandAction";
import { AppDispatch, RootState } from "@/redux/store";
import { Button } from "@/shad/ui/button";
import { format } from "date-fns";
import { Edit } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function BrandPage() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands("admin"));
  }, [dispatch]);
  const { brands, loading } = useSelector((state: RootState) => state.brand);
  return (
    <main className="w-full h-full px-5 space-y-2 overflow-y-auto">
      <div className="w-full h-12  flex items-center justify-end">
        <CustomeModal
          title="Add new brand"
          trigger={
            <Button className="text-sm bg-blue-600">Add new Brand</Button>
          }
        >
          <BrandForm />
        </CustomeModal>
      </div>
      <div className="flex flex-col border rounded-sm">
        {!loading ? (
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
                        brand title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        products count
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
                    {brands !== undefined &&
                      brands?.map((brand) => (
                        <tr className="cursor-pointer" key={brand?._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {brand?.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <img
                              src={brand?.image}
                              className="size-10 rounded-full object-contain"
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            {brand && brand?.createdAt && (
                              <>{format(String(brand?.createdAt), "PPP")}</>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            {brand && brand?.updatedAt && (
                              <>{format(String(brand?.updatedAt), "PPP")}</>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <CustomeModal
                              trigger={
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <Edit />
                                </button>
                              }
                            >
                              <BrandEditForm brand={brand} />
                            </CustomeModal>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <AmdinLoader />
        )}
      </div>
    </main>
  );
}
