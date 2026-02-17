"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";

const glitchMessages = [
  "ERROR 404: Page not found in any dimension",
  "The Dark Lord has hidden this page",
  "This page has been Avada Kedavra'd",
  "Segmentation fault: reality not found",
  "rm -rf /page executed successfully",
];

const wittyQuotes = [
  {
    text: "You've reached the void between dimensions. Even Rick's portal gun can't find this page.",
    source: "Interdimensional Error Handler",
  },
  {
    text: "The page you seek does not exist. Much like my master's mercy for bad code.",
    source: "Nagini",
  },
  {
    text: "404: The Dark Lord has no memory of this page. And he remembers everything.",
    source: "Voldermort's Server",
  },
  {
    text: "This isn't the page you're looking for. Move along, mortal.",
    source: "fsociety",
  },
];

export default function NotFound() {
  const randomQuote = wittyQuotes[Math.floor(Math.random() * wittyQuotes.length)];
  const randomGlitch = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[120px] sm:text-[180px] font-bold font-display leading-none text-terminal-green glitch-text" data-text="404">
            404
          </h1>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="terminal-window text-left mb-8"
        >
          <div className="terminal-titlebar">
            <div className="flex gap-1.5 mr-3">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
            </div>
            <span className="text-[10px]">voldermort@404:~$</span>
          </div>
          <div className="terminal-body font-mono text-sm space-y-2">
            <p className="text-evil-red">
              <span className="text-muted-foreground">$</span> curl -I {typeof window !== 'undefined' ? window.location.href : '/unknown'}
            </p>
            <p className="text-terminal-green/70">
              HTTP/1.1 <span className="text-evil-red font-bold">404 Not Found</span>
            </p>
            <p className="text-muted-foreground text-xs mt-4">
              <Terminal size={12} className="inline mr-2" />
              {randomGlitch}
            </p>
          </div>
        </motion.div>

        {/* Witty Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-muted-foreground text-sm font-mono italic mb-2">
            &quot;{randomQuote.text}&quot;
          </p>
          <p className="text-terminal-green/50 text-xs font-mono">
            — {randomQuote.source}
          </p>
        </motion.div>

        {/* ASCII Art Snake */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-terminal-green/30 text-[8px] sm:text-[10px] font-mono mb-10 leading-tight hidden sm:block"
        >
{`
            _____
           /     \\
          | () () |
           \\  ^  /
            |||||
            |||||
    ~^~^~^~^~^~^~^~^~^~
`}
        </motion.pre>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-200 rounded-sm"
          >
            <Home size={16} />
            Return to Safety
          </Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono border border-evil-red/30 text-evil-red hover:bg-evil-red/10 hover:border-evil-red transition-all duration-200 rounded-sm"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>

        {/* Easter Egg */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-[10px] font-mono text-muted-foreground/40"
        >
          Pro tip: Try talking to Nagini 🐍 — she knows where everything is hidden
        </motion.p>
      </div>
    </div>
  );
}
