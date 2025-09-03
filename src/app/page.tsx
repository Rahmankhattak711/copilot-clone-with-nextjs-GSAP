import React from "react";
import { Hero } from "./pages/Hero";
import HighPointScreen from "./pages/HighPointScreen";
import { TakeOffPurpleScreen } from "./pages/TakeOffPurpleScreen";
import CardR from "./components/CardR";
import MainHeader from "./components/MainHeader";
import CardL from "./components/CardL";
import Link from "next/link";
import Button from "./components/Button";
import { TakeOrangeScreen } from "./pages/TakeOrangeScreen";

export default function page() {
  return (
    <div className="relative">
      {/* <Hero /> */}
      <HighPointScreen/>
      {/* <TakeOffPurpleScreen/> */}
      {/* <TakeOrangeScreen/> */}
    </div>
  );
}
