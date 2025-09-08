"use client";
import React, { useEffect, useState, useRef } from "react";
import TakeOff from "../pages/TakeOff";
import TakeOrange from "../pages/TakeOrange";
import TakeOffPurple from "../pages/TakeOffPurple";
import gsap from "gsap";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  const panels = [
    <section key="1" className="w-screen h-screen absolute top-0 left-0">
      <TakeOff isActive={activeIndex === 0} />
    </section>,
    <section key="2" className="w-screen h-screen absolute top-0 left-0">
      <TakeOrange isActive={activeIndex === 1} />
    </section>,
    <section key="3" className="w-screen h-screen absolute top-0 left-0">
      <TakeOffPurple isActive={activeIndex === 2} />
    </section>,
  ];

  useEffect(() => {
    panels.forEach((_, i) => {
      gsap.set(`.panel-${i}`, {
        opacity: i === activeIndex ? 1 : 0,
        y: i === activeIndex ? 0 : 100,
        zIndex: i === activeIndex ? 10 : 0,
      });
    });

    if (!isAnimating.current) {
      isAnimating.current = true;
      gsap.to(`.panel-${activeIndex}`, {
        opacity: 1,
        y: 0,
        zIndex: 10,
        duration: 0.8,
        ease: "power2.out",
      });

      panels.forEach((_, i) => {
        if (i !== activeIndex) {
          gsap.to(`.panel-${i}`, {
            opacity: 0,
            y: 100,
            zIndex: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });

      gsap.delayedCall(0.8, () => {
        isAnimating.current = false;
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (isAnimating.current) return;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % panels.length);
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev - 1 + panels.length) % panels.length);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [panels.length]);

  useEffect(() => {
    const handleClick = () => {
      if (isAnimating.current) return;
      setActiveIndex((prev) => (prev + 1) % panels.length);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [panels.length]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-screen h-screen overflow-hidden relative"
      >
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`panel-${i} w-full h-full absolute top-0 left-0`}
          >
            {panel}
          </div>
        ))}
      </div>
    </>
  );
}
