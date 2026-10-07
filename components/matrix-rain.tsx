"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|;:+=*&^%$#@!~`";
const CHAR_ARRAY = CHARS.split("");
const FONT_SIZE = 18;
const TARGET_FPS = 24;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);
  const lastFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const initDrops = () => {
      const columns = Math.floor(canvas.width / FONT_SIZE);
      const drops: number[] = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
      dropsRef.current = drops;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // resizing a canvas resets its context, font included
      ctx.font = `${FONT_SIZE}px monospace`;
      initDrops();
    };

    resize();
    window.addEventListener("resize", resize);

    const drawFrame = () => {
      const drops = dropsRef.current;

      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = CHAR_ARRAY[(Math.random() * CHAR_ARRAY.length) | 0];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Head of the stream is brighter
        const rand = Math.random();
        if (rand > 0.98) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        } else if (rand > 0.9) {
          ctx.fillStyle = "rgba(0, 255, 65, 0.55)";
        } else {
          ctx.fillStyle = "rgba(0, 255, 65, 0.15)";
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const render = (now: number) => {
      animationRef.current = requestAnimationFrame(render);

      const delta = now - lastFrameRef.current;
      if (delta < FRAME_INTERVAL) return;
      lastFrameRef.current = now - (delta % FRAME_INTERVAL);
      drawFrame();
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion gets one still frame of rain instead of a loop: start
    // every column somewhere on screen and let it fall a few rows.
    if (reduceMotion) {
      const drawStill = () => {
        const rows = canvas.height / FONT_SIZE;
        dropsRef.current = dropsRef.current.map(() => Math.random() * rows);
        for (let i = 0; i < 30; i++) drawFrame();
      };
      drawStill();
      window.addEventListener("resize", drawStill);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("resize", drawStill);
      };
    }

    // Nobody is watching a background tab, so stop drawing in one.
    const onVisibility = () => {
      cancelAnimationFrame(animationRef.current);
      if (!document.hidden) {
        animationRef.current = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="matrix-rain-container">
      <canvas ref={canvasRef} className="opacity-25" />
    </div>
  );
}
