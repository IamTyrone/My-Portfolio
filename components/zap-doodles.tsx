"use client";

/**
 * readme.com-style electric doodles: hand-drawn lightning bolts and
 * sparks that draw themselves and flicker around the hero headline.
 * Pure CSS animations (see .zap-doodle / .spark-pop in globals.css).
 */

function Bolt({
  className,
  color,
  delay = 0,
  flip = false,
}: {
  className: string;
  color: string;
  delay?: number;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 56"
      className={`zap-doodle absolute pointer-events-none ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      fill="none"
      aria-hidden
    >
      <polyline
        points="26,2 10,26 20,26 8,54 32,20 20,20 34,2"
        stroke={color}
        strokeWidth="2.5"
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

function Squiggle({
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
      viewBox="0 0 60 16"
      className={`zap-doodle absolute pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 8 Q9 2 16 8 T30 8 T44 8 T58 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

export function ZapDoodles() {
  return (
    <div className="absolute -inset-x-10 -inset-y-8 sm:-inset-x-16 sm:-inset-y-10">
      <Bolt
        className="w-7 sm:w-10 -top-1 left-0"
        color="var(--terminal-green)"
        delay={0}
      />
      <Bolt
        className="w-6 sm:w-8 top-2 right-0"
        color="var(--hack-cyan)"
        delay={1.1}
        flip
      />
      <Bolt
        className="w-5 sm:w-7 bottom-0 right-8 sm:right-14"
        color="var(--evil-red)"
        delay={2.2}
      />
      <Spark
        className="w-4 sm:w-5 top-0 right-10 sm:right-20"
        color="var(--terminal-green)"
        delay={0.6}
      />
      <Spark
        className="w-3 sm:w-4 bottom-2 left-6 sm:left-12"
        color="var(--hack-cyan)"
        delay={2.8}
      />
      <Spark
        className="w-3 sm:w-4 top-6 left-10 sm:left-24"
        color="var(--evil-red)"
        delay={1.7}
      />
      <Squiggle
        className="w-12 sm:w-16 -bottom-3 left-1/2 -translate-x-1/2"
        color="var(--terminal-green)"
        delay={0.3}
      />
    </div>
  );
}
