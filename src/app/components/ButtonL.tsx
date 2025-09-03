"use client";
import React from "react";

import "./ButtonL.css";

interface ButtonMirroredProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ButtonL({
  children,
  onClick,
}: ButtonMirroredProps) {
  return (
    <button onClick={onClick} className={"btnr topr"}>
      {children}
    </button>

  );
}
