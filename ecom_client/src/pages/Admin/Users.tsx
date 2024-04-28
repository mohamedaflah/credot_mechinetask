// import { Button } from "@/shad/ui/button";

import { getAllUsersAction } from "@/redux/actions/users/getAllUsers";
import { AppDispatch, RootState } from "@/redux/store";
import { Loader, LockKeyhole } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { FaLockOpen } from "react-icons/fa6";
import { userStatusAction } from "@/redux/actions/users/userStatusAction";
export function UsersPage() {
  const { users, loading } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);
  return (
    <main className="w-full h-full px-5 space-y-2">
      <div className="w-full h-12  flex items-center justify-start">
        <h1>User Management</h1>
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
                        user name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        joined at
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        buyed products
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
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
                    {users?.map((user) => (
                      <tr className="cursor-pointer" key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {user && user.createdAt && (
                            <>{format(user?.createdAt, "PPP")}</>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          0
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex justify-end">
                          <div
                            className={`h-7 flex items-center justify-center min-w-16 text-xs ${
                              !user.status ? "bg-red-300" : "bg-green-500"
                            } rounded-3xl text-white`}
                          >
                            {!user.status ? "In active" : "Active"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            onClick={() => {
                              if (user.status) {
                                dispatch(
                                  userStatusAction({
                                    status: false,
                                    userId: String(user._id),
                                  })
                                );
                              } else {
                                dispatch(
                                  userStatusAction({
                                    status: true,
                                    userId: String(user._id),
                                  })
                                );
                              }
                            }}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            {user.status ? (
                              <LockKeyhole />
                            ) : (
                              <FaLockOpen className="text-[19px]" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
      </div>
    </main>
  );
}
