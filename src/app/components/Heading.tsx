import React from "react";

interface headingProps {
  title: string;
  percengate: string;
  distance: string;
  textColor?: string;
}

export default function Heading({
  title,
  percengate,
  distance,
  textColor,
}: headingProps) {
  return (
    <div>
      <div className="w-full -mb-8 px-20 flex justify-between text-white">
        <h2 className="font-bold text-2xl font-[Rustea]">{percengate}</h2>
        <h2 className="font-bold text-2xl font-[Rustea]">{distance}</h2>
      </div>
      <h1
        className={`text-[9rem] text-[#83EFFF] ${textColor} font-bold uppercase whitespace-nowrap font-[Rustea]`}
      >
        {title}
      </h1>
    </div>
  );
}
