import Link from "next/link";
import React from "react";
import './MainHeader.css';

export default function MainHeader() {
  return (
    <div className="mainH flex items-center justify-center">
      <div className="w-full h-20 px-20 rounded-md flex py-8 items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="uppercase text-base font-[Rustea]">take off</h1>
          </Link>
        </div>
        <div>
          <Link href="/">
            <h1 className="uppercase text-base font-[Rustea]">touch down</h1>
          </Link>
        </div>
        <div>
          <Link href="/">
            <h1 className="uppercase text-base font-[Rustea]">high point</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
