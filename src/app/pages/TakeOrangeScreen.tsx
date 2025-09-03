"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "@/app/globals.css";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import CardR from "../components/CardR";
import CardL from "../components/CardL";

export function TakeOrangeScreen() {
  const rootRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const ctx = gsap.context(() => {
  //     gsap.to(".astro--container", {
  //       y: -10000,
  //       rotate: 360,
  //       ease: "power2.inOut",
  //       scrollTrigger: {
  //         trigger: rootRef.current,
  //         start: "top 40%",
  //         end: "bottom top",
  //         scrub: 2,
  //       },
  //     });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: rootRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1.5,
  //       },
  //     });
  //     tl.to(".textAni", { y: -80, opacity: 1 }, 0).to(
  //       ".box img",
  //       { y: -150 },
  //       0.2
  //     );

  //     ["cloudOne", "cloudTwo"].forEach((cloud) => {
  //       gsap.to(`.${cloud} img`, {
  //         y: -10,
  //         scrollTrigger: {
  //           trigger: rootRef.current,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: 2,
  //         },
  //       });
  //     });

  //     gsap.to(".box", {
  //       y: -28,
  //       x: -10,
  //       duration: 3,
  //       ease: "sine.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //     });

  //     gsap.fromTo(
  //       ".scrollPara p",
  //       { y: "1000px", opacity: 0 },
  //       {
  //         y: "0%",
  //         opacity: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: ".scrollPara",
  //           start: "top 85%",
  //           end: "bottom 60%",
  //           scrub: 1.2,
  //         },
  //       }
  //     );

  //     gsap.utils.toArray([".cardOne", ".cardTwo"]).forEach((card: any, i) => {
  //       gsap.to(card, {
  //         y: 0,
  //         opacity: 90,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           end: "bottom 60%",
  //           scrub: 1.2,
  //           start: "top 90%",
  //         },
  //       });
  //     });

  //     const boxEnter = () =>
  //       gsap.to(".box img", { scale: 1.08, duration: 0.6, ease: "power2.out" });
  //     const boxLeave = () =>
  //       gsap.to(".box img", { scale: 1, duration: 0.6, ease: "power2.out" });

  //     const boxElement = document.querySelector(".box img");
  //     boxElement?.addEventListener("mouseenter", boxEnter);
  //     boxElement?.addEventListener("mouseleave", boxLeave);

  //     const handleMouseMove = (e: MouseEvent) => {
  //       const x = (e.clientX - window.innerWidth / 2) * 0.02;
  //       const y = (e.clientY - window.innerHeight / 2) * 0.02;
  //       gsap.to(".cloudOne img, .cloudTwo img", {
  //         x,
  //         y,
  //         duration: 1.5,
  //         ease: "sine.out",
  //       });
  //     };
  //     document.addEventListener("mousemove", handleMouseMove);

  //     gsap.to(".floor-img", {
  //       x: "-30%",
  //       scale: 1.2,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: rootRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     });

  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //       boxElement?.removeEventListener("mouseenter", boxEnter);
  //       boxElement?.removeEventListener("mouseleave", boxLeave);
  //     };
  //   }, rootRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section ref={rootRef} className="w-full h-[1200px] bg-[#3E1330] relative">
      <div className="w-full h-screen relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute right-90 -top-66">
          <Image
            src="/orange/big-spaceship.png.webp"
            alt="planet"
            width={1000}
            height={1000}
            className="w-[550px] object-contain"
          />
        </div>

        <div className="textAni w-[70%] flex items-center justify-center flex-col absolute top-44 z-7">
          <div className="w-[90%] -mb-8 flex justify-between text-white">
            <h2 className="font-bold text-2xl font-[Rustea]">21% THC</h2>
            <h2 className="font-bold text-2xl font-[Rustea]">5g</h2>
          </div>
          <h1 className="text-[12rem] text-[#F28C51] font-bold uppercase whitespace-nowrap font-[Rustea]">
            TAKE OFF
          </h1>
          <div className="scrollPara relative mt-20 max-w-2xl overflow-hidden mb-16">
            <p className="font-[Rustea] text-3xl relative">
              A COSMIC CALM IN <br /> EVERY WAY
            </p>
          </div>
          <div className="cardWrapper flex flex-col md:flex-row gap-10 mt-16 w-full">
            <div className="cardOne rounded-md flex-1 opacity-0 h-[420px] text-left backdrop-blur-lg px-4 py-8">
              <CardR
                title="Blue Dream"
                paragraphs={[
                  `The indicia that brings you down gently, like a feathered
                touchdown from cloud nine.`,
                  `Whether you're looking to unwind, decompress, or just take a
                breather, this bud's got your back...and your couch. Prepare for
                a smooth descent into tranquility, where the only turbulence is
                in your giggles.`,
                ]}
              />
            </div>
            <div className="cardTwo  rounded-md flex-1 mt-28 opacity-0 h-auto text-left backdrop-blur-lg px-4 py-8">
              <CardL
                heading="Specification"
                specs={[
                  { label: "Strain", value: "Blue Dream" },
                  { label: "Weight", value: "5g" },
                  { label: "Whole Flower", value: "1/8 oz" },
                  { label: "THC", value: "18%" },
                  { label: "CBD", value: "1%" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="boxbottle z-20 box">
          <Image
            src="/orange/sativa-product.png.webp"
            alt="bottle"
            width={1000}
            height={1000}
            className="w-[180px] object-contain"
          />
        </div>

        <div className="astro--container fixed z-40 top-96 overflow-hidden will-change-transform">
          <div className="astro-sprite flex items-center justify-center">
            <Image
              src="/purple/astronaut.png.webp"
              alt="astronaut"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="planet-floor z-2 absolute left-0 bottom-0 w-full overflow-hidden">
        <Image
          src="/purple/planet-blue-half-indica.png.webp"
          alt="floor"
          width={3000}
          height={1000}
          className="floor-img object-contain "
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-full">
        <div className="cloudOne w-full">
          <Image
            src="/purple/0.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-5 object-contain absolute bottom-0 opacity-20 left-0"
          />
        </div>
        <div className="cloudTwo w-full">
          <Image
            src="/purple/1.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-4 object-contain absolute bottom-0 opacity-10 left-0"
          />
        </div>

        <div className="cloudTwo w-full">
          <Image
            src="/purple/2.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-1 object-contain absolute bottom-0 left-0"
          />
        </div>
      </div>
    </section>
  );
}
