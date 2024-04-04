import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import TypographyH3 from "../typography/TypographyH3";
import TypographyMuted from "../typography/TypographyMuted";

export default function Leistungen() {
  return (
    <div id="leistungen" className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <FadeMoveUp>
          <TypographyH3>Leistungen</TypographyH3>
          <ArrowDownRight />
        </FadeMoveUp>
      </div>
      <div className="grid w-full md:grid-cols-2 gap-6">
        <FadeMoveUp delay={100}>
          <div className="flex flex-col gap-6 p-6 border rounded-lg h-full bg-background">
            <TypographyH3>Social Media Management</TypographyH3>
            <TypographyMuted>
              Gemeinsam erarbeiten wir an einem erprobten Bauplan, wie wir
              Deinen Social Media Auftritt gemeinsam gestaltet. Damit bauen wir
              erst Reichweite auf und gewinnen anschließend damit deine
              Neukunden, die Interesse an dir und deiner Dienstleistung haben.
            </TypographyMuted>
          </div>
          <div className="flex flex-col gap-6 p-6 border rounded-lg h-full bg-background">
            <TypographyH3>Bezahlte Werbeanzeigen</TypographyH3>
            <TypographyMuted>
              Nach klaren Anforderungen und der Übermittlung Deiner Materialien
              richte ich Dir einen Funnel anhand bewährter Methoden ein.
              Parallel wird das Material zu Werbeanzeigen verarbeitet. Wenn
              beides steht, werden die Anzeigen ausgespielt.
            </TypographyMuted>
          </div>
        </FadeMoveUp>
      </div>
    </div>
  );
}
