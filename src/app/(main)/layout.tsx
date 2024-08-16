import AppHeader from "@/components/header/AppHeader";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full overflow-hidden">
      <AppHeader />
      <div className="h-[calc(100%-80px)] sm:h-[calc(100%-98px)] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
