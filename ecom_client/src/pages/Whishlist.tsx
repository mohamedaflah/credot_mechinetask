
import WhishListRow from "@/components/custom/whishlistRow";

function WhishList() {
  return (
    <main>
      <header className="w-full bg-[#F9F9F9] flex justify-center items-center h-20">
        <h1 className="text-lg font-semibold">Whishlist</h1>
      </header>
      <section className="w-[85%] md:w-[80%]  mx-auto mt-24">
        <div className="flex flex-col xl:flex-row lg:items-start gap-10">
          <div className="w-full min-h-56 flex flex-col  ">
            <div className="flex border-b border-[#E2E2E2] py-1 justify-between">
              <div className="w-56 ">
                <span className="text-sm uppercase font-semibold">Product</span>
              </div>
              <div className="w-20 ">
                <span className="text-sm uppercase font-semibold">price</span>
              </div>
              <div className="w-20 line-clamp-1">
                <span className="text-sm uppercase font-semibold">Stock Status</span>
              </div>
              <div className="md:w-60">
                <span className="text-sm uppercase font-semibold">Action</span>
              </div>
            </div>
            <WhishListRow />
          </div>
        </div>
      </section>
    </main>
  );
}
export default WhishList;
