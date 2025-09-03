import React from "react";
import "./CardL.css";

type Spec = {
  label: string;
  value: string | number;
};

type CardLProps = {
  heading: string;
  specs: Spec[];
};

export default function CardL({ heading = "Specification", specs = [] }: CardLProps) {
  return (
    <div className="fookin-a-box font-[Rustea]">
      <div className="mb"></div>

      <h2 className="heading-clip-mirrored uppercase text-xl tracking-wider px-2 py-5">
        {heading}
      </h2>

      <div className="clip-shape-mirrored">
        <ul className="flex flex-col gap-4">
          {specs.map((item, index) => (
            <li key={index} className="flex items-center gap-10">
              <span className="text-[#A7DB8D]">{item.label}:</span>{" "}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
