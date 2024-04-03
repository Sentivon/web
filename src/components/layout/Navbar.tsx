"use client";

import { Button } from "../ui/button";
import localFont from "next/font/local";

import { ArrowUpRight, Menu } from "lucide-react";
import ThemeSwitcher from "../theme-switcher";
import { cn, useScrollPosition } from "@/lib/utils";
import { Separator } from "../ui/separator";
import React from "react";
import Link from "next/link";
import Navlink from "../Navlink";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import BookingDialog from "../dialogs/BookingDialog";

const kiona = localFont({
  src: "./kiona.ttf",
  display: "swap",
});

const Navbar: React.FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="sticky top-0 z-50 flex flex-col items-center justify-center w-full bg-background">
      <div className="grid w-full grid-cols-6 py-3 max-w-7xl">
        <Link href={"/"} className="flex gap-2">
          <img src="/fox_white.svg" className="hidden dark:flex w-7" />
          <img src="/fox_dark.svg" className="dark:hidden w-7" />
          <h2 className={cn("text-lg font-bold", kiona.className)}>
            SEFRIN CONSULTING
          </h2>
        </Link>
        <div className="items-center justify-center hidden col-span-4 gap-2 font-medium md:flex">
          <Navlink href="/#leistungen" content="Leistungen" />
          <Navlink href="/#so-funktionierts" content="So funktionierts" />
          <Navlink href="/#kundenmeinungen" content="Kundenmeinungen" />
        </div>
        <div className="items-center justify-end hidden gap-2 md:flex">
          <ThemeSwitcher />
          <BookingDialog />
        </div>
        <div className="flex items-center justify-end col-span-5 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={"icon"}
                variant="outline"
                className="flex md:hidden"
              >
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Sefrin Consulting</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-start gap-2 py-6">
                <hr />
                <Navlink
                  href="/#leistungen"
                  content="Leistungen"
                  buttonProps={{ size: "lg" }}
                />
                <Navlink
                  href="/#so-funktionierts"
                  content="So funktionierts"
                  buttonProps={{ size: "lg" }}
                />
                <Navlink
                  href="#kundenmeinungen"
                  content="Kundenmeinungen"
                  buttonProps={{ size: "lg" }}
                />
                <hr />
              </div>
              <SheetFooter>
                <div className="flex flex-col w-full gap-4">
                  <BookingDialog />
                  <SheetClose asChild>
                    <Button variant={"outline"} size={"lg"}>
                      Schließen
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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
