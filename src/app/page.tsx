"use client";

import Chip from "@/components/other/Chip";
import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyH3 from "@/components/typography/TypographyH3";
import TypographyH4 from "@/components/typography/TypographyH4";
import StarRatings from "react-star-ratings";

import TypographyLead from "@/components/typography/TypographyLead";
import TypographyMuted from "@/components/typography/TypographyMuted";
import { Button } from "@/components/ui/button";
import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight, ArrowRight, Dot, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BookingDialog from "@/components/dialogs/BookingDialog";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-center justify-between pt-20">
        <div className="flex flex-col w-1/2 gap-6">
          <Fade triggerOnce delay={200}>
            <Chip>
              <HomeIcon size={12} />
              Neue Website
            </Chip>
          </Fade>
          <FadeMoveUp>
            <TypographyH1 children="Wir machen SIE sichtbar" />
          </FadeMoveUp>
          <FadeMoveUp delay={100}>
            <TypographyLead>
              Wir bieten effektive, kompetente und zielgerichtete Unterstützung
              bei der Entwicklung intelligenter Digitalstrategien.
            </TypographyLead>
          </FadeMoveUp>
          <div className="flex gap-4">
            <FadeMoveUp delay={200}>
              <BookingDialog size={"lg"} />
            </FadeMoveUp>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Fade triggerOnce duration={2000}>
            <img src="/fox_white.svg" className="hidden dark:flex w-72" />
            <img src="/fox_dark.svg" className="dark:hidden w-72" />
          </Fade>
        </div>
      </div>
      <Fade triggerOnce>
        <hr />
      </Fade>
      <div id="leistungen" className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <FadeMoveUp>
            <TypographyH3>Leistungen</TypographyH3>
            <ArrowDownRight />
          </FadeMoveUp>
        </div>
        <div className="grid w-full md:grid-cols-2 gap-6">
          <FadeMoveUp delay={100}>
            <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
              <TypographyH3>Social Media Management</TypographyH3>
              <TypographyMuted>
                Überlassen Sie uns das Social Media Management Ihrer Marke und
                erleben Sie einen organischen Anstieg Ihrer Online-Präsenz und
                Kundenbindung.
              </TypographyMuted>
            </div>
            <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
              <TypographyH3>Paid Ads / Organisches Wachstum</TypographyH3>
              <TypographyMuted>
                Entdecken Sie die Kraft von Meta Ads und bringen Sie Ihre
                Werbekampagnen auf Facebook, Instagram und Messenger auf die
                nächste Stufe!
              </TypographyMuted>
            </div>
          </FadeMoveUp>
        </div>
      </div>
      <Fade triggerOnce>
        <hr />
      </Fade>
      <div id="so-funktionierts" className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <FadeMoveUp>
            <TypographyH3>So funktionierts</TypographyH3>
            <ArrowDownRight />
          </FadeMoveUp>
        </div>
        <div className="flex gap-6">
          <Fade triggerOnce delay={100}>
            <div className="w-1 min-h-full bg-secondary" />
          </Fade>
          <div className="flex flex-col gap-20">
            <FadeMoveUp>
              <div className="flex flex-col gap-6">
                <TypographyH1>1. Lorem ipsum dolor</TypographyH1>
                <TypographyLead>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </TypographyLead>
                <div className="flex gap-4">
                  <BookingDialog size={"lg"} />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <TypographyH1>2. Lorem ipsum dolor</TypographyH1>
                <TypographyLead>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </TypographyLead>
              </div>
              <div className="flex flex-col gap-6">
                <TypographyH1>3. Lorem ipsum dolor</TypographyH1>
                <TypographyLead>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </TypographyLead>
              </div>
              <div className="flex flex-col gap-6">
                <TypographyH1>4. Lorem ipsum dolor</TypographyH1>
                <TypographyLead>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </TypographyLead>
              </div>
            </FadeMoveUp>
          </div>
        </div>
      </div>
      <Fade triggerOnce>
        <hr />
      </Fade>
      <div id="kundenmeinungen" className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <FadeMoveUp>
            <TypographyH3>Kundenmeinungen</TypographyH3>
            <ArrowDownRight />
          </FadeMoveUp>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FadeMoveUp>
            <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 bg-gray-800 rounded-full" />
                <TypographyH4>Max Mustermann</TypographyH4>
                <StarRatings
                  rating={5}
                  starRatedColor="yellow"
                  starDimension="30px"
                />
              </div>
              <hr />
              <div className="text-center">
                <TypographyMuted>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea"
                </TypographyMuted>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 bg-gray-800 rounded-full" />
                <TypographyH4>Max Mustermann</TypographyH4>
                <StarRatings
                  rating={5}
                  starRatedColor="yellow"
                  starDimension="30px"
                />
              </div>
              <hr />
              <div className="text-center">
                <TypographyMuted>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea"
                </TypographyMuted>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 border rounded-lg bg-background">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 bg-gray-800 rounded-full" />
                <TypographyH4>Max Mustermann</TypographyH4>
                <StarRatings
                  rating={5}
                  starRatedColor="yellow"
                  starDimension="30px"
                />
              </div>
              <hr />
              <div className="text-center">
                <TypographyMuted>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea"
                </TypographyMuted>
              </div>
            </div>
          </FadeMoveUp>
        </div>
      </div>
    </div>
  );
}
