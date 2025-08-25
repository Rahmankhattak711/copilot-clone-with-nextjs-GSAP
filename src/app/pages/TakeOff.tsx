"use client";
import Image from "next/image";
import React from "react";

export default function TakeOff() {
  return (
    <section>
      <div className="relative w-[350px] h-[350px]">
        <Image
          src="/assets/planet-green-hybrid.png.webp"
          alt="Planet Background"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>
    </section>
  );
}
