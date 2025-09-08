"use client";
import React, { useEffect } from "react";
import FloatingProductHero from "../components/FloatingProductHero";
import gsap from "gsap";

export default function TakeOff({ isActive}) {
  useEffect(() => {
    if (isActive) {
      gsap.to(".main-bg", {
        rotate: -60,
        duration: 0.3,
        ease: "linear",
      });

      gsap.fromTo(
        ".bottle",
        { x: 20, rotate: 20 },
        { x: 0, rotate: 0, duration: 0.3, ease: "linear" }
      );
    } else {
      gsap.set(".main-bg", { rotate: 0 });
      gsap.set(".bottle", { x: 0, rotate: 0 });
    }
  }, [isActive]);

  return (
    <div className="bg-[#246458]">
      <FloatingProductHero
        headingText="HIGH POINT HIGH POINT HIGH POINT HIGH POINT"
        bottleImage="/assets/hybrid-product.png.webp"
        mainBackgroundImage="/assets/planet-green-hybrid.png.webp"
        cloudOneImage="/assets/0.png.webp"
        cloudTwoImage="/assets/1.png.webp"
        cloudThreeImage="/assets/2.png.webp"
        cloudFourImage="/assets/3.png.webp"
        bottleClass="bottle"
        mainBgClass="main-bg"
      />
    </div>
  );
}
