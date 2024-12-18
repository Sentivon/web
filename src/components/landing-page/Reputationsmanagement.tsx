"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH4 from "../typography/TypographyH4";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyLink from "../typography/TypographyLink";
import TypographyH3 from "../typography/TypographyH3";

export default function Reputationsmanagement() {
    return (
        <div id="reputationsmanagement" className="flex flex-col gap-8">
            <div className="flex flex-col">
                <FadeMoveUp>
                    <div className="flex items-center gap-2">
                        <TypographyH2>
                            Reputationsmanagement
                        </TypographyH2>
                    </div>
                </FadeMoveUp>
                <FadeMoveUp delay={200}>
                    <TypographyH3>
                        Wie mehr positive Bewertungen zu mehr Verkäufen führen?
                    </TypographyH3>
                </FadeMoveUp>
            </div>
            <div className="flex flex-col gap-6 md:max-w-[850px]">
                <FadeMoveUp>
                    <TypographyLead>
                        Du stehst genau wie jeder, der seine Dienstleistung online anbietet, in einem ständigen Wettkampf mit deiner Konkurrenz.
                    </TypographyLead>
                    <TypographyLead>
                        Und Interessenten sehen mittlerweile alle Anbieter mit wenigen Klicks direkt auf dem Handy. Aber wenn es um wichtige oder große Entscheidungen geht, dann machst Du die doch auch nicht nur von der Webseite abhängig. Oder?
                    </TypographyLead>
                    <TypographyLead>
                        93% der Kunden lesen Bewertungen lokaler Unternehmen, um deren Qualität zu bestimmen. Gleichzeitig tragen Bewertungen zu etwa 17% dazu bei, wie weit oben du bei Google angezeigt wirst
                        <TypographyLink isExternalLink className="ml-2" href="https://www.brightlocal.com/research/local-consumer-review-survey/">(Quelle: Brightlocal</TypographyLink>).
                    </TypographyLead>
                </FadeMoveUp>
            </div>
        </div>
    );
}
