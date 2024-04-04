import { Fade } from "react-awesome-reveal";
import Anleitung from "@/components/landing-page/Anleitung";
import Kundenmeinungen from "@/components/landing-page/Kundenmeinungen";
import Hero from "@/components/landing-page/Hero";
import Leistungen from "@/components/landing-page/Leistungen";
import Divider from "@/components/layout/Divider";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Divider />
      <Leistungen />
      <Divider />
      <Anleitung />
      <Divider />
      <Kundenmeinungen />
    </div>
  );
}
