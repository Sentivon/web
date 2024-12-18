"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDown, ArrowDownRight, ArrowUpRight, HomeIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import BookingDialog from "../dialogs/BookingDialog";
import Chip from "../other/Chip";
import TypographyH1 from "../typography/TypographyH1";
import TypographyLead from "../typography/TypographyLead";
import { Button } from "../ui/button";
import Navlink from "../Navlink";

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
            Mehr Bewertungen als Deine Konkurrenz und damit mehr Verkäufe.
          </TypographyH1>
        </FadeMoveUp>
        <FadeMoveUp delay={100}>
          <TypographyLead>
            Denn Du strahlst damit direkt mehr Vertrauen aus, wenn sich Interessenten über Dein Angebot informieren.</TypographyLead>
        </FadeMoveUp>
        <div className="flex gap-4 md:flex-row flex-col">
          <FadeMoveUp delay={200}>
            <BookingDialog size={"lg"}>
              Jetzt Zusammenarbeit anfragen <ArrowUpRight size={16} />
            </BookingDialog>
          </FadeMoveUp>
          <FadeMoveUp delay={300}>
            <Navlink
              href="/#so-funktionierts"
              content={<>So funktionierts <ArrowDown size={16} /></>}
              buttonProps={{ size: "lg", variant: "secondary" }}
            />
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
