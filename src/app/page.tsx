import Anleitung from "@/components/landing-page/Anleitung";
import Hero from "@/components/landing-page/Hero";
import Divider from "@/components/layout/Divider";
import Reputationsmanagement from "@/components/landing-page/Reputationsmanagement";
import WarumBewertungen from "@/components/landing-page/WarumBewertungen";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Divider />
      <Reputationsmanagement />
      <Divider />
      <WarumBewertungen />
      <Divider />
      <Anleitung />
    </div>
  );
}
