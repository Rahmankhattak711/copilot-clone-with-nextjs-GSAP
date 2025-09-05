"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import "./MainHeader.css";
import Link from "next/link";

export default function MainHeader() {
  useEffect(() => {
    const scrambles: NodeListOf<HTMLElement> =
      document.querySelectorAll(".scramble");

    const cleanups: (() => void)[] = [];

    scrambles.forEach((scramble) => {
      const letters: NodeListOf<HTMLElement> =
        scramble.querySelectorAll("span");

      const handleEnter = () => {
        gsap.to(letters, {
          y: -10,
          rotation: 15,
          opacity: 0.2,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.05,
        });
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
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
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

  return (
    <div className="mainH flex items-center justify-center relative">
      <div className="console w-full h-20 px-20 rounded-md flex py-8 items-center justify-between">
        {/* TAKE OFF */}
        <Link href="/takeofforange">
          <div className="scramble flex gap-1 uppercase text-base cursor-pointer">
            <div>
              <span>T</span>
              <span>A</span>
              <span>K</span>
              <span>E</span>
            </div>
            <div>
              <span>O</span>
              <span>F</span>
              <span>F</span>
            </div>
          </div>
        </Link>

        {/* TOUCH DOWN */}
        <Link href="/takeoffpurple">
          <div className="scramble flex gap-1 uppercase text-base cursor-pointer">
            <div>
              <span>T</span>
              <span>O</span>
              <span>U</span>
              <span>C</span>
              <span>H</span>
            </div>
            <div>
              <span>D</span>
              <span>O</span>
              <span>W</span>
              <span>N</span>
            </div>
          </div>
        </Link>

        {/* HIGH POINT */}
        <Link href="/highpoint">
          <div className="scramble flex gap-1 uppercase text-base cursor-pointer">
            <div>
              <span>H</span>
              <span>I</span>
              <span>G</span>
              <span>H</span>
            </div>
            <div>
              <span>P</span>
              <span>O</span>
              <span>I</span>
              <span>N</span>
              <span>T</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
