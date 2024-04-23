import MainImage from "../../assets/detailImage1.png";
import singleImage1 from "../../assets/prd2.png";
export default function ProductDetail() {
  return (
    <div
      className="w-full md:w-auto md:h-full   h-96 flex flex-col gap-2 justify-between mt-20 md:mt-0 lg:pr-14"
      id="scrollable2"
    >
      <div className="w-full h-64 md:h-full bg-[#F9F9F9] flex items-center justify-center ">
        <img src={MainImage} alt="" className="h-72 md:w-1/2 md:h-auto " />
      </div>
      <div className="w-full h-28 md:h-48   overflow-x-auto whitespace-nowrap space-x-2 pt-2 px-">
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
      </div>
    </div>
  );
}
