import React from "react";
import servicelist from "@/data/about/service/servicelist.json";
import Image from "next/image";
const ServiceList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-4">
      {servicelist.map((list) => (
        <div
          className="p-4 flex flex-col gap-4 w-full max-w-60 border rounded-lg"
          key={list.name}
        >
          <div className="w-20 h-20 aspect-square">
            <Image
              src={list.url}
              alt="list image"
              width={100}
              height={100}
              className="w-full h-full"
              unoptimized
            />
          </div>
          <div className="text-lg font-semibold">{list.name}</div>
          <div>{list.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
