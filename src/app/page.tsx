import Anleitung from "@/components/landing-page/Anleitung";
import Hero from "@/components/landing-page/Hero";
import Divider from "@/components/layout/Divider";
import Empfehlungssoftware from "@/components/landing-page/Empfehlungssoftware";
import UnterschiedEmpfehlungen from "@/components/landing-page/UnterschiedEmpfehlungen";
import WarumEmpfehlungen from "@/components/landing-page/WarumEmpfehlungen";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Divider />
      <Empfehlungssoftware />
      <Divider />
      <WarumEmpfehlungen />
      <Divider />
      <UnterschiedEmpfehlungen />
      <Divider />
      <Anleitung />
    </div>
  );
}
