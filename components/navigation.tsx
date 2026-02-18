"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "./home", cmd: "~" },
  { href: "/about", label: "./about", cmd: "cat README.md" },
  { href: "/projects", label: "./projects", cmd: "ls -la" },
  { href: "/blog", label: "./blog", cmd: "tail -f" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-terminal-green/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo / Prompt */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-evil-red font-display text-sm tracking-wider">
              root@
            </span>
            <span className="text-terminal-green font-display text-sm tracking-wider text-glow-green group-hover:text-white transition-colors">
              voldermort
            </span>
            <span className="text-muted-foreground font-display text-sm">
              :~/C-137$
            </span>
            <span className="terminal-cursor !h-3.5 !w-1.5 ml-0.5" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wide transition-all duration-200 rounded ${
                    isActive
                      ? "text-terminal-green text-glow-green bg-terminal-green/5"
                      : "text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/5"
                  }`}
                >
                  <span className="opacity-50 mr-1">$</span>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-px bg-terminal-green"
                      style={{ boxShadow: "0 0 8px rgba(0, 255, 65, 0.5)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-terminal-green p-2 hover:bg-terminal-green/10 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-[#0a0a0a] backdrop-blur-md"
            >
              <div className="border-t border-terminal-green/10 py-3 space-y-1 bg-[#0a0a0a]">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-xs font-mono rounded transition-colors ${
                          isActive
                            ? "text-terminal-green text-glow-green bg-terminal-green/5"
                            : "text-muted-foreground hover:text-terminal-green"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-evil-red mr-2">{">"}</span>
                        {item.cmd}
                        <span className="text-muted-foreground ml-2">
                          # {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
