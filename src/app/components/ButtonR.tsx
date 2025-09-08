import React from "react";
import "./ButtonR.css";

export default function ButtonR({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={`btn top ${className}`}>{children}</button>;
}
