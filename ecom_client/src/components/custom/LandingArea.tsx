import LandingImage from "@/assets/LandingPageImage.png";
import { getCartProductIds } from "@/redux/actions/cart/getCartProductIds";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

function LandingArea() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (user && user._id) {
      dispatch(getCartProductIds(String(user?._id)));
    }
  }, [dispatch, user]);
  return (
    <div className="w-full">
      <img src={LandingImage} alt="Image" className="object-cover" />
    </div>
  );
}
export default LandingArea;
