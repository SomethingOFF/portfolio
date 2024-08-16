"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { MdClose } from "react-icons/md";

interface SheetModelProps {
  children: React.ReactNode;
  Bodycontent: React.ReactNode;
  className?: string;
}

const SheetModel = ({ children, className, Bodycontent }: SheetModelProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full h-full">
      <div onClick={() => setActive(true)} className="h-full flex items-center">
        {children}
      </div>
      <div
        className={cn(
          "fixed z-20 w-full h-full bg-white transition-all",
          active ? "opacity-100 visible" : "opacity-0 invisible",
          className
        )}
      >
        <div className="h-20 flex items-center justify-between px-4">
          <div>Header</div>
          <Button size={"icon"} onClick={() => setActive(false)}>
            <MdClose />
          </Button>
        </div>
        <div className="h-[calc(100%-80px)]">{Bodycontent}</div>
      </div>
    </div>
  );
};

export default SheetModel;
