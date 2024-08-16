import React from "react";
import SheetModel from "../models/SheetModel";
import { Button } from "../ui/Button";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import routes from "@/data/routes/routes.json";
const MobileRoutes = () => {
  return (
    <SheetModel Bodycontent={<BodyContent />} className="left-0 top-0">
      <Button variant={"default"} size={"icon"}>
        <FaBars />
      </Button>
    </SheetModel>
  );
};

export const BodyContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-y-4">
        {routes.map(({ name, url }) => (
          <Link href={url} key={name} className="h-16 flex items-center justify-center">
            {name}
          </Link>
        ))}
        <Button>Download CV</Button>
      </div>
    </>
  );
};

export default MobileRoutes;
