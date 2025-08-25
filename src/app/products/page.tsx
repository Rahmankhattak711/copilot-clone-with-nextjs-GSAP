"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TakeOff from "../pages/TakeOff";
import TakeOrange from "../pages/TakeOrange";
import TakeOffPurple from "../pages/TakeOffPurple";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current!.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="flex w-[300vw]">
        <section className="panel w-full">
          <TakeOff />
        </section>
        <section className="panel w-full">
          <TakeOrange />
        </section>
        <section className="panel w-full">
          <TakeOffPurple />
        </section>
      </div>
    </div>
  );
}
