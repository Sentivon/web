"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyLink from "../typography/TypographyLink";
import TypographyH3 from "../typography/TypographyH3";

export default function empfehlungssoftware() {
    return (
        <div id="empfehlungssoftware" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <FadeMoveUp>
                    <div className="flex items-center gap-2">
                        <TypographyH2>
                            Deine Softwarelösung für einfache und professionelle Empfehlungen.
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
                <FadeMoveUp delay={200}>
                    <TypographyH3>
                        Individuell auf Dich zugeschnitten.
                    </TypographyH3>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 md:max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        Dir kommt diese Situation bekannt vor?
                    </TypographyLead>
                    <TypographyLead>
                        Du hast es mit bezahlten Werbeanzeigen auf Google oder Social Media versucht, Dir viele Gedanken gemacht, um den &quot;perfekten&quot; Content zu erstellen oder einfach Leads gekauft?
                    </TypographyLead>
                    <TypographyLead>
                        Egal was es war, es hat Dich viel Zeit, Geld und vor allem Nerven gekostet - ohne Deinem Ziel näher zu kommen. Aber was ist die Alternative?
                    </TypographyLead>
                    <TypographyLead>
                        Ganz klar - Deine eigenen Mandanten und ihre Empfehlungen. ABER ...
                    </TypographyLead>
                    <TypographyLead>
                        ... dabei hast Du eines der folgenden Probleme:
                    </TypographyLead>
                    <TypographyLead>
                        1. Es gibt keinen einfachen und klaren Weg, wie neue Empfehlungen mit Dir in Kontakt treten.
                    </TypographyLead>
                    <TypographyLead>
                        2. Deine Mandanten sagen Dir zwar, dass sie Dich weiterempfehlen, aber so wirklich voran geht es nicht.
                    </TypographyLead>
                    <TypographyLead>
                        3. Du schaffst es einfach nicht, das Thema Empfehlungen regelmäßig in Deinen Beratungen anzubringen.
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
                        <TypographyH2>
                            Dein Empfehlungsprogramm schlägt genau diese Probleme.
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
            </div>
            <div className="grid justify-items-end">
            <div className="flex flex-col gap-6 max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        1. Dein Mandant bekommt von Dir eine einfache Möglichkeit, Dich in weniger als 2 Minuten weiterzuempfehlen. 
                    </TypographyLead>
                    <TypographyLead>
                        Du wirst also im besten Fall noch in der Beratung an neue Kontakte empfohlen.
                    </TypographyLead>
                    <TypographyLead>
                        2. Die Plattform zeigt Deinen Mandanten direkt die Prämie, den sie für eine erfolgreiche Empfehlung von Dir bekommen.
                    </TypographyLead>
                    <TypographyLead>
                        3. Du kannst alle Informationen zu Deinen Kontakten an einer zentralen Stelle abrufen und die Empfehlungen nachverfolgen.
                    </TypographyLead>
                </FadeMoveUp>
            </div>
            </div>
        </div>
    );
}