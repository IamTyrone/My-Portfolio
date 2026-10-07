"use client";

import { MotionConfig } from "framer-motion";

/** Honour the OS reduced motion setting: framer drops movement and keeps fades. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
