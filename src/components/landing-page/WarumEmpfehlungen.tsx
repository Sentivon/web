"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyLink from "../typography/TypographyLink";
import BookingDialog from "../dialogs/BookingDialog";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function WarumEmpfehlungen() {
    return (
        <div id="WarumEmpfehlungen" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <FadeMoveUp>
                    <div className="flex items-center gap-2">
                        <TypographyH2>
                            Dein Vorteil von Empfehlungen.
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        Du hast bestimmt Mal versucht Leads zu kaufen - aber dann gemerkt, dass die Leads keinen Berührungspunkt mit Dir oder Deiner Dienstleistung hatten. Im schlimmsten Fall wurden die Leads gleich an mehrere Berater verkauft. 
                    </TypographyLead>
                    <TypographyLead>
                        Deine Werbeanzeigen hatten wahrscheinlich einen extremen finanziellen Aufwand - die Leads, die sich dabei eingetragen haben, wussten aber auf einmal gar nicht, wovon Du sprichst und wo sie sich angeblich eingetragen haben oder hatten andere Ausreden. 
                    </TypographyLead>
                    <TypographyLead>
                        Likes und Follower auf Deinem Social Media Kanälen zu haben, bedeutet auch nicht gleich, dass Du Dich deswegen vor Anfragen kaum noch retten kannst. Ganz im Gegenteil - viel Aufwand für Pflege und die Erstellung von ansprechenden Inhalten, steht einer sehr oberflächlichen Interaktin mit potenziellen Kunden gegenüber.
                    </TypographyLead>
                    <TypographyLead>
                        Irgendwann hast Du realisiert, wie groß der Aufwand und wie klein das Ergebnis ist ... <br />
                        ... dabei kann es so viel leichter sein.
                    </TypographyLead>
                    <TypographyLead>
                        Deine Empfehlungsplattform nutzt das Vertrauen von bestehenden Mandanten, um neue Kontakte zu gewinnen. Gleichzeitig sind diese neuen Kontakte durch persönliche Empfehlungen deutlich wärmer.
                    </TypographyLead>
                    <TypographyLead>
                        Dein Vorstellungsvideo in der Plattform löst das Problem, dass Deine Mandanten Deine Dienstleistung nicht ansatzweise so gut erklären können, wie Du selbst.
                    </TypographyLead>
                    <TypographyLead>
                        Die Prämien motivieren Deine Mandanten zusätzlich, Dich öfter zu empfehlen. Zusammen mit dem einfachen und effizienten Ablauf Dich zu empfehlen, steigert das die Bereitschaft dazu spürbar.
                    </TypographyLead>
                    <TypographyLead>
                        Du erhältst also messbar mehr Empfehlungen, die Dein Angebot verstehen und bereit für Deinen Mehrwert sind.
                    </TypographyLead>
                </FadeMoveUp>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
                <FadeMoveUp delay={200}>
                    <BookingDialog size={"lg"}>
                    Erstgespräch vereinbaren. <ArrowUpRight size={16} />
                    </BookingDialog>
                </FadeMoveUp>
            </div>
        </div>
    );
}
