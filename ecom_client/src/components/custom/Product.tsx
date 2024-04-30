import { HorizontalLine } from "../common/HorizontalLine";
import ProductCard from "./ProductCard";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductAction } from "@/redux/actions/product/getAllProductAction";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction("user"));
  }, [dispatch]);
  const { products } = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();
  const handleNavigation = (productId: string, variantId: string) => {
    // /product/:productId
    navigate(`/product/${productId}?varient=${variantId}`);
  };
  return (
    <section className="w-[86%] sm:w-[80%] mx-auto mt-10">
      <div className="w-full ">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-lg">Product</h1>
        </div>
        <HorizontalLine className="w-full" />
      </div>
      <div className="md:block hidden">
        <div className="w-full  border border-[#B9B9B9]  flex flex-col lg:flex-row lg:items-start border-r">
          <div
            className="h-44 cursor-pointer border border-r border-[#B9B9B9] border-t-0 border-x-0  w-full p-3 flex justify-start  lg:w-[40%] lg:h-full lg:flex-col lg:border-none lg:gap-5 lg:mt-20 lg:px-5"
            onClick={() =>
              handleNavigation(
                String(products?.[0]._id),
                String(products?.[0]?.variants?.[0]._id)
              )
            }
          >
            <div className="h-full w-44 lg:flex lg:justify-center lg:w-full lg:h-80">
              <img
                src={products?.[0]?.variants?.[0]?.images?.[1]}
                className="h-full object-cover"
              />
            </div>
            <div className="h-full flex flex-col gap-y-2 lg:mt-3 justify-between">
              <span className="text-[#1AA5C3] text-[12px] font-semibold line-clamp-2 lg:text-center lg:font-normal">
                {products?.[0].category}
              </span>
              <h4 className="text-sm line-clamp-2 lg:text-center lg:font-semibold lg:text-lg">
                {products?.[0].productName}
              </h4>
              <div className="flex gap-1 items-center lg:justify-center lg:mt-5">
                <span className="text-[11px] text-[#606060]">OMR</span>
                <span className="font-semibold text-sm">
                  {products?.[0].variants?.[0].price}
                </span>
                <span className="text-[#606060] text-sm line-through">
                  4,699.00
                </span>
              </div>
              <button className="p-text-[12px] bg-[#1AA5C3]  py-1 text-white lg:w-1/2 lg:mx-auto lg:h-10 lg:text-sm lg:mt-9">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 min-h-72 lg:grid-cols-3 lg:w-full">
            {products?.map((product, index) => {
              return (
                <>
                  {index > 0 && index <= 6 && (
                    <ProductCard key={product?._id} product={product} handleNavigation={handleNavigation}/>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
      {products && products?.length >= 7 && (
        <>
          <div className="hidden mt-3 lg:grid grid-cols-2 min-h-72 lg:grid-cols-4 gap-3 lg:w-full">
            {products?.map((product, index) => {
              return (
                <>
                  {index >= 7 && <ProductCard key={index} product={product} handleNavigation={handleNavigation} />}
                </>
              );
            })}
          </div>
        </>
      )}
      <div className=" md:hidden grid grid-cols-2 gap-2">
        {products?.map((product) => (
          <ProductCard product={product} key={product?._id} handleNavigation={handleNavigation}/>
        ))}
      </div>
    </section>
  );
}
