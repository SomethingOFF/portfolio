import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-4">
        {[...new Array(3)].map((_, index) => (
          <div
            className={cn(
              "flex items-center max-w-1/3 p-4 border rounded-lg",
              index % 2 === 0 ? "opacity-20" : "opacity-100"
            )}
            key={index}
          >
            <div className="w-40 shrink-0 h-40 flex items-center justify-center overflow-hidden border-2 rounded-full">
              <Image
                src={"/user.png"}
                alt="image"
                width={100}
                height={100}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="line-clamp-3">
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                hic commodi placeat obcaecati praesentium quas expedita
                repellendus. Natus amet animi, commodi illo consequuntur ipsam
                iste praesentium libero quo vel nisi, est possimus illum facere
                inventore deleniti autem quod error cumque a perferendis
                repellendus quas in? Dolor itaque aliquid minima amet? "
              </div>
              <div>Name</div>
              <div>cto</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-1">
        {[...new Array(3)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-8 h-2",
              index % 2 === 0 ? "bg-gray-400" : "bg-primary"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
