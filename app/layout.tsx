import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { CRTOverlay } from "@/components/crt-overlay";
import { NaginiChat } from "@/components/nagini-chat";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Voldermort // Tyrone Mguni — Software Engineer",
  description:
    "He Who Must Not Be Debugged. Full-stack software engineer specializing in modern web technologies, cloud architecture, and scalable solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${jetbrains.variable} noise-bg`}>
        <CRTOverlay />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <NaginiChat />
      </body>
    </html>
  );
}
