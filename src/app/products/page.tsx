"use client";
import React, { useEffect, useState } from "react";
import TakeOff from "../pages/TakeOff";
import TakeOrange from "../pages/TakeOrange";
import TakeOffPurple from "../pages/TakeOffPurple";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panels = [
    <section key="1" className="w-screen h-screen">
      <TakeOff />
    </section>,
    <section key="2" className="w-screen h-screen">
      <TakeOrange />
    </section>,
    <section key="3" className="w-screen h-screen">
      <TakeOffPurple />
    </section>,
  ];

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % panels.length);
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev - 1 + panels.length) % panels.length);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [panels.length]);

  useEffect(() => {
    const handleClick = () => {
      setActiveIndex((prev) => (prev + 1) % panels.length);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [panels.length]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="w-full h-full">{panels[activeIndex]}</div>
    </div>
  );
}
