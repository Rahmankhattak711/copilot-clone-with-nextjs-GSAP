"use client";
import "@/app/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import CardL from "../../components/CardL";
import CardR from "../../components/CardR";
import Heading from "../../components/Heading";

export default function TakeOrangeScreen() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".astro--container", {
        y: -10000,
        rotate: 360,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 40%",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        })
        .to(".textAni", { y: -80, opacity: 1 }, 0)
        .to(".box img", { y: -150 }, 0.2);

      gsap.to(".box", {
        y: -28,
        x: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

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
            scrub: 1.2,
          },
        }
      );

      gsap.utils.toArray([".cardOne", ".cardTwo"]).forEach((card: any) => {
        gsap.to(card, {
          y: 0,
          opacity: 90,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1.2,
          },
        });
      });

      const boxEnter = () =>
        gsap.to(".box img", { scale: 1.08, duration: 0.6, ease: "power2.out" });
      const boxLeave = () =>
        gsap.to(".box img", { scale: 1, duration: 0.6, ease: "power2.out" });

      const boxElement = document.querySelector(".box img");
      boxElement?.addEventListener("mouseenter", boxEnter);
      boxElement?.addEventListener("mouseleave", boxLeave);

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) * 0.02;
        const y = (e.clientY - window.innerHeight / 2) * 0.02;
        gsap.to(".cloudOne img, .cloudTwo img", {
          x,
          y,
          duration: 1.5,
          ease: "sine.out",
        });
      };
      document.addEventListener("mousemove", handleMouseMove);

      gsap.to(".floor-img", {
        // scale: 1.2,
        height: "100vh",
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        boxElement?.removeEventListener("mouseenter", boxEnter);
        boxElement?.removeEventListener("mouseleave", boxLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="w-full h-[1300px] bg-[#3E1330] relative">
      <div className="w-full h-screen relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute right-90 z-20 -top-72">
          <Image
            src="/orange/big-spaceship.png.webp"
            alt="planet"
            width={1000}
            height={1000}
            className="w-[550px]"
          />
        </div>

        <div className="textAni w-[70%] flex items-center justify-center flex-col absolute top-44 z-30">
          <Heading
            title="TAKE OFF"
            textColor="text-[#F28C51]"
            percengate="21%"
            distance="5g"
          />

          <div className="scrollPara relative mt-20 max-w-2xl overflow-hidden mb-16">
            <p className="font-[Rustea] text-5xl relative">
              MIND AND BODY <br /> TENSION RELEASE <br /> INCREASED ENERGY
            </p>
          </div>

          <div className="cardWrapper flex gap-56 w-full">
            <div className="cardOne rounded-md flex-1 opacity-0 h-[420px] text-left">
              <CardR
                cardInnerBgColor="bg-[rgba(142,140,81,0.5)]"
                borderTop="border-t-[#F28C51]"
                borderRight="border-r-[#F28C51]"
                borderBottom="border-b-[#F28C51]"
                borderLeft="border-l-[#F28C51]"
                cardBgColor="bg-[#F28C51]"
                title="Blue Dream"
                paragraphs={[
                  `The indicia that brings you down gently, like a feathered touchdown from cloud nine.`,
                  `Whether you're looking to unwind, decompress, or just take a breather, this bud's got your back...and your couch.`,
                ]}
              />
            </div>
            <div className="cardTwo rounded-md flex-1 mt-28 h-auto text-left">
              <CardL
                borderTop="border-t-[#F28C51]"
                borderRight="border-r-[#F28C51]"
                borderBottom="border-b-[#F28C51]"
                borderLeft="border-l-[#F28C51]"
                cardBgColor="bg-[rgba(142,140,81,0.5)]"
                cardTextColor="text-[#F28C51]"
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

        <div className="boxbottle z-30 box">
          <Image
            src="/orange/sativa-product.png.webp"
            alt="bottle"
            width={1000}
            height={1000}
            className="w-[180px] object-contain"
          />
        </div>

        <div>
          <div className="astro-sprite flex items-center justify-center">
            <Image
              src="/orange/astronaut.png.webp"
              alt="astronaut"
              width={1000}
              height={1000}
              className="w-[80px] z-20 fixed right-[33rem] -bottom-0"
            />
          </div>
          <div className="astro-sprite flex items-center justify-center">
            <Image
              src="/orange/planet-floor-version-2.png.webp"
              alt="planet floor"
              width={1000}
              height={1000}
              className="w-full z-10 fixed -bottom-44 floor-img"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-full">
        {[0, 1, 2, 3, 4, 5, 6].map((n, i) => (
          <div key={n} className="cloudTwo w-full">
            <Image
              src={`/orange/${n}.png.webp`}
              alt="cloud"
              width={1000}
              height={1000}
              className={`w-full object-contain absolute ${
                i === 0
                  ? "bottom-44 z-6 opacity-20"
                  : `-top-${8 + i * 2} z-${6 - i} opacity-20`
              } left-0`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
