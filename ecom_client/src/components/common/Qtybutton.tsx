import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";

function QuantityButton({
  className = "",
  qty,
  setQty,
  stock,
}: {
  className?: string;
  setQty?: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
  qty: number;
}) {
  return (
    <div
      className={`${className} w-full h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-between text-sm md:w-40`}
    >
      <div
        className="h-full flex items-center justify-center text-1xl w-full border-r border-[#DCDCDC] cursor-pointer"
        onClick={() => {
          if (qty > 1) {
            setQty && setQty((prev) => prev - 1);
          }
        }}
      >
        <Minus className="w-4" />
      </div>
      <div className="h-full  flex items-center justify-center w-full">
        {qty}
      </div>
      <div
        className="h-full flex items-center justify-center text-1xl w-full border-l border-[#DCDCDC] cursor-pointer"
        onClick={() => {
          if (qty < stock) {
            setQty && setQty((prev) => prev + 1);
          }else{
            toast.error("Limit reached")
          }
        }}
      >
        <Plus className="w-4" />
      </div>
    </div>
  );
}

export default QuantityButton;
