'use client';
import React, { useEffect } from "react";
import gsap from "gsap";
import FloatingProductHero from "../components/FloatingProductHero";

export default function TakeOrange({ isActive }) {
  useEffect(() => {
    if (isActive) {
      gsap.to(".main-bg-orange", {
        rotate: -60,
        duration: 0.3,
        ease: "linear",
      });

      gsap.fromTo(
        ".bottleOrange",
        { x: 20, rotate: 20 },
        { x: 0, rotate: 0, duration: 0.3, ease: "linear" }
      );
    } else {
      gsap.set(".main-bg-orange", { rotate: 0 });
      gsap.set(".bottleOrange", { x: 0, rotate: 0 });
    }
  }, [isActive]);

  return (
    <div className="bg-[#5A2043]">
      <FloatingProductHero
        headingText="TAKE OFF TAKE OFF TAKE OFF TAKE OFF TAKE OFF"
        bottleImage="/orange/sativa-product.png.webp"
        mainBackgroundImage="/orange/planet-yellow-sativa.png.webp"
        cloudOneImage="/orange1.png.webp"
        cloudTwoImage="/orange2.png.webp"
        cloudThreeImage="/orange/3.png.webp"
        cloudFourImage="/orange4.png.webp"
        bottleClass="bottleOrange"
        mainBgClass="main-bg-orange"
      />
    </div>
  );
}
