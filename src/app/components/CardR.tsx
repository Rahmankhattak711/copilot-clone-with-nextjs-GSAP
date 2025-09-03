"use client";
import React from "react";
import "./CardR.css";

type CardRProps = {
  title: string;
  paragraphs: string[];
};

export default function CardR({ title, paragraphs }: CardRProps) {
  return (
    <div className="cardR">
      {/* Body */}
      <div className="cardRBody"></div>

      {/* Header */}
      <div className="cardRTop ">{title}</div>

      {/* Text Content */}
      <div className="cardRContent ">
        {paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </div>
  );
}
