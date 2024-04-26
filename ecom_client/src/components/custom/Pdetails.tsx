import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
export default function ProductDetail() {
  const { selectedVarient } = useSelector((state: RootState) => state.product);
  const [images, setImages] = useState<string[]>();
  useEffect(() => {
    if (selectedVarient) {
      setImages([...(selectedVarient?.images as string[])]);
    }
  }, [selectedVarient]);
  const handleImageChange = (index: number) => {
    if (images) {
      const updatedImages = [...images]; // Clone the images array to avoid mutating state directly
      [updatedImages[index], updatedImages[0]] = [
        updatedImages[0],
        updatedImages[index],
      ];
      setImages(updatedImages);
    }
  };
  return (
    <div
      className="w-full md:w-auto md:h-full   h-96 flex flex-col gap-2 justify-between mt-20 md:mt-0 lg:pr-14"
      id="scrollable2"
    >
      <div className="w-full h-64 md:h-full bg-[#F9F9F9] flex items-center justify-center ">
        <img src={images?.[0]} alt="" className="h-56  object-cover " />
      </div>
      <div className="w-full h-28 md:h-48   overflow-x-auto whitespace-nowrap space-x-2 pt-2 px-">
        {images?.map((img, index) => (
          <>
            {index > 0 && (
              <div
                key={img}
                className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative"
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={img}
                  alt="Ig"
                  className="absolute size-24 object-cover top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
