import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

const ProjectList = () => {
  return (
    <div className="space-y-8">
      <div className="h-20 w-full flex items-center justify-center gap-x-2">
        <Button variant={"outline"}>All</Button>
        <Button variant={"outline"}>UI/UX</Button>
        <Button>Web Design</Button>
        <Button variant={"outline"}>App Design</Button>
        <Button variant={"outline"}>Graphic Design</Button>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-1/2 flex items-center flex-col">
            <div className="h-80 max-w-80">
              <Image
                src={"/images/project1.png"}
                alt="images"
                width={100}
                height={100}
                className="w-full select-none h-full object-cover"
                unoptimized
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
