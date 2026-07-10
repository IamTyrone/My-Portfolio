"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Site-wide easter eggs. Type anywhere (outside inputs):
 *  - "fsociety" → visit the fsociety den
 *  - "portal" / "wubba" → open an interdimensional portal
 *  - "avada"  → take an Unforgivable Curse to the face
 */

type Egg = "fsociety" | "portal" | "avada" | null;

const VIDEO_EGGS: Record<
  Exclude<Egg, "avada" | null>,
  { src: string; poster: string; title: string; caption: string }
> = {
  fsociety: {
    src: "/video/fsociety-boot.mp4",
    poster: "/img/fsociety.webp",
    title: "fsociety00.dat",
    caption: "// hello, friend. we are finally awake.",
  },
  portal: {
    src: "/video/portal.mp4",
    poster: "/img/portal.webp",
    title: "portal-gun --dimension C-137",
    caption: "// aw geez, you actually typed it",
  },
};

const CONSOLE_EGG = `
%c
  ███████╗███████╗ ██████╗  ██████╗██╗███████╗████████╗██╗   ██╗
  ██╔════╝██╔════╝██╔═══██╗██╔════╝██║██╔════╝╚══██╔══╝╚██╗ ██╔╝
  █████╗  ███████╗██║   ██║██║     ██║█████╗     ██║    ╚████╔╝
  ██╔══╝  ╚════██║██║   ██║██║     ██║██╔══╝     ██║     ╚██╔╝
  ██║     ███████║╚██████╔╝╚██████╗██║███████╗   ██║      ██║
  ╚═╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚══════╝   ╚═╝      ╚═╝

%cHello, friend.
Snooping through the console? Elliot would be proud.
Try typing "fsociety", "portal", or "avada" anywhere on the page...
Or just hire the Dark Lord: tyronemguni@gmail.com
`;

export function EasterEggs() {
  const [egg, setEgg] = useState<Egg>(null);
  const bufferRef = useRef("");

  useEffect(() => {
    console.log(
      CONSOLE_EGG,
      "color: #00ff41; font-weight: bold;",
      "color: #00d4ff; font-size: 12px;",
    );
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Don't hijack typing in inputs (e.g. the Nagini chat)
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;
      if (e.key.length !== 1) return;

      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-12);
      const buf = bufferRef.current;

      if (buf.endsWith("fsociety")) setEgg("fsociety");
      else if (buf.endsWith("portal") || buf.endsWith("wubba"))
        setEgg("portal");
      else if (buf.endsWith("avada")) setEgg("avada");
      else return;
      bufferRef.current = "";
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Auto-clear the avada flash
  useEffect(() => {
    if (egg !== "avada") return;
    const t = setTimeout(() => setEgg(null), 1400);
    return () => clearTimeout(t);
  }, [egg]);

  return (
    <>
      {/* Avada Kedavra flash */}
      {egg === "avada" && (
        <div className="avada-flash fixed inset-0 z-[400] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.5),rgba(255,0,64,0.35),black_90%)] flex items-center justify-center">
          <span
            className="glitch-text text-3xl sm:text-5xl font-bold font-display tracking-widest text-terminal-green text-glow-green"
            data-text="AVADA KEDAVRA!"
          >
            AVADA KEDAVRA!
          </span>
        </div>
      )}

      {/* Video egg modals */}
      <AnimatePresence>
        {(egg === "fsociety" || egg === "portal") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setEgg(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="terminal-window border-glow-green w-full max-w-2xl"
            >
              <div className="terminal-titlebar justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-2">
                    <span className="terminal-dot terminal-dot-red" />
                    <span className="terminal-dot terminal-dot-yellow" />
                    <span className="terminal-dot terminal-dot-green" />
                  </div>
                  <span className="text-[10px]">{VIDEO_EGGS[egg].title}</span>
                </div>
                <span className="text-[9px] text-muted-foreground">
                  [click anywhere to close]
                </span>
              </div>
              <video
                src={VIDEO_EGGS[egg].src}
                poster={VIDEO_EGGS[egg].poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="px-3 py-2">
                <p className="text-[10px] font-mono text-terminal-green/60">
                  {VIDEO_EGGS[egg].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
