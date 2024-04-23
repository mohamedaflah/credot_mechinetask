
import LandingImage from "../../assets/landing.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

function LandingArea() {
  return (
    <div className="w-full">
      <img src={LandingImage} alt="Image" className="object-cover" />
    </div>
  );
}
export default LandingArea;
