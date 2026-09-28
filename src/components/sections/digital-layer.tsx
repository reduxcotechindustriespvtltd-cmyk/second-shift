"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bell, Home, Calendar, Trophy, Info, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Logo } from "@/components/ui/logo";
import { digitalLayer } from "@/data/content";

function AppHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center justify-between px-4 pb-3 pt-6">
      <div className="flex items-center gap-2">
        <Logo mark="icon" />
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-bold uppercase tracking-wide text-off-white">{title}</span>
          <span className="text-[9px] uppercase tracking-widest text-off-white/40">{subtitle}</span>
        </div>
      </div>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
        <Bell className="h-3.5 w-3.5 text-off-white/60" />
      </span>
    </div>
  );
}

function AppTabBar({ active }: { active: "home" | "fixtures" | "table" | "about" }) {
  const tabs = [
    { key: "home", label: "Home", icon: Home },
    { key: "fixtures", label: "Fixtures", icon: Calendar },
    { key: "table", label: "Table", icon: Trophy },
    { key: "about", label: "About", icon: Info },
  ] as const;

  return (
    <div className="mt-auto flex items-center justify-between border-t border-white/5 px-4 py-3">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.key === active;
        return (
          <span
            key={tab.key}
            className={`flex flex-col items-center gap-1 text-[8px] uppercase tracking-wide ${
              isActive ? "text-signal-orange" : "text-off-white/30"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {tab.label}
          </span>
        );
      })}
    </div>
  );
}

function FixturesScreen() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Second Shift" subtitle="Schedule · Week 8" />
      <div className="flex-1 space-y-2.5 overflow-hidden px-3">
        {digitalLayer.fixtures.map((fx, i) => (
          <div
            key={fx.home}
            className={`rounded-xl border p-3 ${
              i === 0 ? "border-signal-orange/60 bg-white/[0.04]" : "border-white/5 bg-white/[0.02]"
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-off-white/60">
                Football
              </span>
              <span className="text-[8px] font-semibold text-off-white/50">{fx.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="max-w-[38%] truncate text-[9px] font-bold text-off-white">{fx.home}</span>
              <span className="text-[8px] font-black text-signal-orange">VS</span>
              <span className="max-w-[38%] truncate text-right text-[9px] font-bold text-off-white">{fx.away}</span>
            </div>
          </div>
        ))}
      </div>
      <AppTabBar active="fixtures" />
    </div>
  );
}

function StandingsScreen() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Second Shift" subtitle="Standings · Matchday 8" />
      <div className="flex gap-1.5 px-3 pb-3">
        {["Cricket", "Football", "Pickleball"].map((s, i) => (
          <span
            key={s}
            className={`flex-1 rounded-lg py-2 text-center text-[8px] font-bold uppercase ${
              i === 0
                ? "border border-signal-orange/60 text-signal-orange"
                : "border border-white/5 text-off-white/40"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex-1 overflow-hidden px-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-off-white">Cricket Table</p>
        <div className="mb-1.5 grid grid-cols-[1.2rem_1fr_1.2rem_1.2rem_1.2rem_1.2rem_1.5rem] gap-1 text-[7px] uppercase tracking-wide text-off-white/40">
          <span>#</span>
          <span>Team</span>
          <span>P</span>
          <span>W</span>
          <span>D</span>
          <span>L</span>
          <span>Pts</span>
        </div>
        <div className="space-y-1.5">
          {digitalLayer.standings.slice(0, 6).map((row) => (
            <div
              key={row.team}
              className="grid grid-cols-[1.2rem_1fr_1.2rem_1.2rem_1.2rem_1.2rem_1.5rem] items-center gap-1 rounded-lg bg-white/[0.02] px-1.5 py-1.5"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-signal-orange/20 text-[7px] font-bold text-signal-orange">
                {row.pos}
              </span>
              <span className="truncate text-[8px] font-semibold text-off-white">{row.team}</span>
              <span className="text-[7px] text-off-white/50">{row.p}</span>
              <span className="text-[7px] text-off-white/50">{row.w}</span>
              <span className="text-[7px] text-off-white/50">{row.d}</span>
              <span className="text-[7px] text-off-white/50">{row.l}</span>
              <span className="text-[8px] font-black text-signal-orange">{row.pts}</span>
            </div>
          ))}
        </div>
      </div>
      <AppTabBar active="table" />
    </div>
  );
}

function HomeScreen() {
  const match = digitalLayer.upcomingMatch;
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Second Shift" subtitle="Sunday League · S01" />
      <div className="px-3">
        <div className="relative overflow-hidden rounded-xl border border-signal-orange/40 bg-gradient-to-b from-white/[0.06] to-transparent p-3">
          <div className="mb-3 flex items-center justify-between text-[7px] font-semibold uppercase tracking-wide text-off-white/50">
            <span className="rounded bg-white/10 px-1.5 py-0.5">{match.sport}</span>
            <span>{match.date}</span>
          </div>
          <div className="flex items-center justify-between px-1">
            <ChevronLeft className="h-3 w-3 text-off-white/30" />
            <div className="flex flex-col items-center gap-1">
              <span className="h-6 w-6 rounded-full bg-warm-gold/70" />
              <span className="text-[7px] font-bold text-off-white">{match.home.code}</span>
              <span className="text-[6px] text-off-white/40">C · {match.home.captain}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-signal-orange">{match.date.split("· ")[1]}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="h-6 w-6 rounded-full bg-deep-navy" />
              <span className="text-[7px] font-bold text-off-white">{match.away.code}</span>
              <span className="text-[6px] text-off-white/40">C · {match.away.captain}</span>
            </div>
            <ChevronRight className="h-3 w-3 text-off-white/30" />
          </div>
          <div className="mt-3 flex items-center justify-center gap-1 text-[6px] text-off-white/40">
            <MapPin className="h-2.5 w-2.5" /> {match.ground}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-wide text-off-white">Previous Scores</span>
          <span className="text-[7px] font-semibold uppercase text-signal-orange">All Results →</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {digitalLayer.previousScores.map((score) => (
            <div key={score.home} className="rounded-lg bg-white/[0.03] p-2 text-[7px]">
              <div className="mb-1 flex items-center justify-between text-off-white/40">
                <span>Cricket · FT</span>
                <span>Result</span>
              </div>
              <div className="flex items-center justify-between font-bold text-off-white">
                <span>{score.home}</span>
                <span>{score.homeScore}</span>
              </div>
              <div className="flex items-center justify-between font-bold text-off-white">
                <span>{score.away}</span>
                <span className="text-signal-orange">{score.awayScore}</span>
              </div>
              <p className="mt-1 text-off-white/30">{score.date}</p>
            </div>
          ))}
        </div>
      </div>
      <AppTabBar active="home" />
    </div>
  );
}

function FloatingPhone({
  children,
  rotate,
  index,
}: {
  children: React.ReactNode;
  rotate: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -30 : 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <PhoneMockup>{children}</PhoneMockup>
    </motion.div>
  );
}

export function DigitalLayer() {
  return (
    <section id="app" className="grain relative overflow-hidden bg-pure-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading className="font-display text-4xl font-black uppercase leading-[0.95] text-off-white sm:text-5xl">
              {digitalLayer.headline}
            </SectionHeading>
            <ul className="flex flex-wrap gap-3">
              {digitalLayer.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-off-white/70"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div>
              <MagneticButton href={digitalLayer.cta.href}>{digitalLayer.cta.label}</MagneticButton>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="hidden sm:block sm:-mr-8 sm:mt-10">
              <FloatingPhone rotate={-8} index={0}>
                <FixturesScreen />
              </FloatingPhone>
            </div>
            <div className="z-10">
              <FloatingPhone rotate={0} index={1}>
                <HomeScreen />
              </FloatingPhone>
            </div>
            <div className="hidden sm:-ml-8 sm:mt-10 sm:block">
              <FloatingPhone rotate={8} index={2}>
                <StandingsScreen />
              </FloatingPhone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
