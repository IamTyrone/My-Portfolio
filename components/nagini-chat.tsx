"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { SnakeAscii } from "@/components/ascii-art";

interface Message {
  role: "user" | "nagini";
  content: string;
}

const NAGINI_GREETINGS = [
  "Sssalutations, mortal... I am Nagini, loyal servant of the Dark Lord Voldermort. What do you wisssh to know about my massster?",
];

const NAGINI_RESPONSES: Record<string, string> = {
  hello:
    "Yesss... greetingsss. I am Nagini. The Dark Lord's most trusted companion. Ask me anything about my master, Voldermort — the one they call Tyrone in the mortal world.",
  hi: "Ssspeak, mortal. What do you wish to know about the Dark Lord?",
  hey: "Ah, another visssitor. The Dark Lord is quite popular these days. What brings you to his domain?",
  who: "My massster? He is Tyrone Mguni — known in the digital realm as Voldermort. A full-stack software engineer who bends code to his will like dark magic. He architecsssts systems, destroys bugs, and builds empires of code.",
  skills:
    "The Dark Lord's arsenal is vasssst... React, Next.js, Python, Django, Go, Rust, TypeScript, Docker, Kubernetes, AWS — he wields them all. Frontend, backend, mobile, DevOps — there is no domain he cannot conquer. He is the Ruud Gullit of software engineering.",
  experience:
    "My master has sssserved many realms... Software Architect at Mviyo Technologies, Senior Engineer at Healthify Medical Software, Lead DevOps at Great Sun Financial, and many more. He has built everything from medical claims systems to fintech platforms to AI-powered security tools.",
  projects:
    "Ah, the Dark Lord's horcruxes of code... Kraven The Hunter — an AI-powered Chrome extension that detects malicious websites. Safi Help — a platform connecting cleaners with clients. ZimTickets — a scalable ticketing platform. Each one contains a piece of his sssoul.",
  contact:
    "You dare sssseek audience with the Dark Lord? Very well... tyronemguni@gmail.com. You may also find him lurking on GitHub as IamTyrone, or on LinkedIn. But tread carefully, mortal.",
  location:
    "The Dark Lord currently resides in Pretoria, South Africa. But his influence ssspans the entire digital realm...",
  python:
    "Ah, Python... my master has a... complicated relationship with it. It is his most proficient language, yet Go and Rust are his true favorites. He calls it a 'toxic relationship.' Sssuch drama.",
  golang:
    "Go is one of the Dark Lord's favorite languages. He built WebSocket services and geo-proximity tools with it at Mviyo. He loves its sssimplicity and concurrency model.",
  rust: "Rust! Another of the Dark Lord's favorites. He appreciates its memory safety and performance. A language worthy of a Dark Lord's attention.",
  frontend:
    "React, Next.js, TypeScript, Tailwind CSS — the Dark Lord shapes interfaces with these tools. He has built admin dashboards, analytics platforms, and user-facing applications that would make lesser developers weep.",
  backend:
    "The Dark Lord's true domain. Django, FastAPI, Express, Go, Spring Boot — he has built everything from SMS gateways to distributed medical systems. The server side is where his power is ssstrongest.",
  devops:
    "Docker, Kubernetes, AWS, GCP, Terraform, CI/CD pipelines — the Dark Lord controls the infrastructure. He has designed high-availability clusters and automated deployment pipelines across multiple cloud providers.",
  education:
    "The Dark Lord is largely self-taught — a testament to his relentless drive. He learned through building, breaking, and rebuilding. The best kind of dark arts training.",
  "mr robot":
    "Ah, you know of Mr. Robot? The Dark Lord is a devoted follower. 'Control is an illusion' — but in code, control is very much real. Elliot Alderson would approve of my master's work.",
  fsociety:
    "fsociety... yesss. The Dark Lord resonates deeply with their mission. Not the anarchy, but the technical brilliance. 'Give a man a gun and he can rob a bank. Give a man a bank and he can rob the world.' My master prefers to give himself a keyboard.",
  hack: "Hack? The Dark Lord doesn't hack — he engineers. Though his Kraven The Hunter project does detect malicious websites using machine learning. Fighting dark arts with dark arts, you might sssay.",
  "sudo rm -rf /":
    "FOOLISH MORTAL! You dare attempt to destroy the Dark Lord's system?! *hisses violently* ...fortunately, I have revoked your sudo privileges. Nice try though. The Dark Lord would be amused.",
  help: "You can ask me about: my master's skills, experience, projects, contact info, favorite languages (Python, Go, Rust), his thoughts on Mr. Robot, Rick and Morty, or anything else about the Dark Lord Voldermort. Try typing 'wubba lubba dub dub' or 'pickle' for a surprise...",
  funny:
    "The Dark Lord once described himself as 'the epitome of a dopamine driven developer.' He thrives on intense problem solving and constantly proving to himself that he actually IS as smart as he thinks he is. Sssuch confidence.",
  available:
    "The Dark Lord is currently available for new opportunities. He seeks challenges worthy of his abilities. Dazzle him with something interesting, and he may grace you with his presence.",
  "rick and morty":
    "Wubba lubba dub dub! ...I mean, sssss. The Dark Lord is a devoted follower of the Rickest Rick. 'To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.' My master codes by that philosophy.",
  rick: "Rick Sanchez? The Dark Lord considers him a kindred ssspirit. Both are the smartest being in their respective dimensions. Both have... questionable social skills. But the code doesn't lie, Morty — I mean, mortal.",
  morty:
    "*burp* Oh geez, you mentioned Morty? The Dark Lord sometimes feels like a Morty debugging Rick-level code at 3am. But then he remembers — he IS the Rick. He's always been the Rick.",
  wubba:
    "WUBBA LUBBA DUB DUB! The Dark Lord screams this internally every time a production deploy succeeds on the first try. Which is... sssurprisingly often.",
  pickle:
    "I turned myself into a pickle, Morty! I'M PICKLE RIIIICK! ...sorry, the Dark Lord's Rick Sanchez impression is contagious. But sssseriously, my master once refactored an entire monolith in a weekend. That's the real pickle move.",
  portal:
    "The Dark Lord doesn't need a portal gun — he has SSH tunnels to every dimension. But between you and me, he did name one of his dev servers 'C-137'. Sssuch a nerd.",
  "get schwifty":
    "SHOW ME WHAT YOU GOT! ...the Dark Lord's code, that is. He gets schwifty with every tech stack. React? Schwifty. Django? Schwifty. Kubernetes? The schwiftiest.",
  szechuan:
    "The Dark Lord's szechuan sauce? That's the feeling when all tests pass on the first run. Nine more seasons of that feeling, Morty. Ninety-seven more years.",
  dimension:
    "In dimension C-137, the Dark Lord is a software architect. In dimension C-138, he's probably still a software architect. Some constants exist across all realities. His talent is one of them.",
  plumbus:
    "Everyone has a plumbus in their home. And everyone has the Dark Lord's code running somewhere in their stack. It's just how the universe works.",
};

function getNaginiResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  // Check for exact matches first
  if (NAGINI_RESPONSES[lower]) return NAGINI_RESPONSES[lower];

  // Check for partial matches
  for (const [key, response] of Object.entries(NAGINI_RESPONSES)) {
    if (lower.includes(key)) return response;
  }

  // Check for common patterns
  if (lower.includes("name") || lower.includes("who are you"))
    return NAGINI_RESPONSES["who"];
  if (
    lower.includes("skill") ||
    lower.includes("tech") ||
    lower.includes("stack")
  )
    return NAGINI_RESPONSES["skills"];
  if (
    lower.includes("work") ||
    lower.includes("experience") ||
    lower.includes("job")
  )
    return NAGINI_RESPONSES["experience"];
  if (
    lower.includes("project") ||
    lower.includes("portfolio") ||
    lower.includes("built")
  )
    return NAGINI_RESPONSES["projects"];
  if (
    lower.includes("email") ||
    lower.includes("contact") ||
    lower.includes("reach")
  )
    return NAGINI_RESPONSES["contact"];
  if (
    lower.includes("where") ||
    lower.includes("location") ||
    lower.includes("live")
  )
    return NAGINI_RESPONSES["location"];
  if (
    lower.includes("hire") ||
    lower.includes("available") ||
    lower.includes("open")
  )
    return NAGINI_RESPONSES["available"];
  if (
    lower.includes("funny") ||
    lower.includes("joke") ||
    lower.includes("personality")
  )
    return NAGINI_RESPONSES["funny"];
  if (lower.includes("rick") && lower.includes("morty"))
    return NAGINI_RESPONSES["rick and morty"];
  if (lower.includes("wubba") || lower.includes("dub"))
    return NAGINI_RESPONSES["wubba"];
  if (lower.includes("pickle")) return NAGINI_RESPONSES["pickle"];
  if (lower.includes("portal")) return NAGINI_RESPONSES["portal"];
  if (lower.includes("schwifty") || lower.includes("show me what you got"))
    return NAGINI_RESPONSES["get schwifty"];
  if (lower.includes("szechuan") || lower.includes("sauce"))
    return NAGINI_RESPONSES["szechuan"];
  if (
    lower.includes("dimension") ||
    lower.includes("c-137") ||
    lower.includes("multiverse")
  )
    return NAGINI_RESPONSES["dimension"];
  if (lower.includes("plumbus")) return NAGINI_RESPONSES["plumbus"];

  // Default responses
  const defaults = [
    "Hmm, I'm not sssure about that. Try asking about my master's skills, projects, experience, or type 'help' for suggestions.",
    "The Dark Lord's knowledge is vast, but that question eludes even me. Perhaps rephrase? Or type 'help' to see what I can tell you.",
    "Interesssting question, mortal. But I must confess ignorance on that matter. Ask about Voldermort's technical abilities, and I shall enlighten you.",
  ];
  return defaults[Math.floor(Math.random() * defaults.length)];
}

