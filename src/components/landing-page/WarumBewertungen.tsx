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
                            Deine Herausforderungen beim Thema Bewertungen
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        Wenn Du wirklich gut bist, dann sprichst Du Deine Kunden während der Zusammenarbeit oder nach Projektabschluss auf eine Bewertung an. Aber das machst Du wahrscheinlich nicht. Und selbst wenn Du es machst - wie viele Kunden nehmen dann ihr Handy in die Hand und geben Dir eine Bewertung?
                    </TypographyLead>
                    <TypographyLead>
                        Wie viel Arbeit hat Dein Kunde potenziell, wenn er Deine Leistung bewerten will? Muss er erst bei Google selbst Dein Profil raussuchen oder hast Du schon einen QR-Code oder einen Link vorbereitet, der direkt zum Ziel führt?
                    </TypographyLead>
                    <TypographyLead>
                        Außerdem bist Du den ganzen Tag mit wirklich wichtigen Aufgaben beschäftigt. Wie oft findest Du Zeit, um dann doch mal eine Nachricht an den Kunden zu schicken und darüber nach einer Bewertung zu fragen? Wie oft verläuft das ins Nichts - ohne eine Antwort?
                    </TypographyLead>
                    <TypographyLead>
                    Genau deshalb solltest Du lieber auf mein Konzept setzen, mit dem wir systematisch und automatisiert Bewertungsanfragen verschicken. Hier drunter siehst Du, wie es abläuft.
                    </TypographyLead>
                </FadeMoveUp>
            </div>
        </div>
    );
}
