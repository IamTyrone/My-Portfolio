"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { GlitchText } from "@/components/glitch-text";
import { Typewriter } from "@/components/typewriter";
import { BootScreen } from "@/components/boot-screen";
import { ZapDoodles } from "@/components/zap-doodles";
import { getRandomQuote } from "@/lib/quotes";

const CATEGORY_COLORS: Record<string, string> = {
  "rick-and-morty": "text-hack-cyan/50",
  voldemort: "text-evil-red/50",
  "mr-robot": "text-terminal-green/50",
};

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const [quote, setQuote] = useState<ReturnType<typeof getRandomQuote> | null>(
    null,
  );

  // Pick quote on client only to avoid SSR hydration mismatch
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleBootComplete = useCallback(() => {
    setShowContent(true);
    // Notify NaginiChat that hero boot is complete
    window.dispatchEvent(new CustomEvent("hero-boot-complete"));
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full-screen boot / loading screen with generated fsociety footage */}
      <BootScreen onComplete={handleBootComplete} />

      {/* Generated sanctum footage — the Dark Lord at his terminal wall */}
      <video
        src="/video/hero-sanctum.mp4"
        poster="/img/hero-sanctum.webp"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[30%_center] sm:object-center"
      />

      {/*
        Readability scrims — carve a dark reading gutter out of the LEFT edge
        that fades to fully transparent before it reaches the hooded figure,
        so he (center) and Nagini (right) stay lit and visible in the footage.
      */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black from-0% via-black/75 via-30% to-transparent to-[60%]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content — anchored left so the figure & Nagini stay visible to the right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md sm:max-w-lg text-center sm:text-left [text-shadow:0_2px_12px_rgba(0,0,0,0.95)]"
          >
            {/* Prompt line */}
            <div className="mb-5 font-mono text-xs sm:text-sm">
              <span className="text-evil-red">root@voldermort</span>
              <span className="text-muted-foreground">:~$ </span>
              <Typewriter
                text="whoami"
                speed={90}
                delay={300}
                className="text-terminal-green"
              />
            </div>

            {/* Name with glitch + electric doodles */}
            <div className="mb-4 relative inline-block">
              <ZapDoodles />
              <GlitchText
                text="TYRONE MGUNI"
                as="h1"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-widest"
              />
            </div>

            {/* Alias */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="text-muted-foreground text-sm font-mono">
                alias:{" "}
              </span>
              <span className="text-evil-red text-lg sm:text-xl font-display tracking-[0.3em] text-glow-red">
                VOLDERMORT
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-terminal-green/80 font-mono mb-4"
            >
              <span className="text-muted-foreground">{">"}</span> Full-Stack
              Software Engineer
              <span className="terminal-cursor !h-4 !w-2 ml-1.5 align-middle" />
            </motion.p>

            {quote && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-8 max-w-xl border-l-2 border-terminal-green/20 pl-3 sm:pl-4 mx-auto sm:mx-0 text-left"
              >
                <p className="text-xs sm:text-sm text-muted-foreground font-mono italic">
                  &quot;{quote.text}&quot;
                </p>
                <p
                  className={`text-[10px] font-mono mt-1.5 ${CATEGORY_COLORS[quote.category] || "text-muted-foreground/50"}`}
                >
                  — {quote.source}
                </p>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mb-8"
            >
              <Link
                href="/projects"
                className="zap-hover px-6 py-2.5 text-xs font-mono border border-terminal-green/40 bg-black/40 backdrop-blur-sm text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-200 rounded-sm tracking-wider text-center"
              >
                $ ls ./projects
              </Link>
              <Link
                href="/about"
                className="zap-hover px-6 py-2.5 text-xs font-mono border border-evil-red/30 bg-black/40 backdrop-blur-sm text-evil-red hover:bg-evil-red/10 hover:border-evil-red transition-all duration-200 rounded-sm tracking-wider text-center"
              >
                $ cat ./about
              </Link>
            </motion.div>

            {/* Social Links as terminal commands */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center sm:justify-start gap-6"
            >
              <Link
                href="https://github.com/IamTyrone"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-terminal-green transition-all duration-200"
              >
                <Github size={16} />
                <span className="text-[10px] font-mono hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                  git remote -v
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tyrone-mguni-9b9806127/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-hack-cyan transition-all duration-200"
              >
                <Linkedin size={16} />
                <span className="text-[10px] font-mono hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                  connect --professional
                </span>
              </Link>
              <Link
                href="mailto:tyronemguni@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-evil-red transition-all duration-200"
              >
                <Mail size={16} />
                <span className="text-[10px] font-mono hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                  sendmail -v
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ArrowDown className="text-terminal-green/40" size={20} />
        </motion.div>
      )}
    </section>
  );
}
