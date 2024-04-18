"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { HomeIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import BookingDialog from "../dialogs/BookingDialog";
import Chip from "../other/Chip";
import TypographyH1 from "../typography/TypographyH1";
import TypographyLead from "../typography/TypographyLead";

export default function Hero() {
  return (
    <div className="flex items-center justify-between pt-20">
      <div className="flex flex-col md:w-1/2 gap-6">
        <Fade triggerOnce delay={200}>
          <Chip>
            <HomeIcon size={12} />
            Neue Website
          </Chip>
        </Fade>
        <FadeMoveUp>
          <TypographyH1 className="hypens-manual">
            Reichweite, die Kunden bringt.
          </TypographyH1>
        </FadeMoveUp>
        <FadeMoveUp delay={100}>
          <TypographyLead>
            Deine Sichtbarkeit auf Social Media wird durch unsere Zusammenarbeit
            wachsen. Das nutzen wir und gewinnen Neukunden für Dich.
          </TypographyLead>
        </FadeMoveUp>
        <div className="flex gap-4">
          <FadeMoveUp delay={200}>
            <BookingDialog size={"lg"} />
          </FadeMoveUp>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Fade triggerOnce duration={2000}>
          <img src="/fox_white.svg" className="hidden dark:flex w-72" />
          <img src="/fox_dark.svg" className="dark:hidden w-72" />
        </Fade>
      </div>
    </div>
  );
}
