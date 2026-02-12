"use client";

import { motion } from "framer-motion";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TerminalWindow({
  title = "voldermort@portfolio:~$",
  children,
  className = "",
  delay = 0,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`terminal-window ${className}`}
    >
      <div className="terminal-titlebar">
        <div className="flex gap-1.5 mr-3">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <span className="truncate">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </motion.div>
  );
}
