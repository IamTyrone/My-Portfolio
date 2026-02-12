"use client";

export function SkullAscii({ className = "" }: { className?: string }) {
  const skull = `
      _______________
     /               \\
    /                 \\
   /    ___     ___    \\
  |    /   \\   /   \\    |
  |   | x   | | x  |   |
  |    \\___/   \\___/    |
  |                     |
  |      \\       /      |
   \\      \\_____/      /
    \\                 /
     \\    |||||||    /
      \\             /
       \\_________  /
  `;

  return (
    <pre
      className={`text-terminal-green text-glow-green text-[0.5rem] sm:text-xs leading-tight select-none ${className}`}
      aria-hidden="true"
    >
      {skull}
    </pre>
  );
}

export function SnakeAscii({ className = "" }: { className?: string }) {
  const snake = `
    /^\\/^\\
   _|__|  O|
  \\/     /~\\_/ \\
   \\____|__________/  \\
          \\_______      \\
                  \`\\     \\                 \\
                    |     |                  \\
                   /      /                    \\
                  /     /                       \\
                /      /                         \\ \\
               /     /                            \\  \\
             /     /             _----_            \\   \\
            /     /           _-~      ~-_         |   |
           (      (        _-~    _--_    ~-_     _/   |
            \\      ~-____-~    _-~    ~-_    ~-_-~    /
              ~-_           _-~          ~-_       _-~
                 ~--______-~                ~-___-~
  `;

  return (
    <pre
      className={`text-terminal-green text-glow-green text-[0.35rem] sm:text-[0.45rem] leading-tight select-none ${className}`}
      aria-hidden="true"
    >
      {snake}
    </pre>
  );
}

export function DarkMarkAscii({ className = "" }: { className?: string }) {
  const mark = `
  ╔══════════════════════════════════════╗
  ║  ▓▓▓   ▓▓▓  ▓▓▓▓▓▓  ▓▓    ▓▓▓▓▓▓  ║
  ║  ▓▓▓   ▓▓▓  ▓▓  ▓▓  ▓▓    ▓▓  ▓▓  ║
  ║  ▓▓▓   ▓▓▓  ▓▓  ▓▓  ▓▓    ▓▓  ▓▓  ║
  ║   ▓▓▓ ▓▓▓   ▓▓  ▓▓  ▓▓    ▓▓  ▓▓  ║
  ║    ▓▓▓▓▓    ▓▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓▓  ║
  ╚══════════════════════════════════════╝
  `;

  return (
    <pre
      className={`text-evil-red text-glow-red text-[0.4rem] sm:text-xs leading-tight select-none ${className}`}
      aria-hidden="true"
    >
      {mark}
    </pre>
  );
}
