"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  // Always plays on mount — no once-per-session gating.
  const [active, setActive] = useState(true);
  const [bootStarted, setBootStarted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setExiting(true);
    setTimeout(() => {
      setActive(false);
      onComplete();
    }, 550);
  }, [onComplete]);

  // Any key / tap skips the boot
  useEffect(() => {
    if (!active) return;
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [active, finish]);

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 z-[500] bg-black flex items-center justify-center overflow-hidden cursor-pointer ${exiting ? "boot-out" : ""}`}
      onClick={finish}
    >
      {/* fsociety den — generated footage */}
      <video
        src="/video/fsociety-boot.mp4"
        poster="/img/fsociety.webp"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

      {/* Boot log */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="terminal-window border-glow-green bg-black/80 backdrop-blur-sm">
          <div className="terminal-titlebar">
            <div className="flex gap-1.5 mr-3">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
            </div>
            <span className="text-[10px]">init — voldermort_os</span>
          </div>
          <div className="terminal-body font-mono text-xs sm:text-sm min-h-[190px]">
            <Typewriter
              text="[SYSTEM] Initializing Voldermort OS v6.6.6..."
              speed={22}
              className="text-muted-foreground block"
              showCursor={false}
              onComplete={() => setBootStarted(true)}
            />
            {bootStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 space-y-0.5"
              >
                <Typewriter
                  text="[OK] Dark Arts module loaded"
                  speed={18}
                  delay={150}
                  className="text-terminal-green block"
                  showCursor={false}
                />
                <Typewriter
                  text="[OK] Horcrux backup system online (7/7)"
                  speed={18}
                  delay={600}
                  className="text-terminal-green block"
                  showCursor={false}
                />
                <Typewriter
                  text="[OK] Elder Wand allegiance verified"
                  speed={18}
                  delay={1100}
                  className="text-hack-cyan block"
                  showCursor={false}
                />
                <Typewriter
                  text="[OK] Death Eaters summoned — Dark Mark active"
                  speed={18}
                  delay={1600}
                  className="text-hack-cyan block"
                  showCursor={false}
                />
                <Typewriter
                  text="[WARN] Parseltongue locale detected: ssssss"
                  speed={18}
                  delay={2100}
                  className="text-yellow-500/80 block"
                  showCursor={false}
                />
                <Typewriter
                  text="[READY] Welcome back, Dark Lord."
                  speed={18}
                  delay={2600}
                  className="text-evil-red block"
                  showCursor={false}
                  onComplete={() => setTimeout(finish, 500)}
                />
              </motion.div>
            )}
          </div>
        </div>
        <p className="text-center text-[10px] font-mono text-muted-foreground/50 mt-4 animate-pulse">
          press any key to skip_
        </p>
      </div>
    </div>
  );
}
