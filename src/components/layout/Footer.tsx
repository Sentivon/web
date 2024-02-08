"use client";

import { Separator } from "../ui/separator";
import TypographyLink from "../Link";
import TypographySmall from "../typography/TypographySmall";
import TypographyMuted from "../typography/TypographyMuted";

const Footer: React.FC = () => {
  return (
    <div className="bottom-0 fixed w-full flex items-center justify-center flex-col bg-background">
      <Separator />
      <div className="max-w-7xl w-full py-8 flex flex-col gap-24">
        <div className="flex justify-between">
          <div className="col-span-2">
            <TypographyMuted text="Ich habe Schmerzen" />
            <TypographyMuted text="Ich habe Schmerzen 2" />
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-6">
              <TypographySmall text="Links" />
              <div className="flex flex-col gap-2">
                <TypographyLink text="Leistungen" href="/test" />
                <TypographyLink text="Team" href="/test" />
                <TypographyLink text="Referenzen" href="/test" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TypographySmall text="Über" />
              <div className="flex flex-col gap-2">
                <TypographyLink text="Impressum" href="/test" />
                <TypographyLink text="Datenschutz" href="/test" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <TypographyMuted text="© 2024 Sentivon GbR. Alle Rechte vorbehalten" />
          </div>
          <div>
            <TypographyMuted text="Made with ❤️ in Dresden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
