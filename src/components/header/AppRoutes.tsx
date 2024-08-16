"use client";

import React from "react";
import routes from "@/data/routes/routes.json";
import { Button } from "../ui/Button";
import Link from "next/link";
import useMedia, { sizes } from "@/hooks/useMedia";
import MoreList from "./MoreList";
const AppRoutes = () => {
  const size = useMedia();
  const medium = size === sizes.MEDIUM;
  const formattedAray = routes.slice(0, 2);
  const moreArray = routes.slice(2);
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-3">
        {(medium ? formattedAray : routes).map(({ name, url, id }) => (
          <Link href={url} key={id} className="px-[14px] py-[10px]">
            {name}
          </Link>
        ))}
        {medium && <MoreList routes={moreArray} />}
      </div>
      <Button>Download CV</Button>
    </div>
  );
};

export default AppRoutes;
