import Link from "next/link";
import React from "react";
import DropDownModel from "../models/DropDownModel";
import { Button } from "../ui/Button";
import { FaChevronDown } from "react-icons/fa6";
import { RouteType } from "@/data/routes";

const MoreList = ({ routes }: { routes: RouteType[] }) => {
  return (
    <DropDownModel
      className="right-0 left-auto my-2"
      BodyContent={<MoreListCard routes={routes} />}
    >
      <Button variant={"outline"} className="gap-2">
        <span>More</span>
        <FaChevronDown />
      </Button>
    </DropDownModel>
  );
};

export const MoreListCard = ({ routes }: { routes: RouteType[] }) => {
  return (
    <>
      {routes.map(({ name, url }, index) => (
        <Link
          href={url}
          key={index}
          className="flex items-center justify-center p-4 hover:bg-primary/40 transition-all"
        >
          <div>{name}</div>
        </Link>
      ))}
    </>
  );
};

export default MoreList;