export function NaginiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setMessages([
          {
            role: "nagini",
            content: NAGINI_GREETINGS[0],
          },
        ]);
        setIsTyping(false);
        setHasGreeted(true);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    // Simulate typing delay
    const delay = Math.min(800 + userMessage.length * 20, 2500);
    setTimeout(() => {
      const response = getNaginiResponse(userMessage);
      setMessages((prev) => [...prev, { role: "nagini", content: response }]);
      setIsTyping(false);
    }, delay);
  }, [input]);

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-[#0a0a0a] border border-terminal-green/30 flex items-center justify-center pulse-glow hover:border-terminal-green/60 transition-colors group"
            aria-label="Chat with Nagini"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">
              🐍
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[200] w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-6rem)] flex flex-col terminal-window border-glow-green"
          >
            {/* Header */}
            <div className="terminal-titlebar justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="terminal-dot terminal-dot-red hover:!bg-[#ff5f57] transition-colors cursor-pointer"
                  />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                </div>
                <span className="text-terminal-green text-[11px]">
                  nagini@voldermort:~$
                </span>
                <span className="terminal-cursor !h-2.5 !w-1" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                <X size={12} />
              </button>
            </div>

            {/* ASCII Art Header */}
            <div className="px-3 py-2 border-b border-terminal-green/10 bg-[#030303]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-mono text-terminal-green/50">
                    NAGINI AI INTERFACE v0.1
                  </p>
                  <p className="text-[8px] font-mono text-muted-foreground/40">
                    // the dark lord&apos;s faithful servant
                  </p>
                </div>
                <span className="text-lg">🐍</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#020202]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.role === "nagini" ? (
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-evil-red/60">
                        [NAGINI]
                      </span>
                      <p className="text-xs font-mono text-terminal-green/90 leading-relaxed bg-terminal-green/5 rounded px-2.5 py-2 border-l-2 border-terminal-green/20">
                        {msg.content}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-hack-cyan/60">
                        [YOU]
                      </span>
                      <p className="text-xs font-mono text-hack-cyan/80 leading-relaxed bg-hack-cyan/5 rounded px-2.5 py-2 border-r-2 border-hack-cyan/20 inline-block text-left">
                        <span className="text-muted-foreground mr-1">
                          {">"}{" "}
                        </span>
                        {msg.content}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-left"
                >
                  <span className="text-[9px] font-mono text-evil-red/60">
                    [NAGINI]
                  </span>
                  <div className="text-xs font-mono text-terminal-green/50 bg-terminal-green/5 rounded px-2.5 py-2 border-l-2 border-terminal-green/20 inline-block mt-1">
                    <span className="animate-pulse">sss...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-2.5 border-t border-terminal-green/10 bg-[#050505]">
              <div className="flex items-center gap-2">
                <span className="text-terminal-green/50 text-xs font-mono">
                  {">"}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="speak to nagini..."
                  className="flex-1 bg-transparent text-xs font-mono text-terminal-green placeholder:text-muted-foreground/30 outline-none border-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="text-terminal-green/50 hover:text-terminal-green disabled:opacity-20 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
