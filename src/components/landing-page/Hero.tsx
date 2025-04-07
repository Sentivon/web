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
              Egal ob automatisch mehr Bewertungen oder ein komplettes, digitales Empfehlungsprogramm.</TypographyLead>
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
      <FadeMoveUp>
        <div className="flex items-center justify-center">
          <div className="py-12 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/ZxlZgsOQUEc?si=kWxAZOdHIxXJbdAb"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full "
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </FadeMoveUp>
    </div>
  );
}
