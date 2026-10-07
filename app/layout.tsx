import "./globals.css";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { CRTOverlay } from "@/components/crt-overlay";
import { NaginiChat } from "@/components/nagini-chat";
import { EasterEggs } from "@/components/easter-eggs";
import { MatrixRain } from "@/components/matrix-rain";
import { MotionProvider } from "@/components/motion-provider";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Voldermort // Tyrone Mguni // Software Engineer",
  description:
    "He Who Must Not Be Debugged. The Rickest developer in dimension C-137. Full-stack software engineer in Pretoria. Mostly payments, ERPs and the AWS bills underneath them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${jetbrains.variable} noise-bg`}
        suppressHydrationWarning
      >
        <MotionProvider>
          <MatrixRain />
          <CRTOverlay />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <NaginiChat />
          <EasterEggs />
        </MotionProvider>
      </body>
    </html>
  );
}
