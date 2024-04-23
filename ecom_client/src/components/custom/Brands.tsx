import HeaderIcon from "./HeaderIcon";
import leftIco from "../../assets/lefft-.svg";
import rightIco from "../../assets/right-.svg";
import AppleLogo from "../../assets/AppleBrand.png";
import RealmeLogo from "../../assets/realme.png";
import { useRef } from "react";
export default function Brands() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const handleScrolling = (value: number) => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollLeft += value; // Adjust the scroll distance as needed
    }
  };
  return (
    <section className=" mt-8">
      <div className=" w-[86%] sm:w-[80%] mx-auto">
        <h1 className="font-semibold text-lg">Top Brands</h1>
      </div>
      <div className="w-[98%] sm:w-[90%]  mx-auto  flex h-28 items-center py-4 gap-2 md:py-2">
        <div onClick={() => handleScrolling(-400)}>
          <HeaderIcon Image={leftIco} className="p-1 w-8 h-8" />
        </div>
        <div
          className="overflow-x-auto h-full flex space-x-2 md:space-x-10 w-full md:w-[90%] mx-auto transition-shadow scroll-smooth whitespace-nowrap"
          id="scrollable"
          ref={scrollAreaRef}
        >
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={AppleLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
          <img src={RealmeLogo} alt="" className="h-full" />
        </div>
        <div onClick={() => handleScrolling(400)}>
          <HeaderIcon Image={rightIco} className="p-1 w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
