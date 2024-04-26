import HeaderIcon from "./HeaderIcon";
import leftIco from "../../assets/lefft-.svg";
import rightIco from "../../assets/right-.svg";

import { useEffect, useRef } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "@/redux/actions/brands/getAllBrandAction";
export default function Brands() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const handleScrolling = (value: number) => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollLeft += value; // Adjust the scroll distance as needed
    }
  };
  const dispatch: AppDispatch = useDispatch();
  const { brands } = useSelector((state: RootState) => state.brand);
  useEffect(() => {
    dispatch(getAllBrands("user"));
  }, [dispatch]);
  return (
    <section className=" mt-8">
      <div className=" w-[86%] sm:w-[80%] mx-auto">
        <h1 className="font-semibold text-lg">Top Brands</h1>
      </div>
      <div className="w-[98%] sm:w-[90%]  mx-auto mt-5  flex min-h-28 items-center py-4 gap-2 md:py-2">
        <div onClick={() => handleScrolling(-400)}>
          <HeaderIcon Image={leftIco} className="p-1 w-8 h-8" />
        </div>
        <div
          className="scrollbarDiv overflow-x-auto h-full flex lg:space-x-2 space-x-4 md:space-x-10 w-full md:w-[90%] mx-auto transition-shadow scroll-smooth whitespace-nowrap "
          id="scrollable"
          ref={scrollAreaRef}
        >
          {brands?.map((brand) => (
            <img
              src={brand.image}
              alt=""
              className="lg:size-20 size-14 rounded-full object-cover"
            />
          ))}
        </div>
        <div onClick={() => handleScrolling(400)}>
          <HeaderIcon Image={rightIco} className="p-1 w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
