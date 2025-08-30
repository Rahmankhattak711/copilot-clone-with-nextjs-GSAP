"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HighPointScreen() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".astro",
          start: "bottom 100%",
          end: "top top",
          scrub: 2,
          markers: true,
        },
      })
      .to(".astro img", {
        y: -1200,
        duration: 100,
        ease: "power1.out",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "bottom 90%",
          end: "top top",
          scrub: 2,
          markers: false,
        },
      })
      .to(".box img", {
        y: -400,
        ease: "power1.out",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".textAni",
          start: "bottom 100%",
          end: "bottom top",
          scrub: 2,
          markers: false,
        },
      })
      .to(".box img", {
        y: -400,
        ease: "power1.out",
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

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (boxElement) {
        boxElement.removeEventListener("mouseenter", boxHandleMouseEnter);
        boxElement.removeEventListener("mouseleave", boxHandleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full h-[1000px] bg-[#124136] relative">
      <div className="w-full h-screen bg-[#124136] relative flex flex-col items-center justify-center text-center px-4">
        {/* top images */}
        <div>
          {/* top left cloud */}
          <div className="absolute left-0 -top-20">
            <Image
              src="/highPoint/cloud-top-left.png.webp"
              alt="product"
              width={1000}
              height={1000}
              className="w-[120px] object-contain"
            />
          </div>

          {/* planet green */}
          <div className="absolute right-56 -top-72">
            <Image
              src="/highPoint/planet-background.png.webp"
              alt="product"
              width={1000}
              height={1000}
              className="w-[450px] object-contain"
            />
          </div>

          {/* spaceship */}
          <div className="absolute right-56 -top-20">
            <Image
              src="/highPoint/spaceship.png.webp"
              alt="product"
              width={1000}
              height={1000}
              className="w-[200px] object-contain"
            />
          </div>
        </div>

        {/* text */}
        <div className="textAni w-[70%] flex items-center justify-center flex-col absolute top-44 z-7">
          <div className="w-[90%] -mb-8 flex justify-between text-white">
            <h2 className="font-bold text-2xl font-[Rustea]">18THC</h2>
            <h2 className="font-bold text-2xl font-[Rustea]">5g</h2>
          </div>
          <h1 className="text-[9rem] text-[#A7DB8D] font-bold uppercase whitespace-nowrap font-[Rustea]">
            HIGH POINT
          </h1>
        </div>

        {/* bottle */}
        <div className="boxbottle z-20 box">
          <Image
            src="/assets/hybrid-product.png.webp"
            alt="product"
            width={1000}
            height={1000}
            className="w-[180px] object-contain"
          />
        </div>

        {/* astronaut */}
        <div className="astro h-auto absolute z-20 right-[45%] top-96">
          <Image
            src="/highPoint/astronaut.png.webp"
            alt="product"
            width={100}
            height={100}
            className="h-auto object-contain"
          />
        </div>
      </div>

      {/* planet floor */}
      <div className="z-[1000]">
        <Image
          src="/highPoint/planet-floor.png.webp"
          alt="product"
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </div>

      {/* clouds */}
      <div className="fixed bottom-0 left-0 w-full h-full">
        <div className="cloudOne w-full">
          <Image
            src="/assets/0.png.webp"
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-5 object-contain absolute bottom-0 opacity-20 left-0"
          />
        </div>
        <div className="cloudTwo w-full">
          <Image
            src="/assets/1.png.webp"
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-4 object-contain absolute bottom-0 opacity-10 left-0"
          />
        </div>
        <div className="cloudThree w-full">
          <Image
            src="/assets/2.png.webp"
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-3 object-contain absolute bottom-0 opacity-20 left-0"
          />
        </div>
        <div className="cloudFour w-full">
          <Image
            src="/assets/3.png.webp"
            alt="Clouds"
            width={1000}
            height={1000}
            className="w-full z-2 object-contain absolute bottom-0 opacity-10 left-0"
          />
        </div>
      </div>
    </section>
  );
}
