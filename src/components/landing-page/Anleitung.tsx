"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import TypographyH1 from "../typography/TypographyH1";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyMuted from "../typography/TypographyMuted";
import BookingDialog from "../dialogs/BookingDialog";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH3 from "../typography/TypographyH3";

export default function Anleitung() {
  return (
    <div id="so-funktionierts" className="flex flex-col gap-8">
      <div className="flex flex-col">
        <FadeMoveUp>
          <div className="flex items-center gap-2">
            <TypographyH2>
              So funktioniert die Zusammenarbeit
            </TypographyH2>
          </div>
        </FadeMoveUp>
        <FadeMoveUp delay={200}>
          <TypographyLead>
            ... damit Du mit Deinem eigener Empfehlungssoftware systematisch und langfristig Neukunden gewinnst.
          </TypographyLead>
        </FadeMoveUp>
      </div>
      <div className="flex gap-8">
        <Fade triggerOnce delay={100}>
          <div className="w-1 min-h-full bg-secondary" />
        </Fade>
        <div className="flex flex-col gap-16">
          <FadeMoveUp>
            <div className="flex flex-col gap-6">
              <TypographyH3>1 - Voraussetzungen</TypographyH3>
              <TypographyLead>
                Du brauchst einen gewissen Kundenstamm und Kontakte, mit denen Du regelmäßig in Kontakt stehst, die prinzipiell von Deiner Dienstleistung überzeugt sind und Dich mit dem, was Du machst, weiterempfehlen würden.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>2 - Termin mit dem Videografen</TypographyH3>
              <TypographyLead>
                Essenzieller Bestandteil der Plattform ist Dein persönliches Video, das Deine Mandanten und Kontakte dann teilen können. Darin übernimmst Du selbst den Teil, der erfahrungsgemäß am schwersten fällt: Dich und Deine Dienstleistung vorstellen, Mehrwert erzeugen und Interesse wecken.
                <br /><br />
                Dazu bekommst Du von mir einen Leitfaden an die Hand, auf was Du alles achten solltest. Du entscheidest, ob Du auf einen Videografen aus meinen Kontakten zurückgreifen möchtest oder Dir selbst einen suchst.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>3 - Onboarding</TypographyH3>
              <TypographyLead>
                Parallel zu Deinem Video wird Dein exklusiver Zugang für die Empfehlungsplattform eingerichtet. Das Video ist erfahrungsgemäß der letzte Teil, der eingesetzt wird, bevor Du den Zugang überreicht bekommst. Ich gebe Dir in einem kurzen Video nochmal einen Schnelldurchlauf, wo Du was findest.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>4 - Empfehlungen, Empfehlungen, Empfehlungen</TypographyH3>
              <TypographyLead>
                Danach können sich Deine Mandanten mit Dir verknüpfen und Dich fleißig empfehlen. Du und Deine Mandanten sehen direkt aktuelle Zahlen und wissen, wie weit sie noch vom nächsten Meilenstein entfernt sind.
              </TypographyLead>
            </div>
          </FadeMoveUp>
        </div>
      </div>
      <div className="flex w-full">
        <FadeMoveUp>
          <BookingDialog size={"lg"}>
            Jetzt Zusammenarbeit anfragen <ArrowUpRight size={16} />
          </BookingDialog>
        </FadeMoveUp>
      </div>
    </div>
  );
}
