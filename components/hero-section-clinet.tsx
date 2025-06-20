"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./hero-section"), { ssr: false });

export default function HeroSectionClient() {
  return <HeroSection />;
}
