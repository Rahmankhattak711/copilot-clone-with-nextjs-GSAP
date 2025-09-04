import React from "react";
import "./CardL.css";

type Spec = {
  label: string;
  value: string | number;
};

type CardLProps = {
  heading: string;
  specs: Spec[];
  cardBgColor: string;
  cardTextColor: string;
  borderTop: string;
  borderRight: string;
  borderBottom: string;
  borderLeft: string;
};

export default function CardL({
  heading,
  specs,
  cardBgColor,
  cardTextColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
}: CardLProps) {
  return (
    <div className="fookin-a-box font" >
      <div className={`mb ${cardBgColor}`}></div>

      <div className="innerPolygon"></div>

      <h2
        className={`heading-clip-mirrored border-[1px] ${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`}
      >
        {heading}
      </h2>

      <div className="clip-shape-mirrored">
        <ul className="flex flex-col gap-2 py-5">
          {specs.map((item, index) => (
            <li key={index} className="flex items-center gap-14">
              <div className="w-1/2">
                <div className={`${cardTextColor}`}>{item.label}:</div>
              </div>
              <div className="w-1/2 text-white">
                <div>{item.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
