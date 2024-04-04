"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import TypographyH1 from "../typography/TypographyH1";
import TypographyH3 from "../typography/TypographyH3";
import TypographyLead from "../typography/TypographyLead";

export default function Anleitung() {
  return (
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
              <TypographyH1>1. klares Framework</TypographyH1>
              <TypographyLead>
                Du bekommst von mir einen genauen und erprobten Bauplan, wie wir
                Deinen Content auf Social Media gestalten.
              </TypographyLead>
              <TypographyLead>
                Keine Sorge, ich arbeite nicht wie am Fließband. Das Ziel ist,
                dass Du online durch deinen USP und individuelle, spannende
                Geschichten herausstichst!
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>2. Content-Plan</TypographyH1>
              <TypographyLead>
                Im Hintergrund wird parallel die Struktur für Deinen
                Content-Plan eingerichtet. Dazu zählt der Aufbau, aber auch
                Funktionstests für Automatismen, die uns beiden die
                Zusammenarbeit erleichtern.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>3. Onboarding Termin</TypographyH1>
              <TypographyLead>
                Bis zum eigentlichen Onboarding-Termin sind meine internen
                Prozesse abgeschlossen und Du konntest Dir das Framework
                anschauen. Jetzt bekommst Du nochmal eine genaue Einweisung und
                wir können direkte Fragen besprechen.
              </TypographyLead>
              <TypographyLead>
                Damit kannst du anschließend direkt mit der Planung und
                Produktion beginnen.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>4. Planung und Erstellung</TypographyH1>
              <TypographyLead>
                Bei der Planung wird Dein Content-Plan in Trello gefüllt und Du
                bist anschließend bereit für eine reibungslose Produktion.
              </TypographyLead>
              <TypographyLead>
                Jetzt kommt der wichtigste Part: Du nimmst Deinen Content auf!
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>5. Bearbeitung und Veröffentlichung</TypographyH1>
              <TypographyLead>
                Nachdem Du mir Deinen Content zur Verfügung gestellt hast,
                beginne ich mit der Bearbeitung - der Hauptteil meiner Arbeit.
              </TypographyLead>
              <TypographyLead>
                Anschließend ist das Video bereit veröffentlicht zu werden und
                Deine Sichtbarkeit wird wachsen.
              </TypographyLead>
            </div>
          </FadeMoveUp>
        </div>
      </div>
    </div>
  );
}
