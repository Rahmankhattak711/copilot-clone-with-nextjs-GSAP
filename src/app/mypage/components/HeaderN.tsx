"use client";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const HeaderN: React.FC = () => {
  return (
    <header className="header uppercase absolute top-0 w-full flex items-center justify-center px-8 py-4 bg-transparent">
      <Link
        data-next-page="leave-to-home"
        aria-label="Go to home"
        href="/"
        className="absolute flex items-center gap-2 cursor-pointer z-[10000] top-6 left-10 text-white"
      >
        <FaLongArrowAltLeft /> Back Home
      </Link>
      <Link
        href="/"
        data-next-page="leave-to-home"
        aria-label="Go to home"
        className="cursor-pointer" // Removed pe-none
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="212.367"
          height="47.142"
          viewBox="0 0 212.367 47.142"
        >
          {/* SVG paths remain unchanged */}
        </svg>
      </Link>
      <Link
        href="/about"
        className="absolute flex items-center gap-2 cursor-pointer z-[100] top-6 right-10 text-white"
      >
        About
      </Link>
    </header>
  );
};
