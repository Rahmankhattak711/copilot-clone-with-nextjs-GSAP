"use client";
import "@/app/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import CardL from "../components/CardL";
import CardR from "../components/CardR";
import { animateCards, animateFloor, handleMouseMove } from "../utils/animate";
import Heading from "../components/Heading";

export default function TakeOffPurpleScreen() {
  const rootRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      mainTl
        .to(".textAni", { y: -80, opacity: 1, ease: "power2.out" }, 0)
        .to(".box img", { y: -150, ease: "power2.out" }, 0.2);

      gsap.to(".astro--container", {
        y: -400,
        rotate: 60,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".astro--container",
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1.5,
        },
      });

      gsap.to(".cloudOne img, .cloudTwo img", {
        y: -15,
        ease: "sine.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(".box", {
        y: -28,
        x: -10,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".scrollPara p",
        { y: 800, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scrollPara",
            start: "top 80%",
            end: "bottom 65%",
            scrub: 1.2,
          },
        }
      );

      animateCards();
      animateFloor();

      const boxEnter = () =>
        gsap.to(boxRef.current, { scale: 1.08, duration: 0.5, ease: "power2.out" });
      const boxLeave = () =>
        gsap.to(boxRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });

      const boxElement = boxRef.current;
      if (boxElement) {
        boxElement.addEventListener("mouseenter", boxEnter);
        boxElement.addEventListener("mouseleave", boxLeave);
      }

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        if (boxElement) {
          boxElement.removeEventListener("mouseenter", boxEnter);
          boxElement.removeEventListener("mouseleave", boxLeave);
        }
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={rootRef} className="w-full h-[1200px] bg-[#0A1233] relative overflow-hidden">
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/purple/planet-background-blue.png.webp"
            alt="planet"
            width={550}
            height={550}
            className="absolute right-20 top-[-264px] w-[550px] object-contain"
          />
        </div>

        <div className="textAni w-full max-w-[70%] flex flex-col items-center absolute top-44 z-10">
          <Heading title="TOUCH DOWN" percengate="25%" distance="5g" />
          <div className="scrollPara mt-20 max-w-2xl mb-16">
            <p className="font-[Rustea] text-4xl md:text-5xl uppercase">
              A COSMIC CALM IN <br /> EVERY WAY
            </p>
          </div>
          <div className="cardWrapper flex items-center justify-center gap-72">
            <div className="cardOne flex-1 h-[380px] text-left">
              <CardR
                cardInnerBgColor="bg-[rgba(131,239,255,0.5)]"
                cardBgColor="bg-[#83EFFF]"
                borderTop="border-t-[#83EFFF]"
                borderRight="border-r-[#83EFFF]"
                borderBottom="border-b-[#83EFFF]"
                borderLeft="border-l-[#83EFFF]"
                title="Blue Dream"
                paragraphs={[
                  "The indica that brings you down gently, like a feathered touchdown from cloud nine.",
                  "Whether you're looking to unwind, decompress, or just take a breather, this bud's got your back...and your couch.",
                ]}
              />
            </div>
            <div className="cardTwo flex-1 h-[380px] mt-44 text-left">
              <CardL
                cardBgColor="bg-[rgba(131,239,255,0.5)]"
                cardTextColor="text-[#83EFFF]"
                borderTop="border-t-[#83EFFF]"
                borderRight="border-r-[#83EFFF]"
                borderBottom="border-b-[#83EFFF]"
                borderLeft="border-l-[#83EFFF]"
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

        <div className="box z-20">
          <Image
            ref={boxRef}
            src="/purple/indica-product.png.webp"
            alt="bottle"
            width={180}
            height={180}
            className="w-[180px] object-contain will-change-transform"
          />
        </div>

        <div className="astro--container fixed z-40 top-96 will-change-transform">
          <div className="astro-sprite flex items-center justify-center">
            <Image
              src="/purple/astronaut.png.webp"
              alt="astronaut"
              width={200}
              height={200}
              className="w-[200px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="planet-floor absolute left-0 bottom-0 w-full z-2">
        <Image
          src="/purple/planet-blue-half-indica.png.webp"
          alt="floor"
          width={3000}
          height={1000}
          className="floor-img object-contain will-change-transform"
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none">
        {["0.png.webp", "1.png.webp", "2.png.webp"].map((src, index) => (
          <div key={index} className={`cloud${["One", "Two", "Three"][index]} w-full`}>
            <Image
              src={`/purple/${src}`}
              alt="cloud"
              width={1000}
              height={1000}
              className={`w-full object-contain absolute bottom-0 opacity-${index % 2 === 0 ? "20" : "10"} z-${5 - index} will-change-transform`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
