"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Download, GraduationCap, MapPin } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import { TerminalWindow } from "@/components/terminal-window";
import { getTechIcon, SkillChip } from "@/lib/tech-icons";
import {
  certifications,
  educationStats,
  institutions,
  plannedCertifications,
  selfTaught,
} from "@/lib/education";

export default function Education() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-evil-red font-mono text-sm">
                voldermort@education
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                cat /etc/voldermort/education.json
              </span>
            </div>
            <GlitchText
              text="EDUCATION"
              as="h1"
              className="text-3xl md:text-5xl font-bold font-display tracking-wider mb-3"
            />
            <p className="text-muted-foreground text-xs font-mono">
              {"//"} the paperwork says finance. the terminal disagrees.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10"
          >
            {educationStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-terminal-green/15 bg-[#050505] px-3 py-3 rounded-sm"
              >
                <p className="text-terminal-green font-display text-lg tracking-wider text-glow-green">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Formal education */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@education
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                ls -la ~/qualifications
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-mono ml-2">
              {"//"} the official record, stamped and everything
            </p>
          </motion.div>

          <div className="space-y-4">
            {institutions.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l border-terminal-green/20"
              >
                <div
                  className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-terminal-green border border-terminal-green/60"
                  style={{ boxShadow: "0 0 6px rgba(0,255,65,0.4)" }}
                />

                <div className="terminal-window">
                  <div className="terminal-titlebar !py-1.5">
                    <GraduationCap
                      size={11}
                      className="text-hack-cyan mr-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-terminal-green text-[10px] font-mono truncate">
                      {school.qualification} ({school.field})
                    </span>
                    <span className="text-muted-foreground text-[10px] font-mono ml-auto pl-2 shrink-0">
                      {school.period}
                    </span>
                  </div>
                  <div className="terminal-body !py-4 !px-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                      <span className="text-evil-red text-[11px] font-mono">
                        @{school.school}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                        <MapPin size={10} className="text-hack-cyan" />
                        {school.location}
                      </span>
                    </div>

                    <p className="text-terminal-green/80 text-xs font-mono leading-relaxed mb-3">
                      {school.note}
                    </p>

                    <div className="space-y-1 mb-4">
                      {school.highlights.map((line, i) => (
                        <p
                          key={i}
                          className="text-[10px] font-mono text-terminal-green/60"
                        >
                          <span className="text-terminal-green/30 mr-1">+</span>{" "}
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {school.tags.map((tag) => (
                        <SkillChip key={tag} name={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@education
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                openssl verify ~/certs/*.pem
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-mono ml-2">
              {"//"} badges earned the boring way, by sitting the exam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="terminal-window"
              >
                <div className="terminal-titlebar !py-1.5">
                  <Award
                    size={11}
                    className="text-evil-red mr-2 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-terminal-green text-[10px] font-mono truncate">
                    {cert.id}.pem
                  </span>
                  <span className="text-muted-foreground text-[10px] font-mono ml-auto pl-2 shrink-0">
                    {cert.issued}
                  </span>
                </div>
                <div className="terminal-body !py-4 !px-4">
                  <p className="text-terminal-green text-xs font-mono mb-1">
                    {cert.name}
                  </p>
                  <p className="text-evil-red text-[10px] font-mono mb-3">
                    @{cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-[11px] font-mono leading-relaxed mb-4">
                    {cert.note}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <SkillChip key={tag} name={tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* In progress */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@education
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                watch -n 1 ~/certs/queue
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-mono ml-2">
              {"//"} currently studying. not earned yet, so they get their own
              shelf.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {plannedCertifications.map((cert, index) => {
              const { icon: Icon, color } = getTechIcon(cert.icon);
              const isNext = cert.status === "next";

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className={`group relative flex flex-col p-4 rounded-sm border bg-[#050505] transition-colors duration-200 ${
                    isNext
                      ? "border-terminal-green/50 hover:border-terminal-green"
                      : "border-terminal-green/12 border-dashed hover:border-terminal-green/35"
                  }`}
                  style={
                    isNext
                      ? { boxShadow: "0 0 18px rgba(0,255,65,0.08)" }
                      : undefined
                  }
                >
                  {isNext && (
                    <span className="absolute -top-2 left-3 px-1.5 py-0.5 text-[9px] font-mono bg-[#050505] border border-terminal-green/50 text-terminal-green rounded-sm">
                      up next
                    </span>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <Icon
                      className={`h-7 w-7 shrink-0 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 ${
                        isNext
                          ? "grayscale-0 opacity-95"
                          : "grayscale-[0.55] opacity-60"
                      }`}
                      style={{ color }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-terminal-green text-xs font-mono truncate">
                        {cert.abbr}
                      </p>
                      <p className="text-muted-foreground text-[10px] font-mono leading-snug">
                        {cert.name}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-terminal-green/55 leading-relaxed mb-3">
                    {cert.note}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-terminal-green/10">
                    <span className="text-evil-red text-[9px] font-mono truncate">
                      @{cert.issuer}
                    </span>
                    <span
                      className={`text-[9px] font-mono shrink-0 ${
                        isNext ? "text-terminal-green" : "text-muted-foreground"
                      }`}
                    >
                      {isNext ? "studying" : "queued"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Self taught */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@education
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                history | grep -c 'man '
              </span>
            </div>
          </motion.div>

          <TerminalWindow title={selfTaught.title}>
            <p className="text-terminal-green/80 text-sm leading-relaxed mb-4">
              <span className="text-hack-cyan">## </span>
              {selfTaught.body}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {selfTaught.subjects.map((subject) => (
                <SkillChip key={subject} name={subject} size="md" />
              ))}
            </div>
          </TerminalWindow>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/about"
              className="zap-hover inline-flex items-center gap-2 px-5 py-2 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-200 rounded-sm"
            >
              $ cd ../about
            </Link>
            <Link
              href="/resume/Tyrone_Mguni.pdf"
              target="_blank"
              className="zap-hover inline-flex items-center gap-2 px-5 py-2 text-xs font-mono border border-hack-cyan/30 text-hack-cyan hover:bg-hack-cyan/10 hover:border-hack-cyan transition-all duration-200 rounded-sm"
            >
              <Download size={12} />$ wget resume/Tyrone_Mguni.pdf
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
