import CartRow from "@/components/custom/cartRow";

function Cart() {
  return (
    <main>
      <header className="w-full bg-[#F9F9F9] flex justify-center items-center h-20">
        <h1 className="text-lg font-semibold">Cart</h1>
      </header>
      <section className="w-[85%] md:w-[80%]  mx-auto mt-8">
        <div className="flex flex-col xl:flex-row lg:items-start gap-10">
          <div className="w-full min-h-56 flex flex-col  ">
            <div className="flex border-b border-[#E2E2E2] py-1 justify-between">
              <div className="w-56 ">
                <span className="text-sm uppercase">Product</span>
              </div>
              <div className="w-24 ">
                <span className="text-sm uppercase">price</span>
              </div>
              <div className="w-28">
                <span className="text-sm uppercase">Quantity</span>
              </div>
              <div className="w-28">
                <span className="text-sm uppercase">Sub total</span>
              </div>
            </div>
            <CartRow />
            <CartRow />
            <div className="w-full h-12  lg:flex justify-between mt-4 hidden ">
              <div className="w-max h-full border border-[#DFDCDC] overflow-hidden flex">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  className="h-full w-full text-[12px] md:text-sm pl-3 outline-none"
                />
                <button className="h-full text-[9px] w-56 md:text-[12px] line-clamp-1 uppercase text-white bg-black">
                  apply coupon
                </button>
              </div>
              <button className="h-full w-48 border-2 border-black text-sm uppercase font-semibold">
                update cart
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mt-5 lg:grid-cols-1  xl:grid-cols-none xl:grid-rows-none">
            <div className="w-[90%] ">
              <div className=" flex-col gap-2 flex lg:hidden">
                <div className="w-full h-10 border border-[#DFDCDC] overflow-hidden flex">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    className="h-full w-full text-[12px] md:text-sm pl-3 outline-none"
                  />
                  <button className="h-full text-[9px] w-32 md:text-sm line-clamp-1 uppercase text-white bg-black">
                    apply coupon
                  </button>
                </div>
                <button className="w-full h-10 font-semibold uppercase text-sm border-black border-2">
                  update cart
                </button>
              </div>
            </div>
            <div className="h-64 border border-[#DFDCDC] rounded-sm lg:rounded-none flex items-center justify-center w-full lg:w-80">
              <div className="w-[90%] h-[90%] flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-lg">Cart Totals</h2>
                </div>
                <div className="flex justify-between  w-full mt-5 border-b h-10 border-[#DFDCDC] items-start">
                  <span>Subtotal</span>
                  <span className="text-sm uppercase ">
                    <span>OMR 107.00</span>
                  </span>
                </div>
                <div className="flex justify-between  w-full mt-5  ">
                  <span>Total</span>
                  <span className="text-lg uppercase font-bold">
                    <span>OMR 107.00</span>
                  </span>
                </div>
                <button className="w-full h-10 bg-[#1AA5C3]  text-sm uppercase text-white ">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Cart;
