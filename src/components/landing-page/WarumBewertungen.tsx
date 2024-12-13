"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyLink from "../typography/TypographyLink";

export default function WarumBewertungen() {
    return (
        <div id="kundenmeinungen" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <FadeMoveUp>
                    <div className="flex items-center gap-2">
                        <TypographyH2>
                            Warum kümmerst du dich noch nicht um deine Bewertungen?
                        </TypographyH2>
                        <ArrowDownRight />
                    </div>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        Du sprichst Deine Kunden vielleicht bei Projektabschluss direkt auf eine Bewertung an. Aber wie viele zücken dann direkt noch ihr Handy und geben dann auch wirklich eine Bewertung ab?
                    </TypographyLead>
                    <TypographyLead>
                        Wie viel Arbeit hat Dein Kunde dann, wenn er Deine Leistung bewerten will? Muss er erst über Umwege auf das entsprechende Google Profil kommen oder hast Du schon einen QR-Code, der direkt zum Ziel führt?
                    </TypographyLead>
                    <TypographyLead>
                        Vielleicht schreibst du auch noch eine schnelle Nachricht, wenn du zwischen all Deinen Aufgaben kurz Zeit hast und dran denkst. Aber wie oft läuft diese Anfrage ins leere und der Kontakt versinkt?
                    </TypographyLead>
                </FadeMoveUp>
            </div>
        </div>
    );
}
