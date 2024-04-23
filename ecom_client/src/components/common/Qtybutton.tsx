function QuantityButton({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} w-full h-10 rounded-sm border border-[#DCDCDC] flex items-center justify-between text-sm md:w-40`}>
      <div className="h-full flex items-center justify-center text-1xl w-full border-r border-[#DCDCDC]">
        +
      </div>
      <div className="h-full  flex items-center justify-center w-full">1</div>
      <div className="h-full flex items-center justify-center text-1xl w-full border-l border-[#DCDCDC]">
        +
      </div>
    </div>
  );
}

export default QuantityButton;
