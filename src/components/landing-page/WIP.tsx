"use client";

import TypographyH1 from "../typography/TypographyH1";
import TypographyLead from "../typography/TypographyLead";
import FadeMoveUp from "@/lib/FadeMoveUp";

export default function WIP() {
  return (
    <div id="WIP" className="flex flex-col gap-8">
      <div className="w-full py-20">
        <div className="flex flex-col gap-6 w-full h-full items-center justify-center text-center">
          <FadeMoveUp>
            <TypographyH1>
              Diese Seite wird Aktuell noch überarbeitet
            </TypographyH1>
          </FadeMoveUp>
          <FadeMoveUp delay={100}>
            <TypographyLead>
              Wir arbeiten daran, Ihnen bald ein verbessertes Nutzererlebnis zu
              bieten. Vielen Dank für Ihre Geduld! Bei Fragen oder Anregungen
              erreichen Sie uns jederzeit über unsere Kontaktmöglichkeiten.
            </TypographyLead>
          </FadeMoveUp>
        </div>
      </div>
    </div>
  );
}
