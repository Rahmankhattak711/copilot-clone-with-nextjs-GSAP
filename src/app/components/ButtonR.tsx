import React from "react";
import './ButtonR.css';

export default function ButtonR({ children }: { children: React.ReactNode }) {
  return <button className="btn top">{children}</button>;
}
