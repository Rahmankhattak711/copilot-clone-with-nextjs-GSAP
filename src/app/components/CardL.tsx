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

export default function CardL({
  heading = "Specification",
  specs = [],
}: CardLProps) {
  return (
    <div className="fookin-a-box">
      <div className="mb"></div>

      <div className="innerPolygon"></div>

      <h2 className="heading-clip-mirrored">{heading}</h2>

      <div className="clip-shape-mirrored">
        <ul className="flex flex-col gap-2 py-5">
          {specs.map((item, index) => (
            <li key={index} className="flex items-center gap-14">
              <span className="text-[#A7DB8D]">{item.label}:</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
