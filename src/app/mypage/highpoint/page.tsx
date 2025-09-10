"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import CardL from "../../components/CardL";
import CardR from "../../components/CardR";
import Heading from "../../components/Heading";
import MainHeader from "@/app/components/MainHeader";

const useHighPointAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".astro", {
      y: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".astro",
        start: "top 100%",
        end: "bottom 10%",
        scrub: 20,
        markers: false,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".textAni", { y: -80, opacity: 1 }, 0).to(
      ".box img",
      { y: -150 },
      0.2
    );

    ["cloudOne", "cloudTwo", "cloudThree", "cloudFour"].forEach((cloud) => {
      gsap.to(`.${cloud} img`, {
        y: -10,
        scrollTrigger: {
          trigger: "section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
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
          scrub: true,
        },
      }
    );

    gsap.to(".cardOne, .cardTwo", {
      y: -300,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cardOne, .cardTwo",
        start: "top 100%",
        end: "bottom 100%",
        scrub: 10,
        markers: false,
      },
    });

    gsap.to(".floor-img", {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: "section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const boxElement = document.querySelector(".box img");
    const boxEnter = () =>
      gsap.to(".box img", { scale: 1.08, duration: 0.6, ease: "power2.out" });
    const boxLeave = () =>
      gsap.to(".box img", { scale: 1, duration: 0.6, ease: "power2.out" });

    if (boxElement) {
      boxElement.addEventListener("mouseenter", boxEnter);
      boxElement.addEventListener("mouseleave", boxLeave);
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
      if (boxElement) {
        boxElement.removeEventListener("mouseenter", boxEnter);
        boxElement.removeEventListener("mouseleave", boxLeave);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default function HighPointScreen() {
  useHighPointAnimations();

  return (
    <section className="w-full h-[1100px] bg-[#124136] relative overflow-hidden">
      <div className="w-full h-1/2 bg-[#124136] relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 -top-20">
            <Image
              src="/highPoint/cloud-top-left.png.webp"
              alt="cloud"
              width={120}
              height={120}
              className="w-[120px] object-contain"
              priority
            />
          </div>
          <div className="absolute right-56 -top-72">
            <Image
              src="/highPoint/planet-background.png.webp"
              alt="planet"
              width={450}
              height={450}
              className="w-[450px] object-contain"
              priority
            />
          </div>
          <div className="absolute right-56 -top-20">
            <Image
              src="/highPoint/spaceship.png.webp"
              alt="spaceship"
              width={200}
              height={200}
              className="w-[200px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="textAni w-[70%] flex items-center justify-center flex-col absolute top-44 z-7">
          <Heading
            title="High Point"
            textColor="text-[#A7DB8D]"
            percengate="18THC"
            distance="5g"
          />
          <div className="scrollPara relative max-w-2xl overflow-hidden mb-16">
            <p className="font-[Rustea] text-5xl uppercase">
              ride the wave of <br /> euphoria
            </p>
          </div>

          <div className="cardWrapper flex items-center justify-center flex-col md:flex-row gap-10 md:gap-72 mt-16 w-full">
            <div className="cardOne rounded-md flex-1 h-[420px] text-left">
              <CardR
                cardInnerBgColor="bg-[rgba(167,219,141,0.5)]"
                cardBgColor="bg-[#A7DB8D]"
                borderTop="border-t-[#A7DB8D]"
                borderRight="border-r-[#A7DB8D]"
                borderBottom="border-b-[#A7DB8D]"
                borderLeft="border-l-[#A7DB8D]"
                title="High Point"
                paragraphs={[
                  "Like a first-class upgrade for your mind and body. This hybrid cannabis blend will have you soaring without the turbulence.",
                  "Buckle up and get ready to reach new heights of relaxation and giggles. No in-flight meal required, just good vibes and a window seat to chill.",
                ]}
              />
            </div>

            <div className="cardTwo rounded-md flex-1 mt-10 md:mt-44 h-[420px] text-left">
              <CardL
                cardBgColor="bg-[rgba(167,219,141,0.5)]"
                borderTop="border-t-[#A7DB8D]"
                borderRight="border-r-[#A7DB8D]"
                borderBottom="border-b-[#A7DB8D]"
                borderLeft="border-l-[#A7DB8D]"
                cardTextColor="text-[#A7DB8D]"
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
            src="/assets/hybrid-product.png.webp"
            alt="bottle"
            width={180}
            height={180}
            className="w-[180px] object-contain"
            priority
          />
        </div>

        <div className="astro h-auto absolute z-20 right-[45%] top-96">
          <Image
            src="/highPoint/astronaut.png.webp"
            alt="astronaut"
            width={100}
            height={100}
            className="h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="z-4 w-full">
        <Image
          src="/highPoint/planet-floor.png.webp"
          alt="floor"
          width={1000}
          height={1000}
          className="planet-floor floor-img fixed bottom-0 left-0 w-full object-cover"
          priority
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none">
        <div className="cloudOne w-full">
          <Image
            src="/assets/0.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-5 object-contain absolute bottom-0 opacity-20 left-0"
          />
        </div>
        <div className="cloudTwo w-full">
          <Image
            src="/assets/1.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-4 object-contain absolute bottom-0 opacity-10 left-0"
          />
        </div>
        <div className="cloudThree w-full">
          <Image
            src="/assets/2.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-3 object-contain absolute bottom-0 opacity-20 left-0"
          />
        </div>
        <div className="cloudFour w-full">
          <Image
            src="/assets/3.png.webp"
            alt="cloud"
            width={1000}
            height={1000}
            className="w-full z-2 object-contain absolute bottom-0 opacity-10 left-0"
          />
        </div>
      </div>

       <div className="w-full flex items-center justify-center  fixed bottom-14 z-[100]">
        <div className="w-screen ">
          <MainHeader bgColor="after:bg-[#A7DB8D] before:bg-[#A7DB8D]" />
        </div>
      </div>
    </section>
  );
}
