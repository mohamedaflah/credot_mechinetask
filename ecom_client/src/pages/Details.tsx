import DetailFunctions from "@/components/custom/DetailFunctions";
import ProductDetail from "@/components/custom/Pdetails";
// import ProductCard from "@/components/custom/ProductCard";
import { getProductAndVarient } from "@/redux/actions/product/getProductAnVarient";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

function Detail() {
  const { productId } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  setSearchParam;
  
  useEffect(() => {
    const param = new URLSearchParams(searchParam);

    dispatch(
      getProductAndVarient({
        productId: String(productId),
        varientId: String(param.get("varient")),
      })
    );
  }, [dispatch, productId, searchParam]);
  return (
    <main>
      <div className="flex flex-col w-[85%] md:w-[80%] justify-center mx-auto">
        <div className="flex flex-col w-full md:grid md:grid-cols-2  ">
          <ProductDetail />
          <DetailFunctions />
        </div>
        <div className="w-full  mt-10 md:mt-28 flex flex-col gap-y-10">
          <div className="h-12 flex border-b">
            <div className="h-full w-44  flex items-center">Overview</div>
            <div className="h-full w-auto pr-3  flex items-center font-semibold border-b-2 border-black ">
              Specification
            </div>
          </div>
          <div className="w-full min-h-96  px-5">
            <ul className="list-disc space-y-4 text-sm">
              <li>Bluthooth v5.0</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
              <li>Screen size 139 inches</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <div className="w-full font-semibold border-b h-12">
            Related Product
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 justify-center items-center gap-4">
          {/* <ProductCard className="w-full"/>
          <ProductCard className="w-full"/>
          <ProductCard className="w-full"/>
          <ProductCard className="w-full"/>
          <ProductCard className="w-full"/> */}
        </div>
      </div>
    </main>
  );
}
export default Detail;
