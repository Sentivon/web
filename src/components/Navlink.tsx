"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";

export interface TypographyLinkProps {
  content: string | React.ReactNode;
  href: string;
  buttonProps?: ButtonProps;
}

export default function Navlink({
  content,
  href,
  buttonProps,
}: TypographyLinkProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(href)}
      variant={buttonProps?.variant ? buttonProps.variant : "ghost"}
      {...buttonProps}
    >
      {content}
    </Button>
  );
}
