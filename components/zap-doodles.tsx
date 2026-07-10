"use client";

/**
 * readme.com-style hand-drawn doodles that draw themselves and flicker
 * around the hero headline — now rendered as software-development tool
 * glyphs (code tag, braces, terminal, git branch, database, Node hexagon)
 * instead of plain lightning bolts, to tie the hero to the craft.
 * Pure CSS animations (see .zap-doodle / .spark-pop in globals.css).
 */

// Monoline dev-tool icons on a 24x24 grid. Stroke-based so the
// `.zap-doodle` self-drawing animation applies to each path.
const DEV_ICONS: Record<string, string> = {
  // </> — source code
  code: "M8 7 L3 12 L8 17 M16 7 L21 12 L16 17 M14 5 L10 19",
  // { } — braces
  braces:
    "M9 4 C6 4 7 10 4 12 C7 14 6 20 9 20 M15 4 C18 4 17 10 20 12 C17 14 18 20 15 20",
  // >_ terminal window
  terminal: "M3 5 H21 V19 H3 Z M6 9 L9 12 L6 15 M12 15 H16",
  // git branch — fork
  git: "M7 4 L7 20 M7 8 C7 12 17 10 17 14 M17 4 L17 8",
  // database cylinder
  database:
    "M4 6 C4 4 20 4 20 6 L20 18 C20 20 4 20 4 18 Z M4 6 C4 8 20 8 20 6 M4 12 C4 14 20 14 20 12",
  // hexagon — Node runtime
  hexagon: "M12 3 L20 7.5 L20 16.5 L12 21 L4 16.5 L4 7.5 Z",
};

function DevIcon({
  icon,
  className,
  color,
  delay = 0,
  flip = false,
}: {
  icon: keyof typeof DEV_ICONS;
  className: string;
  color: string;
  delay?: number;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`zap-doodle absolute pointer-events-none ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      fill="none"
      aria-hidden
    >
      <path
        d={DEV_ICONS[icon]}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

function Spark({
  className,
  color,
  delay = 0,
}: {
  className: string;
  color: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <g className="spark-pop" style={{ animationDelay: `${delay}s` }}>
        <path
          d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function ZapDoodles() {
  return (
    <div className="absolute -inset-x-10 -inset-y-8 sm:-inset-x-16 sm:-inset-y-10">
      <DevIcon
        icon="code"
        className="w-7 sm:w-9 -top-1 left-0"
        color="var(--terminal-green)"
        delay={0}
      />
      <DevIcon
        icon="braces"
        className="w-6 sm:w-8 top-2 right-0"
        color="var(--hack-cyan)"
        delay={1.1}
      />
      <DevIcon
        icon="git"
        className="w-5 sm:w-7 bottom-0 right-8 sm:right-14"
        color="var(--evil-red)"
        delay={2.2}
      />
      <DevIcon
        icon="terminal"
        className="w-6 sm:w-8 top-6 left-10 sm:left-24"
        color="var(--hack-cyan)"
        delay={1.7}
      />
      <DevIcon
        icon="database"
        className="w-5 sm:w-7 -bottom-2 left-4 sm:left-10"
        color="var(--terminal-green)"
        delay={0.3}
      />
      <DevIcon
        icon="hexagon"
        className="w-5 sm:w-6 top-0 right-10 sm:right-24"
        color="var(--evil-red)"
        delay={2.8}
      />
      <Spark
        className="w-3 sm:w-4 bottom-2 left-1/2 -translate-x-1/2"
        color="var(--terminal-green)"
        delay={0.6}
      />
      <Spark
        className="w-3 sm:w-4 top-4 right-4 sm:right-8"
        color="var(--hack-cyan)"
        delay={3.2}
      />
    </div>
  );
}
