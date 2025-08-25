"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function FloatingProductHero({
  headingText,
  bottleImage,
  mainBackgroundImage,
  cloudOneImage,
  cloudTwoImage,
  cloudThreeImage,
  cloudFourImage,
}: {
  headingText: string;
  bottleImage: string;
  mainBackgroundImage: string;
  cloudOneImage: string;
  cloudTwoImage: string;
  cloudThreeImage: string;
  cloudFourImage: string;
}) {
  useEffect(() => {
    gsap.to(".textRotation", {
      x: -1000,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(".planetGreen", {
      rotate: 360,
      duration: 150,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(".box", {
      y: -28,
      x: -10,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const boxHandleMouseEnter = () => {
      gsap.to(".box img", {
        scale: 1.08,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const boxHandleMouseLeave = () => {
      gsap.to(".box img", {
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const boxElement = document.querySelector(".box img");
    if (boxElement) {
      boxElement.addEventListener("mouseenter", boxHandleMouseEnter);
      boxElement.addEventListener("mouseleave", boxHandleMouseLeave);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.02;
      const y = (e.clientY - window.innerHeight / 2) * 0.02;

      gsap.to(".cloudOne img, .cloudTwo img, .cloudThree img, .cloudFour img", {
        x,
        y,
        duration: 1.5,
        ease: "sine.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (boxElement) {
        boxElement.removeEventListener("mouseenter", boxHandleMouseEnter);
        boxElement.removeEventListener("mouseleave", boxHandleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full overflow-hidden relative flex flex-col items-center justify-center h-screen text-center px-4">
      {/* background */}
      <div className="planetGreen absolute z-10 top-44 left-0 w-full">
        <Image
          src={mainBackgroundImage}
          alt="Planet Background"
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </div>

      {/* text section */}
      <div className="w-full absolute z-7 top-36 left-1/2 -translate-x-1/2">
        <h1
          className="textRotation text-[14rem] leading-[1.2] font-bold uppercase whitespace-nowrap mt-4 font-[Rustea] opacity-24 text-transparent"
          style={{
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
          }}
        >
          {headingText}
        </h1>
      </div>

      {/* bottle image */}
      <div className="z-20 box">
        <Image
          src={bottleImage}
          alt="product"
          width={1000}
          height={1000}
          className="w-[200px] object-contain"
        />
      </div>

      {/* clouds */}
      <div className="absolute top-28 left-0 w-full h-full">
        <div className="cloudOne w-full">
          <Image
            src={cloudOneImage}
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-5 object-contain absolute bottom-0 opacity-70 left-0"
          />
        </div>
        <div className="cloudTwo w-full">
          <Image
            src={cloudTwoImage}
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-4 object-contain absolute bottom-0 opacity-60 left-0"
          />
        </div>
        <div className="cloudThree w-full">
          <Image
            src={cloudThreeImage}
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-3 object-contain absolute bottom-0 opacity-50 left-0"
          />
        </div>
        <div className="cloudFour w-full">
          <Image
            src={cloudFourImage}
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-2 object-contain absolute bottom-0 opacity-40 left-0"
          />
        </div>
      </div>
    </section>
  );
}
