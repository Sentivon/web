"use client";

import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyLead from "@/components/typography/TypographyLead";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl w-full">
      <div className="py-64 grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="hover:scale-105 rounded-full border border-muted py-1 px-4 w-fit flex gap-2 items-center transition">
              <AlertCircle size={12} />
              Neue Website
            </div>
            <TypographyH1 text="Marketing. Simpel. Erfolgreich." />
            <TypographyLead text="Ich habe starke Schmerzen" />
          </div>
          <div className="flex gap-6">
            <Button className="gap-2" size={"lg"}>
              Jetzt starten <ArrowRight size={16} />
            </Button>
            <Button variant={"outline"} className="gap-2" size={"lg"}>
              Jetzt starten <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/fox_dark.svg" className="dark:hidden w-96" />
          <img src="/fox_white.svg" className="dark:flex hidden w-96" />
        </div>
      </div>
    </main>
  );
}
