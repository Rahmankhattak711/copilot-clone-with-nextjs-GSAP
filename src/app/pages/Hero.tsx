"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ButtonL from "../components/ButtonL";
import ButtonR from "../components/ButtonR";

export const Hero = () => {
  useEffect(() => {
    // === Scramble hover effect ===
    const scrambles: NodeListOf<HTMLElement> =
      document.querySelectorAll(".scramble");

    const cleanups: (() => void)[] = [];

    scrambles.forEach((scramble) => {
      const letters: NodeListOf<HTMLElement> =
        scramble.querySelectorAll("span");

      const handleEnter = () => {
        gsap.fromTo(
          letters,
          { y: 0, rotation: 0, opacity: 1 },
          {
            y: -10,
            rotation: 15,
            opacity: 0.2,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.05,
          }
        );
        gsap.to(letters, {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.3,
          ease: "power2.in",
          stagger: 0.05,
        });
      };

      const handleLeave = () => {
        gsap.to(letters, {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05,
        });
      };

      scramble.addEventListener("mouseenter", handleEnter);
      scramble.addEventListener("mouseleave", handleLeave);

      cleanups.push(() => {
        scramble.removeEventListener("mouseenter", handleEnter);
        scramble.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    // === Planet rotation ===
    const planetTween = gsap.to(".planet-yellow", {
      rotate: -360,
      duration: 100,
      ease: "none",
      repeat: -1,
    });

    // === Yellow dots rotation ===
    const dotsTween = gsap.to(".yellow-dots img", {
      rotate: -360,
      duration: 400,
      ease: "none",
      repeat: -1,
    });

    // === Infinite scrolling text ===
    const textTween = gsap.to(".main-text h1", {
      xPercent: -100,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    // === Mouse parallax ===
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(".rocks img", {
        x: x * 0.01,
        y: y * 0.01,
        duration: 0.5,
      });

      gsap.to(".cloud img", {
        x: x * 0.03,
        y: y * 0.03,
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      planetTween.kill();
      dotsTween.kill();
      textTween.kill();
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative text-white bg-gradient-to-tr from-[#ca1637] to-[#780c2d] overflow-hidden font-[Rustea] text-center">
      {/* Main Content */}
      <main className="relative w-full text-center">
        {/* Planet Background */}
        <div className="absolute top-20 left-0 flex justify-center w-full pt-10 z-[100] planet-bg will-change-transform">
          <Image
            src="/assets/home-planet-bg.png.webp"
            alt="Planet Background"
            width={750}
            height={750}
            className="w-[350px] object-contain"
          />
          <div className="absolute top-6 left-0 flex items-center justify-center w-full h-full z-[200] planet-yellow will-change-transform">
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
            alt="Stars"
            width={750}
            height={750}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Stars"
            width={750}
            height={750}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full object-contain dotOne"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Stars"
            width={750}
            height={750}
            className="absolute top-0 left-[40%] -translate-x-1/2 w-full object-contain dotTwo"
          />
          <Image
            src="/assets/stars.png.webp"
            alt="Stars"
            width={750}
            height={750}
            className="absolute top-[10px] left-[30%] -translate-x-1/2 w-full object-contain dotThree"
          />
        </div>

        {/* Yellow Dots */}
        <div className="relative z-0 yellow-dots will-change-transform">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500] w-full main-text will-change-transform">
          <h1 className="text-[14rem] leading-[1.2] font-bold uppercase whitespace-nowrap mt-4 font-[Rustea]">
            To infinity &amp; beyond To infinity &amp; beyond
          </h1>
        </div>

        {/* Age Check */}
        <div className="absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[4000] w-full text-lg font-bold text-center paragraph">
          <div className="paragraph-text">
            <h2 className="mb-4 text-2xl mt-4">ARE YOU OVER 21 YEARS OLD?</h2>
            <div className="flex items-center justify-center gap-4 w-full">
              <Link href="/mypage">
                <ButtonL className="scramble fontM flex gap-1 uppercase text-base cursor-pointer">
                  <div>
                    <span>H</span>
                    <span>E</span>
                    <span>L</span>
                    <span>L</span>
                  </div>
                  <div>
                    <span>Y</span>
                    <span>E</span>
                    <span>A</span>
                    <span>H</span>
                    <span>!</span>
                  </div>
                </ButtonL>
              </Link>
              <ButtonR className="scramble fontM flex gap-1 uppercase text-base cursor-pointer">
                <div>
                  <span>N</span>
                  <span>O</span>
                  <span>,</span>
                </div>
                <div>
                  <span>I</span>
                </div>
                <div>
                  <span>W</span>
                  <span>I</span>
                  <span>S</span>
                  <span>H</span>
                </div>
              </ButtonR>
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
            alt="Orange Rocks"
            width={750}
            height={750}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-contain"
          />
        </div>
      </main>
    </section>
  );
};
