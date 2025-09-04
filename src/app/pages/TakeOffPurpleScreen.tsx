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

export function TakeOffPurpleScreen() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".astro--container",
            start: "top 10%",
            end: "bottom 90%",
            scrub: 2,
          },
        })
        .to(".astro--container", {
          y: -400,
          rotate: 60,
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      tl.to(".textAni", { y: -80, opacity: 1 }, 0).to(
        ".box img",
        { y: -150 },
        0.2
      );

      ["cloudOne", "cloudTwo"].forEach((cloud) => {
        gsap.to(`.${cloud} img`, {
          y: -10,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      gsap.to(".box", {
        y: -28,
        x: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".scrollPara p",
        { y: "1000px", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scrollPara",
            start: "top 85%",
            end: "bottom 60%",
            scrub: 2,
          },
        }
      );

      animateCards();

      const boxEnter = () =>
        gsap.to(".box img", { scale: 1.08, duration: 0.6, ease: "power2.out" });
      const boxLeave = () =>
        gsap.to(".box img", { scale: 1, duration: 0.6, ease: "power2.out" });

      const boxElement = document.querySelector(".box img");
      boxElement?.addEventListener("mouseenter", boxEnter);
      boxElement?.addEventListener("mouseleave", boxLeave);

      document.addEventListener("mousemove", handleMouseMove);

      animateFloor();

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        boxElement?.removeEventListener("mouseenter", boxEnter);
        boxElement?.removeEventListener("mouseleave", boxLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="w-full h-[1200px] bg-[#0A1233] relative">
      <div className="w-full h-screen bg-[#0A1233] relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute right-20 -top-66">
          <Image
            src="/purple/planet-background-blue.png.webp"
            alt="planet"
            width={1000}
            height={1000}
            className="w-[550px] object-contain"
          />
        </div>

        <div className="textAni w-[70%] flex items-center justify-center flex-col absolute top-44 z-7">
          <Heading title="TOUCH DOWN" percengate="25%" distance="5g" />
          <div className="scrollPara relative mt-20 max-w-2xl overflow-hidden mb-16">
            <p className="font-[Rustea] text-5xl relative">
              A COSMIC CALM IN <br /> EVERY WAY
            </p>
          </div>
          <div className="cardWrapper flex items-center justify-center gap-56 ">
            <div className="cardOne rounded-md px-4 flex-1 h-[380px] text-left ">
              <CardR
                cardBgColor="bg-[#83EFFF]"
                borderTop="border-t-[#83EFFF]"
                borderRight="border-r-[#83EFFF]"
                borderBottom="border-b-[#83EFFF]"
                borderLeft="border-l-[#83EFFF]"
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
            <div className="cardTwo rounded-md flex-1 mt-28 h-[380px] text-left">
              <CardL
                cardBgColor="bg-[#83EFFF]"
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

        <div className="boxbottle z-20 box">
          <Image
            src="/purple/indica-product.png.webp"
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
