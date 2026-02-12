"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const type = useCallback(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  useEffect(() => {
    const cleanup = type();
    return cleanup;
  }, [type]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && <span className="terminal-cursor" />}
    </span>
  );
}

interface MultiLineTypewriterProps {
  lines: { text: string; prefix?: string; className?: string }[];
  speed?: number;
  lineDelay?: number;
  className?: string;
}

export function MultiLineTypewriter({
  lines,
  speed = 40,
  lineDelay = 600,
  className = "",
}: MultiLineTypewriterProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const handleLineComplete = useCallback(() => {
    setCompletedLines((prev) => [
      ...prev,
      `${lines[currentLine]?.prefix || ""}${lines[currentLine]?.text || ""}`,
    ]);
    setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, lineDelay);
  }, [currentLine, lines, lineDelay]);

  return (
    <div className={`space-y-1 ${className}`}>
      {completedLines.map((line, i) => (
        <div key={i} className={lines[i]?.className || ""}>
          <span className="text-terminal-green-dim opacity-60">
            {lines[i]?.prefix}
          </span>
          <span>{lines[i]?.text}</span>
        </div>
      ))}
      {currentLine < lines.length && (
        <div className={lines[currentLine]?.className || ""}>
          <span className="text-terminal-green-dim opacity-60">
            {lines[currentLine]?.prefix}
          </span>
          <Typewriter
            text={lines[currentLine]?.text || ""}
            speed={speed}
            onComplete={handleLineComplete}
          />
        </div>
      )}
    </div>
  );
}
