import React from "react";
import { HeaderN } from "./components/HeaderN";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderN />
      {children}
    </div>
  );
}
