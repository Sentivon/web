"use client";

import { Button } from "../ui/button";

import { ChevronRight } from "lucide-react";
import ThemeSwitcher from "../theme-switcher";
import { cn, useScrollPosition } from "@/lib/utils";
import { Separator } from "../ui/separator";
import React from "react";
import TypographyLink from "../Link";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const Navbar: React.FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="sticky top-0 w-full flex flex-col items-center justify-center bg-background z-50">
      <div className="max-w-7xl w-full grid grid-cols-6 py-6">
        <Fade>
          <Link href={"/"}>
            <h2 className="text-2xl font-semibold">Sentivon</h2>
          </Link>
        </Fade>
        <div className="flex items-center justify-center font-medium gap-6 col-span-4">
          <Fade>
            <TypographyLink href="/test" text="Leistungen" />
            <TypographyLink href="/test" text="Team" />
            <TypographyLink href="/test" text="Referenzen" />
          </Fade>
        </div>
        <div className="flex items-center gap-2">
          <Fade>
            <ThemeSwitcher />
            <Link href={"/contact"}>
              <Button className="gap-2">
                Jetzt starten <ChevronRight size={16} />
              </Button>
            </Link>
          </Fade>
        </div>
      </div>
      <Separator
        className={cn(
          "w-full transition",
          scrollPosition > 20 ? "" : "bg-transparent"
        )}
      />
    </div>
  );
};

export default Navbar;
