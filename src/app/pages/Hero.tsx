"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ButtonL from "../components/ButtonL";
import ButtonR from "../components/ButtonR";

export const Hero = () => {
  useEffect(() => {
    // Planet rotation
    gsap.to(".planet-yellow", {
      rotate: -360,
      duration: 100,
      ease: "none",
      repeat: -1,
    });

    // Yellow dots rotation
    gsap.to(".yellow-dots img", {
      rotate: -360,
      duration: 400,
      ease: "none",
      repeat: -1,
    });

    // text animation
    gsap.to(".main-text h1", {
      x: -1000,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Mouse move
    const handleMouseMove = (e: any) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(".rocks img, .cloud img", {
        x: x * 0.02,
        y: y * 0.02,
        duration: 0.5,
        ease: "ease",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative text-white bg-gradient-to-tr from-[#ca1637] to-[#780c2d] overflow-hidden font-[Rustea] text-center">
      {/* Main Content */}
      <main className="relative w-full text-center">
        {/* Planet Background */}
        <div className="absolute top-20 left-0 flex justify-center w-full pt-10 z-[100] planet-bg">
          <Image
            src="/assets/home-planet-bg.png.webp"
            alt="Planet Background"
            width={750}
            height={750}
            className="w-[350px] object-contain"
          />
          <div className="absolute top-6 left-0 flex items-center justify-center w-full h-full z-[200] planet-yellow">
            <Image
              src="/assets/planet-yellow-sativa.png.webp"
              alt="Planet Yellow"
              width={750}
              height={750}
              className="w-[300px] object-contain"
            />
          </div>
        </div>

        {/* Stars */}
        <div className="relative z-10 dot">
          <Image
            src="/assets/stars.png.webp"
            alt="Yellow Dots"
            width={750}
            height={750}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Yellow Dots"
            width={750}
            height={750}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-contain dotOne"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Yellow Dots"
            width={750}
            height={750}
            className="absolute top-0 left-[40%] -translate-x-1/2 w-full object-contain dotTwo"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Yellow Dots"
            width={750}
            height={750}
            className="absolute top-[10px] left-[30%] -translate-x-1/2 w-full object-contain dotThree"
          />
        </div>

        {/* Yellow Dots */}
        <div className="relative z-0 yellow-dots">
          <Image
            src="/assets/stars.png.webp"
            alt="Yellow Dots"
            width={750}
            height={750}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
        </div>

        {/* Spaceship */}
        <div className="relative z-[500] spaceship">
          <Image
            src="/assets/home-spaceship-page.png.webp"
            alt="Spaceship"
            width={750}
            height={750}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Astronaut */}
        <div className="relative z-[600] astronaut">
          <Image
            src="/assets/home-astronaut.png.webp"
            alt="Astronaut"
            width={750}
            height={750}
            className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[350px] object-contain"
          />
        </div>

        {/* Scrolling Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500] w-full main-text">
          <h1 className="text-[14rem] leading-[1.2] font-bold uppercase whitespace-nowrap mt-4 font-[Rustea]">
            To infinity &amp; beyond To infinity &amp; beyond
          </h1>
        </div>

        {/* Age Check */}
        <div className="absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[4000] w-full text-lg font-bold text-center paragraph">
          <div className="paragraph-text ">
            <h2 className="mb-4 text-2xl mt-4">ARE YOU OVER 21 YEARS OLD?</h2>
            <div className="flex items-center justify-center gap-4  w-full ">
              <Link href="/products">
                <ButtonL>HELL YEAH!</ButtonL>
              </Link>
              <ButtonR>NO, I WISH</ButtonR>
            </div>
          </div>
        </div>

        {/* Rocks */}
        <div className="relative z-[2000] rocks">
          <Image
            src="/assets/home-rocks.png.webp"
            alt="Rocks"
            width={750}
            height={750}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
        </div>

        {/* Cloud */}
        <div className="relative z-[300] cloud">
          <Image
            src="/assets/home-cloud-2.png.webp"
            alt="Cloud"
            width={750}
            height={750}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
        </div>

        {/* Orange Rocks */}
        <div className="relative z-[300] oragne-rocks">
          <Image
            src="/assets/home-page-orange-rocks.png.webp"
            alt="Rocks"
            width={750}
            height={750}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
        </div>
      </main>
    </section>
  );
};
