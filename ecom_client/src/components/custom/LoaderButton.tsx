import { Button } from "@/shad/ui/button";
import { ReactNode } from "react";

interface ChildProp {
  type?: "button" | "submit";
  className?: string;
  loading?: boolean;
  children: ReactNode;
}
export const LoaderButton = ({
  type,
  className,
  loading,
  children,
}: ChildProp) => {
  return (
    <Button
      className={`bg-[#1AA5C3] rounded-sm w-32 h-full uppercase ${className} ${
        loading && "pointer-events-none cursor-not-allowed bg-[#126071dc]"
      }`}
      type={type}
    >
      {loading ? "Processing..." : <>{children}</>}
    </Button>
  );
};
