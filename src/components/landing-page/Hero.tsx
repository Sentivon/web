"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDown, ArrowUpRight, HomeIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import BookingDialog from "../dialogs/BookingDialog";
import Chip from "../other/Chip";
import TypographyH1 from "../typography/TypographyH1";
import TypographyLead from "../typography/TypographyLead";
import YouTube from 'react-youtube';
import Navlink from "../Navlink";
import { useEffect, useState } from "react";

export default function Hero() {
  const videoOptions = {
    playerVars: {
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 content-center pt-20 gap-12">
      <div className="grid grid-cols-1 content-center gap-6">
        <div>
          <Fade triggerOnce delay={200}>
            <Chip>
              <HomeIcon size={12} />
              Neue Website
            </Chip>
          </Fade>
        </div>
        <div>
          <FadeMoveUp>
            <TypographyH1 className="hypens-manual">
              Deine Prozesse - digital und automatisiert.
            </TypographyH1>
          </FadeMoveUp>
          <FadeMoveUp delay={100}>
            <TypographyLead>
              Mehr Bewertungen, höhere Reichweite, gesteigertes Vertrauen – ohne zusätzlichen Aufwand für Dich.</TypographyLead>
          </FadeMoveUp>
        </div>
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
      <div className="flex items-center justify-center">
        <Fade triggerOnce duration={2000}>
          <div className="py-12">
            <YouTube videoId="ZxlZgsOQUEc" opts={videoOptions} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
