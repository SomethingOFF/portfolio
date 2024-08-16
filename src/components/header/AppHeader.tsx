import React from "react";
import AppLogo from "./AppLogo";
import AppRoutes from "./AppRoutes";
import MobileRoutes from "./mobile-routes";

const AppHeader = () => {
  return (
    <div className="h-20 lg:h-24 px-4 lg:px-2 flex items-center w-full">
      <div className="h-[67px] flex items-center justify-between w-full">
        <AppLogo />
        <div className="h-full sm:flex items-center hidden">
          <AppRoutes />
        </div>
        <div className="h-full sm:hidden flex items-center">
          <MobileRoutes />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
