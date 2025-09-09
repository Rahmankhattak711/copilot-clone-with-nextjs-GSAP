import React from "react";
import { HeaderN } from "./components/HeaderN";
import MainHeader from "../components/MainHeader";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderN />
      <div className="w-full flex items-center justify-center  fixed bottom-14 z-[100]">
        <div className="w-screen ">
          <MainHeader />
        </div>
      </div>
      {children}
    </div>
  );
}
