import ButtonL from "./components/ButtonL";
import CardR from "./components/CardR";
import { Hero } from "./pages/Hero";
import HighPointScreen from "./pages/HighPointScreen";
import { TakeOffPurpleScreen } from "./pages/TakeOffPurpleScreen";
import { TakeOrangeScreen } from "./pages/TakeOrangeScreen";
import Products from "./products/page";


export default function page() {
  return (
    <div className="relative">
      <Products/>
      {/* <Hero /> */}
      {/* <HighPointScreen/> */}
      {/* <TakeOffPurpleScreen/> */}
      {/* <TakeOrangeScreen/> */}
    </div>
  );
}

