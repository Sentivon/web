"use client";

import FadeMoveUp from "@/lib/FadeMoveUp";
import { Fade } from "react-awesome-reveal";

export default function GeneralLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full py-24 max-w-7xl">
      <FadeMoveUp>{children}</FadeMoveUp>
    </div>
  );
}
