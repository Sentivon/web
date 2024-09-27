import { Fade } from "react-awesome-reveal";
import Anleitung from "@/components/landing-page/Anleitung";
import Kundenmeinungen from "@/components/landing-page/Kundenmeinungen";
import Hero from "@/components/landing-page/Hero";
import Leistungen from "@/components/landing-page/Leistungen";
import Divider from "@/components/layout/Divider";
import TypographyH1 from "@/components/typography/TypographyH1";
import WIP from "@/components/landing-page/WIP";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      {/* <Divider />
      <Leistungen />
      <Divider />
      <Anleitung />
      <Divider />
      <Kundenmeinungen /> */}
      <div className="my-32" />
      <Divider />
      <WIP />
    </div>
  );
}
