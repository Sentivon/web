"use client";

import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export interface FadeMoveUpProps {
  children: React.ReactNode;
  delay?: number;
}

const fadeMoveUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function FadeMoveUp({ children, delay }: FadeMoveUpProps) {
  return (
    <Reveal
      triggerOnce
      keyframes={fadeMoveUp}
      cascade
      damping={0.1}
      {...{ delay }}
    >
      {children}
    </Reveal>
  );
}
