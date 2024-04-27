import { getOrdersByUser } from "@/redux/actions/order/getOrdersByUser";
import { AppDispatch, RootState } from "@/redux/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shad/ui/accordion";
import { format } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Orders() {
  const { user } = useSelector((state: RootState) => state.user);
  const { userorder } = useSelector((state: RootState) => state.order);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (user && user._id) {
      dispatch(getOrdersByUser(String(user?._id)));
    }
  }, [dispatch, user]);
  return (
    <main className="w-full h-screen bg-[#F9F9F9]">
      <section className=" w-[85%] md:w-[80%]  mx-auto pt-8 h-full text-sm">
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="shadow-inner bg-slate-100 py-2 px-5 rounded-md overflow-x-auto "
          >
            {userorder?.map((order) => (
              <AccordionItem value={String(order._id)} key={order._id} >
                <AccordionTrigger className="">
                  <div className="flex  capitalize gap-2 items-start w-[660px]">
                    <div className="flex items-center gap-2">
                      Order date:
                      <div className="px-3 flex items-center justify-center h-6 text-[12px] border rounded-3xl bg-background">
                        {order && order.createdAt && (
                          <>{format(String(order.createdAt), "PPP")}</>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      Order status:
                      <div className="px-3 flex items-center justify-center h-6 text-[12px] border rounded-3xl bg-background">
                        {order?.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      Order Id:
                      <div className="px-3 flex items-center justify-center h-6 text-[12px] border rounded-3xl bg-background">
                        {order?._id}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" p-4">
                  <table className="w-full overflow-x-auto">
                    <thead className="min-w-[660px] b">
                      <tr className="border-b ">
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          Product
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          Brand
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          Category
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          Colour
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          price
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          Qty
                        </td>
                        <td
                          scope="col"
                          className="text-left font-semibold py-2 px-4"
                        >
                          subtotal
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products?.map((product) => (
                        <tr className="border-b " key={product._id}>
                          <td scope="col" className="text-left  py-4 px-4 flex items-center gap-2">
                            <img src={product.productDetails.variant.images[0]} className="size-10 object-cover" alt="" />
                            {product.productDetails.productName}
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            <div className="w-full h-full flex gap-2 items-center">

                          <img src={product.productDetails.brand.split("[(*)]" as unknown as { [Symbol.split](string: string, limit?: number | undefined): string[]; })[1]} className="size-8 object-contain rounded-full" alt="" />
                            {product.productDetails.brand.split("[(*)]" as unknown as { [Symbol.split](string: string, limit?: number | undefined): string[]; })[0]}
                            </div>
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            {product.productDetails.category}
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            <div className="size-4 rounded-full" style={{background:product.productDetails.variant.color}}/>
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            {product.productDetails.variant.price}
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            {product.qty}
                          </td>
                          <td scope="col" className="text-left  py-4 px-4">
                            {product.qty*product.productDetails.variant.price}
                          </td>
                        </tr>
                      ))}
                      <tr className="h-12 ">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="font-semibold font-sans">
                            <div className="h-full w-full flex items-center">
                            Total Amount
                            </div>
                        </td>
                        <td className="font-semibold">
                            {order.totalAmount}₹
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
