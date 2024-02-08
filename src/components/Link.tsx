"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TypographyLinkProps {
  text: string;
  href: string;
}

export default function TypographyLink({ text, href }: TypographyLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="hover:text-white/90 transition text-white hover:underline underline-offset-4"
    >
      {text}
    </Link>
  );
}
