"use client";

import { Separator } from "../ui/separator";
import TypographyLink from "../typography/TypographyLink";
import TypographyMuted from "../typography/TypographyMuted";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const kiona = localFont({
  src: "./kiona.ttf",
  display: "swap",
});

const Footer: React.FC = () => {
  return (
    <div className="bottom-0 flex flex-col items-center justify-center w-full bg-background">
      <Separator />
      <div className="flex flex-col w-full gap-24 py-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-2">
            <img src="/fox_white.svg" className="hidden dark:flex w-7" />
            <img src="/fox_dark.svg" className="dark:hidden w-7" />
            <div className="flex flex-col">
              <h2 className={cn("text-lg font-bold", kiona.className)}>
                SEFRIN
              </h2>
              <h2 className={cn("text-lg font-bold", kiona.className)}>
                CONSULTING
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <TypographyLink
              href={
                "https://www.google.com/maps/place/Konkordienstra%C3%9Fe+21,+01127+Dresden/@51.0754621,13.7240436,17z/data=!3m1!4b1!4m6!3m5!1s0x4709cf062eef1ffb:0xae82b7e4c58d36fd!8m2!3d51.0754621!4d13.7266239!16s%2Fg%2F11c2f51jws?hl=de&entry=ttu"
              }
              isExternalLink
              className="w-fit"
            >
              Konkordienstraße 21, 01127 Dresden
            </TypographyLink>
            <TypographyLink
              href={"mailto:info@sefrin-consulting.de"}
              className="w-fit"
              isExternalLink
            >
              info@sefrinconsulting.de
            </TypographyLink>
            <TypographyLink
              href={"tel:+4915253287326"}
              className="w-fit"
              isExternalLink
            >
              +49 152 53287326
            </TypographyLink>
          </div>
        </div>
        <div className="flex-col gap-6 md:flex-row flex items-center justify-between">
          <div>
            <TypographyMuted>Made with ❤️ in Dresden</TypographyMuted>
          </div>
          <div className="flex justify-center gap-6">
            <TypographyLink className="text-sm" href="/allgemein/impressum">
              Impressum
            </TypographyLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
