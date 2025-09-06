"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import FloatingProductHero from "../components/FloatingProductHero";

export default function TakeOffPurple() {
  useEffect(() => {
    gsap.to(".main-bg-orange", {
      rotate: -60,
      duration: 0.3,
      ease: "linear",
    });

    gsap.from(".bottleOrange", {
      x: 20,
      rotate: 20,
      duration: 0.3,
      ease: "linear",
    });

    gsap.to(".bottleOrange", {
      x: 0,
      rotate: 0,
    });
  }, []);
  return (
    <div className="bg-[#152448]">
      <FloatingProductHero
        headingText="TOUCH DOWN TOUCH DOWN TOUCH DOWN"
        bottleImage="/purple/indica-product.png.webp"
        mainBackgroundImage="/purple/plante-blue-indica.png.webp"
        cloudOneImage="/purple/0.png.webp"
        cloudTwoImage="/purple/1.png.webp"
        cloudThreeImage="/purple/2.png.webp"
        bottleClass="bottleOrange"
        mainBgClass="main-bg-orange"
      />
    </div>
  );
}
