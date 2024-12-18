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
            ... damit du langfristig mehr positive Bewertungen bekommst.
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
              <TypographyH3>1. Voraussetzungen für die Zusammenarbeit</TypographyH3>
              <TypographyLead>
                Natürlich brauche ich Zugriff auf Deine Kundenliste, damit mein System die Anfrage verschicken kann. Egal, ob das eine einfache Excel-Liste oder der Zugriff zu Deinem CRM ist. Langfristig kann ich die 2. Variante empfehlen.
              </TypographyLead>
              <TypographyLead>
                Außerdem musst Du mir Zugriff auf Dein Google Business Profil geben können. Dazu brauchst du Email und Passwort für das Google Konto - alternativ richten wir das zusammen beim Onboarding ein. Hauptsache der Zugriff ist da.
              </TypographyLead>
              <TypographyLead>
                Je nach Versandmethode, die zum Einsatz kommen soll, brauche ich auch die Anmeldung für dein Meta Business Profil, welches mit deinem Whatsapp Business verknüpft ist.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>2. Einrichtung Zugänge</TypographyH3>
              <TypographyLead>
                Ich bereite mein System vor und richte Dir Deinen eigenen Zugang dazu ein. Auf dieser Basis werden wir arbeiten und Du kannst dir ein genaues Bild der Arbeit machen. Alles transparent.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>3. Onboarding</TypographyH3>
              <TypographyLead>
                Bei einem gemeinsamen Onboarding Termin brauchen wir die Zugriffe, von denen ich oben gesprochen habe. Wir treffen uns in einem Meeting, das du an einem Laptop führen musst, damit wir alles wichtige gemeinsam einrichten können.
              </TypographyLead>
            </div>
            <div className="flex flex-col gap-6">
              <TypographyH3>4. Automatisierte Prozesse</TypographyH3>
              <TypographyLead>
                Wenn das System steht und alles funktioniert kannst du dich zurücklehnen. Die Anfragen werden automatisch verschickt und von mir überwacht. 
              </TypographyLead>
              <TypographyLead>
                Alle anderen Möglichkeiten, wie die automatische Beantwortung der Bewertungen oder den Post auf Social Media, besprechen wir einfach vorher und dann werden auch diese Automatismen umgesetzt.
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
