"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import FloatingProductHero from "../components/FloatingProductHero";

export default function TakeOffPurple({ isActive }) {
  useEffect(() => {
    if (isActive) {
      gsap.to(".main-bg-purple", {
        rotate: -60,
        duration: 0.3,
        ease: "linear",
      });

      gsap.fromTo(
        ".bottlePurple",
        { x: 20, rotate: 20 },
        { x: 0, rotate: 0, duration: 0.3, ease: "linear" }
      );
    } else {
      gsap.set(".main-bg-purple", { rotate: 0 });
      gsap.set(".bottlePurple", { x: 0, rotate: 0 });
    }
  }, [isActive]);

  return (
    <div className="bg-[#152448]">
      <FloatingProductHero
        headingText="TOUCH DOWN TOUCH DOWN TOUCH DOWN"
        bottleImage="/purple/indica-product.png.webp"
        mainBackgroundImage="/purple/plante-blue-indica.png.webp"
        cloudOneImage="/purple/0.png.webp"
        cloudTwoImage="/purple/1.png.webp"
        cloudThreeImage="/purple/2.png.webp"
        bottleClass="bottlePurple"
        mainBgClass="main-bg-purple"
      />
    </div>
  );
}
