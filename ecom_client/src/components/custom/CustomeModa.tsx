import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shad/ui/dialog";

import { ReactNode } from "react";

interface ChildProp {
  children: ReactNode;
  trigger: ReactNode;
  className?: string;
  title?: string;
}
export function CustomeModal({ className, children, trigger,title }: ChildProp) {
  return (
    <Dialog>
      <DialogTrigger className="bg-transparent outline-none border-none hover:bg-transparent p-0">
        {trigger}
      </DialogTrigger>
      <DialogContent className={`${className}`}>
        <DialogHeader>
          
            <DialogTitle>{title}</DialogTitle>
          
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
