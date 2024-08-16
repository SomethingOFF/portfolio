"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export type DataType = {
  url: string;
  name: string;
  Icon?: any;
};

interface DropDownModelProps {
  children: React.ReactNode;
  className?: string;
  BodyContent: React.ReactNode;
}

const DropDownModel: React.FC<DropDownModelProps> = ({
  children,
  className,
  BodyContent,
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    setActive((prev) => !prev);
  };
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        event.target &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [ref, active]);
  return (
    <div className="h-full relative" ref={ref}>
      <div onClick={clickHandler}>{children}</div>
      <div
        className={cn(
          "absolute min-w-[300px] bg-white shadow-lg border rounded-lg z-20",
          active ? "opacity-100 visible" : "invisible opacity-0",
          className
        )}
      >
        {active && <div>{BodyContent}</div>}
      </div>
    </div>
  );
};

export default DropDownModel;
