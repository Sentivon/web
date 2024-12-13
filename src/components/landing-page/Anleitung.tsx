"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { ArrowDownRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import TypographyH1 from "../typography/TypographyH1";
import TypographyH2 from "../typography/TypographyH2";
import TypographyLead from "../typography/TypographyLead";
import TypographyMuted from "../typography/TypographyMuted";
import BookingDialog from "../dialogs/BookingDialog";
import TypographyH4 from "../typography/TypographyH4";

export default function Anleitung() {
  return (
    <div id="so-funktionierts" className="flex flex-col gap-8">
      <div className="flex flex-col">
        <FadeMoveUp>
          <div className="flex items-center gap-2">
            <TypographyH2>
              So funktioniert die Zusammenarbeit
            </TypographyH2>
            <ArrowDownRight />
          </div>
        </FadeMoveUp>
        <FadeMoveUp delay={200}>
          <TypographyH4>
            damit du langfristig mehr positive Bewertungen bekommst
          </TypographyH4>
        </FadeMoveUp>
      </div>
      <div className="flex gap-8">
        <Fade triggerOnce delay={100}>
          <div className="w-1 min-h-full bg-secondary" />
        </Fade>
        <div className="flex flex-col gap-16">
          <FadeMoveUp>
            <div className="flex flex-col gap-6">
              <TypographyH1>1. Voraussetzungen für die Zusammenarbeit</TypographyH1>
              <TypographyLead>
                Die einzigen Voraussetzungen, die Du erfüllen musst, ist der Zugriff zu Deiner Kundenliste, den ich brauche.
              </TypographyLead>
              <TypographyLead>
                Egal ob direkten CRM Zugriff (der auch in Zukunft viele Vorteile mit sich bringt) oder eine einfache Excel Liste. Außerdem musst du Zugriff zu deinem Google Business Profil haben.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>2. Einrichtung Zugänge</TypographyH1>
              <TypographyLead>
                Ich richte Dir Deinen eigenen Zugang zu meinen System ein, auf dessen Basis wir arbeiten werden und Du dir ein genaues Bild der Arbeit machen kannst. Alles transparent.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>3. Onboarding</TypographyH1>
              <TypographyLead>
                Bei einem gemeinsamen Onboarding Termin brauchen wir die Zugriffe, von denen ich oben gesprochen habe. Wir treffen uns in einem Zoom Meeting, das du an einem Laptop führen musst, damit wir auch alles genau einrichten können.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH1>4. Automatisierte Prozesse</TypographyH1>
              <TypographyLead>
                Wenn das System steht und alles funktioniert kannst du dich zurücklehnen. Die Anfragen verschicke ich dann über das System an die Kontakte. Die Bewertungen werden auch direkt mit beantwortet.
              </TypographyLead>
            </div>
          </FadeMoveUp>
        </div>
      </div>
      <div className="flex w-full">
        <FadeMoveUp>
          <BookingDialog size={"lg"} />
        </FadeMoveUp>
      </div>
    </div>
  );
}
