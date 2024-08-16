import React from "react";
import AppLogo from "../header/AppLogo";
import routes from "@/data/routes/routes.json";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex items-center flex-col gap-y-4">
      <AppLogo />
      <div className="flex items-center gap-4 flex-wrap">
        {routes.map(({ name, url, id }) => (
          <Link href={url} key={id} className="px-[14px] py-[10px]">
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsLinkedin />
      </div>
      <div className="bg-gray-800 text-white w-full h-14 flex items-center justify-center">
        © 2023 Mumair All Rights Reserved , Inc.
      </div>
    </div>
  );
};

export default Footer;
