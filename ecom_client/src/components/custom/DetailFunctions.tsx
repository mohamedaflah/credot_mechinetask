import start from "../../assets/Vector.svg";

import QuantityButton from "../common/Qtybutton";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { addToCartAction } from "@/redux/actions/cart/addTocart";
import toast from "react-hot-toast";
import hexToColorName from "@/util/colorToHascode";

function DetailFunctions() {
  const { selectedProduct, selectedVarient } = useSelector(
    (state: RootState) => state.product
  );
  const [gotoCart, setGotocart] = useState<boolean>(false);
  const { cartproducts } = useSelector((state: RootState) => state.cart);

  const [searchParam, setSearchParam] = useSearchParams();
  const [qty, setQty] = useState<number>(1);
  const handleColorClick = (varientId: string) => {
    const param = new URLSearchParams(searchParam);
    param.set("varient", varientId);
    setSearchParam(param);
  };
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const handleAddtocart = () => {
    if (!user) {
      toast.error("pleaes login or create account");
      return navigate("/login");
    }
    if (cartproducts?.includes(String(selectedVarient?._id)) || gotoCart) {
      return navigate(`/cart/${user?._id}`);
    }
    // addToCartAction
    dispatch(
      addToCartAction({
        productId: String(selectedVarient?._id),
        qty: qty,
        userId: String(user?._id),
      })
    ).then((res) => {
      if (res.type.endsWith("fulfilled")) {
        setGotocart(true);
      }
    });
  };
  return (
    <div className="w-full min-h-96 flex flex-col py-3 px-2 md:w-auto md:h-full md:py-0">
      <div className="text-xl">
        <h2>{selectedProduct?.productName}</h2>
      </div>
      <div className="flex gap-2 mt-3 h-6 items-center">
        <div className="flex gap-1">
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
          <img src={start} alt="" />
        </div>
        <div className="text-[12px] text-[#999999]">
          ( There are no reviews yet )
        </div>
      </div>
      <div className="flex gap-2 mt-3 h-6 items-center">
        <div className="flex gap-1 text-[#606060] text-[12px]">
          <span>OMR</span>
        </div>
        <div className="text-lg text-[#999999] flex gap-2">
          <span className="text-black font-semibold">
            {selectedVarient?.price}
          </span>
          <span className="line-through">5,699.00</span>
        </div>
      </div>
      <div className="flex gap-2 mt-3 text-[12px] h-14 line-clamp-2 items-center">
        <p className="text-[#999999] line-clamp-3">
          {selectedVarient?.description}
        </p>
      </div>
      <div>
        <div className="flex gap-1 mt-4 text-lg items-center">
          <span className="text-lg font-semibold">Color</span>:
          <h2 className="text-[12px]">{hexToColorName(String(selectedVarient?.color))}</h2>
        </div>
        <div className="flex mt-2 gap-2">
          {selectedProduct?.variants
      ?.filter(
        (variant, index, self) =>
          self.findIndex((v) => v.color === variant.color) === index
      ) // Filter unique color values
      .map((variant) => (
        <>
          {variant.status === "publish" && (
            <div
              key={variant._id}
              className="w-14 h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
                  selectedVarient?.color === variant.color && "bg-black"
                }`}
                style={{ background: variant.color }}
                onClick={() => handleColorClick(String(variant._id))}
              >
                {selectedVarient?.color === variant.color && (
                  <IoCheckmark className="text-white text-2xl" />
                )}
              </div>
            </div>
          )}
        </>
      ))}
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-4 text-lg items-center">
          {!selectedVarient?.memory && selectedVarient?.memory !== "" && (
            <span className="text-sm font-semibold">Internal memmory</span>
          )}
        </div>
        <div className="flex mt-2 gap-2 md:gap-2">
          {selectedProduct?.variants
            ?.filter(
              (variant, index, self) =>
                self.findIndex((v) => v.memory === variant.memory) === index
            ) // Filter unique memory values
            .map((variant) => (
              <>
                {variant.memory && variant.memory !== "" && (
                  <div
                    key={variant._id}
                    onClick={() => handleColorClick(String(variant?._id))}
                    className={`w-full ${
                      selectedVarient?.memory === variant.memory &&
                      "bg-black text-white border-none"
                    } md:w-24 h-10 rounded-sm border cursor-pointer border-[#DCDCDC] flex items-center justify-center text-sm`}
                  >
                    {variant.memory}
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
      <div>
        <div className="flex mt-4 gap-5 justify-between py-4 border-t border-b border-[#DCDCDC] md:justify-start">
          <QuantityButton
            setQty={setQty}
            qty={qty}
            stock={Number(selectedVarient?.stock)}
          />
          <button
            className={`h-10 bg-black ${
              loading && "bg-gray-900 pointer-events-none"
            } w-full text-sm rounded-sm text-white md:w-44 `}
            onClick={handleAddtocart}
          >
            {cartproducts?.includes(String(selectedVarient?._id)) ||
            gotoCart ? (
              "Go to cart"
            ) : (
              <>{loading ? "Processing..." : "Add to cart"}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailFunctions;
