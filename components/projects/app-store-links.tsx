import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { MobileApp } from "@/lib/projects/app-links";

function StoreButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof FaApple;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-terminal-green/20 text-xs font-mono text-muted-foreground hover:text-terminal-green hover:border-terminal-green/50 hover:bg-terminal-green/5 transition-colors"
    >
      <Icon size={14} />
      <span>{label}</span>
    </Link>
  );
}

/** "Get the apps" block on a project detail page. */
export function AppStoreSection({ apps }: { apps: MobileApp[] }) {
  if (apps.length === 0) return null;

  return (
    <div id="apps" className="scroll-mt-24">
      <h3 className="text-xl font-bold mb-4">Get the apps</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {apps.map((app) => (
          <div
            key={app.name}
            className="bg-muted/50 rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              {app.icon && (
                <Image
                  src={app.icon}
                  alt={`${app.name} app icon`}
                  width={44}
                  height={44}
                  className="rounded-lg flex-shrink-0"
                />
              )}
              <div>
                <p className="font-semibold">{app.name}</p>
                <p className="text-sm text-muted-foreground">{app.audience}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <StoreButton href={app.ios} icon={FaApple} label="App Store" />
              <StoreButton
                href={app.android}
                icon={FaGooglePlay}
                label="Google Play"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
