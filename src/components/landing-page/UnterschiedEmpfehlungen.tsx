"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyLink from "../typography/TypographyLink";

export default function UnterschiedEmpfehlungen() {
    return (
        <div id="UnterschiedEmpfehlungen" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <FadeMoveUp>
                    <div className="flex items-center gap-2">
                        <TypographyH2>
                            Der Unterschied zwischen guten und schlechten Empfehlungen.
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyH4>
                        Mit klassischen Empfehlungen, kommt Dir wahrscheinlich mindestens ein Punkt bekannt vor:
                    </TypographyH4>
                    <TypographyLead>
                        - Dein Mandant kann Dich und Dein Angebot nur schwer mit eigenen Worten beschreiben. Deswegen verstehen neue Kontakte oft gar nicht, was Du genau macht.
                    </TypographyLead>
                    <TypographyLead>
                        - Du stehst als Bittsteller da, weil Dein Mandant keinen Vorteil hat Dich weiterzuempfehlen. 
                    </TypographyLead>
                    <TypographyLead>
                        - Aktuell kommen Empfehlungen unregelmäßig auf Dich zu, weil Deine Mandanten zwar immer sagen, dass sie Dich weiterempfehlen, aber es nie dazu kommt. Die Hürde ist einfach zu groß.
                    </TypographyLead>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col items-end text-right">
                            <FadeMoveUp>
                                <div className="flex items-center gap-2">
                                <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 32 32" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="text-primary" // Farbe anpassen falls nötig
                            >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                                    <TypographyH4>
                                        So sieht es mit Deinem Empfehlungsprogramm aus:
                                    </TypographyH4>
                                </div>
                            </FadeMoveUp>
                        </div>
            <div className="grid justify-items-end">
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        - Du stellst Dich und Dein Angebot selbst in einem kurzen Video vor. Damit haben Empfehlungen direkt ein Bild zu Dir, verstehen was Du machst und erkennen den Mehrwert für sich.
                    </TypographyLead>
                    <TypographyLead>
                        - Dein Mandant empfielt Dich gern weiter, weil er den Vorteil in Form der Prämien für sich selbst direkt erkennt.
                    </TypographyLead>
                    <TypographyLead>
                        - Der Prozess Dich weiterzuempfehlen ist extrem einfach und Dein Mandant kann noch in der Beratung seinen Empfehlungslink teilen. Damit kommt es regelmäßig und planbar zu Anfragen.
                    </TypographyLead>
                </FadeMoveUp>
            </div>
            </div>
        </div>
    );
}
