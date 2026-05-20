"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useInView, animate } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Menu, Mail, Star, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const ORANGE    = "#7C3AED";
const TURQUOISE = "#6D28D9";
const YELLOW    = "#FFD93D";
const CREAM     = "#F5F3FF";
const DARK      = "#1A2B35";

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-white font-body" style={{ color: DARK, overflowX: "clip" }}>
      <LeftSidebar />
      <div className="pl-0 lg:pl-[52px]">
        {/* Hero breaks out of sidebar offset to be truly full-width */}
        <div className="lg:-ml-[52px]">
          <HeroSection />
        </div>
        <MissionStatement />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <SubjectsSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}

/* ─── FULL-SCREEN MENU ───────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Features",    href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Subjects",    href: "#subjects" },
  { label: "Pricing",     href: "#pricing" },
  { label: "Waitlist",    href: "#cta" },
];

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: ORANGE }}
      initial={{ clipPath: "circle(0% at 26px 26px)" }}
      animate={{ clipPath: open ? "circle(150% at 26px 26px)" : "circle(0% at 26px 26px)" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!open}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/20"
        aria-label="Close menu"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>


      {/* Nav links */}
      <div className="flex flex-1 flex-col items-start justify-center px-12 sm:px-20">
        <p className="mb-8 text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">Navigation</p>
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -32 }}
              transition={{ delay: open ? 0.18 + i * 0.07 : 0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center gap-4 font-display font-extrabold text-white transition-opacity hover:opacity-70"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
              >
                <span className="text-sm font-extrabold text-white/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
                <ArrowRight className="h-6 w-6 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social icons */}
        <div className="mt-16 flex items-center gap-4">
          {[
            {
              label: "Instagram",
              href: "#",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              ),
            },
            {
              label: "YouTube",
              href: "#",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke="currentColor" strokeWidth="1.5"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor"/>
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "#",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Kiwo wordmark bottom-right */}
      <span
        className="pointer-events-none absolute bottom-6 right-8 select-none font-display font-extrabold text-white/10"
        style={{ fontSize: "clamp(5rem, 14vw, 11rem)", lineHeight: 1 }}
      >
        KIWO
      </span>
    </motion.div>
  );
}

/* ─── LEFT SIDEBAR ───────────────────────────────────────────────────────── */
function LeftSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Mobile hamburger — only on small screens */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full shadow-md transition hover:bg-black/5 lg:hidden"
        style={{ background: "white", color: DARK }}
      >
        <Menu className="h-4 w-4" />
      </button>
      <div
        className="fixed left-0 top-0 z-50 hidden h-screen w-[52px] flex-col items-center justify-between border-r py-5 lg:flex"
        style={{ background: "white", borderColor: "rgba(0,0,0,0.08)" }}
      >
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/5"
          style={{ color: DARK }}
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center gap-3">
          {NAV_LINKS.slice(0, 3).map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="h-2 w-2 rounded-full transition"
              style={{ background: "rgba(0,0,0,0.15)" }}
              onMouseEnter={e => (e.currentTarget.style.background = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.15)")}
            />
          ))}
        </div>

        <span
          className="select-none font-display font-extrabold"
          style={{ writingMode: "vertical-rl", fontSize: 18, letterSpacing: "0.18em", transform: "rotate(180deg)", color: "rgba(0,0,0,0.2)" }}
        >
          KIWO
        </span>
      </div>
    </>
  );
}


/* ─── HERO ───────────────────────────────────────────────────────────────── */
const HERO_FEATURES = [
  { icon: "/images/icon-gamepad.png", title: "Game-Based Learning",            desc: "Lessons feel like play, progress feels like fun." },
  { icon: "/images/icon-target.png",  title: "Personalized for Every Child",   desc: "Adapts to each child's pace, style, and strengths." },
  { icon: "/images/icon-shield.png",  title: "Track Real Progress",            desc: "Insights you can see. Growth you can celebrate." },
  { icon: "/images/icon-heart.png",   title: "Loved by Kids, Trusted by Parents", desc: "A safe, engaging space where kids love to learn." },
];

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-hidden" style={{ background: "#2A1B6E" }}>
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(30,18,90,0.88) 0%, rgba(30,18,90,0.60) 35%, rgba(30,18,90,0.08) 62%, transparent 100%)" }}
      />
      {/* Bottom gradient so cards sit on a dark surface */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52"
        style={{ background: "linear-gradient(to top, rgba(20,12,70,0.75) 0%, transparent 100%)" }}
      />

      {/* ── HEADLINE — left aligned, top area ── */}
      <div className="relative z-10 px-6 lg:px-10">
        <div className="mt-14 max-w-lg lg:ml-[140px] lg:mt-20">
          <motion.h1
            className="font-display font-extrabold leading-[1.05] text-white"
            style={{ fontSize: "clamp(28px, 5.5vw, 76px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Learning<br />
            <span style={{ color: YELLOW }}>Adventures</span><br />
            Made for Kids
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-white/80 sm:max-w-sm sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Kiwo turns reading, math, and science into exciting quests that help kids learn, grow, and shine every day.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 3 }}
              className="inline-block"
              style={{ filter: "drop-shadow(0 6px 0px #B8860B)" }}
            >
              <Link
                href="#cta"
                className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-extrabold outline-none transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FFE566 0%, #FFD93D 100%)",
                  color: DARK,
                  boxShadow: "0 4px 24px rgba(255,217,61,0.55), 0 1px 0 rgba(255,255,255,0.4) inset",
                }}
              >
                Start the Adventure
                <span className="text-lg leading-none">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── FEATURE CARDS — pinned to bottom ── */}
      {/* ── FEATURE CARDS ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 gap-2 px-3 pb-3 sm:flex sm:justify-center sm:gap-4 sm:px-6 sm:pb-8 lg:px-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {HERO_FEATURES.map((f, i) => (
          <motion.div
            key={i}
            className="flex flex-1 flex-col items-start gap-3 rounded-3xl p-5"
            style={{
              maxWidth: 260,
              minHeight: 155,
              background: "rgba(8, 4, 42, 0.62)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
            whileHover={{ y: -5, background: "rgba(8, 4, 52, 0.78)", boxShadow: "0 20px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <Image src={f.icon} alt={f.title} width={52} height={52} className="object-contain drop-shadow-lg" />
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-extrabold leading-snug text-white">
                {f.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── MISSION STATEMENT — horizontal scroll text + statement ─────────────── */
function MissionStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <section ref={ref} className="overflow-hidden py-24 sm:py-32" style={{ background: TURQUOISE }}>
      <motion.div style={{ x: x1 }} className="whitespace-nowrap">
        <span
          className="font-display font-extrabold leading-none"
          style={{ fontSize: "clamp(36px, 8vw, 110px)", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.02em" }}
        >
          Learning · Reading · Science · Math · Discovery · Play · Growth ·&nbsp;
        </span>
      </motion.div>

      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-16">
        <Reveal>
          <p className="font-display text-2xl leading-tight text-white sm:text-4xl lg:text-6xl">
            The goal of Kiwo is to{" "}
            <span style={{ color: YELLOW }}>boost the joy of learning</span>{" "}
            and enhance skills for children in grades 1 to 6, while making every lesson feel like a{" "}
            <span style={{ color: YELLOW }}>fun adventure!</span>
          </p>
        </Reveal>
      </div>

      <motion.div style={{ x: x2 }} className="whitespace-nowrap">
        <span
          className="font-display font-extrabold leading-none"
          style={{ fontSize: "clamp(36px, 8vw, 110px)", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.02em" }}
        >
          &nbsp;Adventure · Wonder · Progress · Stories · Rewards · Curiosity ·
        </span>
      </motion.div>
    </section>
  );
}

/* ─── FEATURES ───────────────────────────────────────────────────────────── */
function TiltImage({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-5, 5]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        clipPath: "inset(0 round 28px)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCount({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");
  const [display, setDisplay] = useState("0" + suffix);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v) + suffix),
    });
    return ctrl.stop;
  }, [inView, num, suffix]);
  return <p ref={ref} className="font-display text-2xl" style={{ color: ORANGE }}>{display}</p>;
}

function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-6">
      {/* Floating decorative dots */}
      {[
        { x: "4%",  y: "10%", size: 14, color: ORANGE,    delay: 0,    dur: 3.2 },
        { x: "94%", y: "6%",  size: 10, color: TURQUOISE, delay: 0.9,  dur: 4.0 },
        { x: "2%",  y: "42%", size: 9,  color: YELLOW,    delay: 0.4,  dur: 3.8 },
        { x: "96%", y: "52%", size: 13, color: ORANGE,    delay: 1.3,  dur: 2.9 },
        { x: "91%", y: "76%", size: 8,  color: TURQUOISE, delay: 0.6,  dur: 4.3 },
        { x: "6%",  y: "80%", size: 11, color: YELLOW,    delay: 1.0,  dur: 3.5 },
        { x: "50%", y: "3%",  size: 7,  color: ORANGE,    delay: 0.2,  dur: 3.1 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size, background: d.color, opacity: 0.3 }}
          animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
        />
      ))}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
      </div>
    </section>
  );
}

function Feature1() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 lg:flex-row lg:gap-20 lg:py-20">
      <motion.div
        className="relative w-full shrink-0 lg:w-[460px]"
        style={{ aspectRatio: "3/2" }}
        initial={{ opacity: 0, x: -40, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <TiltImage className="h-full w-full">
          <div className="relative h-full w-full">
            <Image src="/images/feature1-card.png" alt="Personalised learning" fill className="object-cover" />
            {/* Floating badge */}
            <motion.div
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
              style={{ background: ORANGE }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-extrabold text-white">AI Powered</span>
            </motion.div>
          </div>
        </TiltImage>
      </motion.div>
      <Reveal className="flex-1">
        <h2 className="font-display text-3xl leading-tight sm:text-5xl lg:text-7xl" style={{ color: DARK }}>
          Every child<br />learns <span style={{ color: ORANGE }}>differently</span>
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${DARK}58` }}>
          Kiwo adapts to each child&apos;s pace, style, and strengths, adjusting difficulty, content, and feedback in real time so every lesson feels just right, not too easy, never too hard.
        </p>
        <Link href="#pricing" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold transition hover:gap-3" style={{ color: ORANGE }}>
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  );
}

function Feature2() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 lg:flex-row-reverse lg:gap-20 lg:py-20">
      <motion.div
        className="relative w-full shrink-0 lg:w-[460px]"
        style={{ aspectRatio: "3/2" }}
        initial={{ opacity: 0, x: 40, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <TiltImage className="h-full w-full">
          <div className="relative h-full w-full">
            <Image src="/images/feature2-card.png" alt="Kiwo learning game" fill className="object-cover" />
            <motion.div
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
              style={{ background: TURQUOISE }}
              animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-extrabold text-white">Quest Mode</span>
            </motion.div>
          </div>
        </TiltImage>
      </motion.div>
      <Reveal className="flex-1">
        <h2 className="font-display text-3xl leading-tight sm:text-5xl lg:text-7xl" style={{ color: DARK }}>
          What is the <span style={{ color: TURQUOISE }}>Kiwo</span><br />learning game?
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${DARK}58` }}>
          Kiwo is a learning game designed to develop skills in reading, math, and science. Every lesson feels like a quest kids want to finish.
        </p>
        <Link href="#pricing" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold transition hover:gap-3" style={{ color: TURQUOISE }}>
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  );
}

function Feature3() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 lg:flex-row lg:gap-20 lg:py-20">
      <motion.div
        className="relative w-full shrink-0 lg:w-[460px]"
        style={{ aspectRatio: "3/2" }}
        initial={{ opacity: 0, x: -40, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <TiltImage className="h-full w-full">
          <div className="relative h-full w-full">
            <Image src="/images/feature3-card.png" alt="Gamified world" fill className="object-cover" />
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
              style={{ background: YELLOW }}
              animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-extrabold" style={{ color: DARK }}>Level Up!</span>
            </motion.div>
          </div>
        </TiltImage>
      </motion.div>
      <Reveal className="flex-1">
        <h2 className="font-display text-3xl leading-tight sm:text-5xl lg:text-7xl" style={{ color: DARK }}>
          A <span style={{ color: ORANGE }}>Fun</span> and<br />Gamified World
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${DARK}58` }}>
          Kiwo uses gamification to spark interest and create a positive connection with learning. Kids choose their character, level up, and unlock rewards after each mission.
        </p>
        <ul className="mt-7 space-y-3">
          {["Character selection and levelling", "Reward playground after missions", "Badges and streaks"].map((f, idx) => (
            <motion.li
              key={f}
              className="flex items-center gap-3 text-sm font-bold"
              style={{ color: DARK }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, type: "spring", stiffness: 380, damping: 22 }}
            >
              <motion.span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: ORANGE }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 + 0.1, type: "spring", stiffness: 500, damping: 16 }}
              >
                <Check className="h-3 w-3" />
              </motion.span>
              {f}
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function Feature4() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 lg:flex-row-reverse lg:gap-20 lg:py-20">
      <motion.div
        className="relative w-full shrink-0 lg:w-[460px]"
        style={{ aspectRatio: "3/2" }}
        initial={{ opacity: 0, x: 40, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <TiltImage className="h-full w-full">
          <div className="relative h-full w-full">
            <Image src="/images/feature4-card.png" alt="Stats dashboard" fill className="object-cover" />
            <motion.div
              className="absolute left-4 top-4 flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
              style={{ background: TURQUOISE }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-extrabold text-white">Live Insights</span>
            </motion.div>
          </div>
        </TiltImage>
      </motion.div>
      <Reveal className="flex-1">
        <h2 className="font-display text-3xl leading-tight sm:text-5xl lg:text-7xl" style={{ color: DARK }}>
          Detailed <span style={{ color: TURQUOISE }}>statistics</span> on your child&apos;s progress!
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${DARK}58` }}>
          We analyse reading speed, comprehension, enjoyment, and peer comparisons, all inside a warm and parent friendly dashboard.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[["92%", "Reading fluency"], ["87%", "Math growth"], ["11", "Best streak"]].map(([val, label], idx) => (
            <motion.div
              key={label}
              className="rounded-2xl p-4 text-center"
              style={{ background: "#FFF7F2" }}
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
            >
              <AnimatedCount value={val} />
              <p className="mt-1 text-xs font-bold leading-tight" style={{ color: `${DARK}55` }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

/* ─── HOW IT WORKS — pinned 3-step scrollytelling ────────────────────────── */
function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const bgColors = [CREAM, "#FFFDE7", "#F0FDF4"];
  const steps = [
    {
      num: "01",
      title: "Choose your world",
      copy: "Pick a subject. Each one is its own colorful universe with its own character guide and story arc.",
      textColor: DARK,
      copyColor: `${DARK}88`,
      numColor: `${ORANGE}22`,
    },
    {
      num: "02",
      title: "Start the mission",
      copy: "Lessons unfold as quests with characters, choices, and challenges that scale to your child's pace.",
      textColor: DARK,
      copyColor: `${DARK}88`,
      numColor: `${TURQUOISE}22`,
    },
    {
      num: "03",
      title: "Earn and grow",
      copy: "Unlock badges, level up your character, and watch the parent dashboard light up with real progress.",
      textColor: DARK,
      copyColor: `${DARK}88`,
      numColor: "#22C55E22",
    },
  ];

  useEffect(() => {
    let trigger: { kill: () => void } | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.6,
        onUpdate: (self: { progress: number }) => {
          const p = self.progress;
          if (p < 0.34) setActiveStep(0);
          else if (p < 0.67) setActiveStep(1);
          else setActiveStep(2);
        },
      });
    };

    init();
    return () => { trigger?.kill(); };
  }, []);

  const bgImages = [
    "/images/how-it-works-bg.png",
    "/images/how-it-works-bg2.png",
    "/images/how-it-works-bg3.png",
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative h-screen overflow-hidden"
      style={{ transition: "background 0.35s ease" }}
    >
      {/* Background images per step */}
      {bgImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === activeStep ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        >
          <Image src={src} alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.45)" }} />
        </div>
      ))}
      <div className="relative h-full">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="absolute inset-0 flex items-center px-5 sm:px-16 lg:px-28"
            style={{
              opacity: i === activeStep ? 1 : 0,
              transition: "opacity 0.35s ease",
              pointerEvents: i === activeStep ? "auto" : "none",
            }}
          >
            <div className="max-w-3xl">
              <span
                className="block select-none font-display font-extrabold leading-none"
                style={{ fontSize: "clamp(40px, 14vw, 170px)", color: step.numColor }}
              >
                {step.num}
              </span>
              <h2
                className="-mt-4 font-display text-3xl leading-tight sm:text-5xl lg:text-[4.5rem]"
                style={{ color: step.textColor }}
              >
                {step.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-xl" style={{ color: step.copyColor }}>
                {step.copy}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Step dots — right edge */}
      <div className="absolute right-8 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3">
        {steps.map((_, i) => (
          <div key={i} className="relative h-2 w-2">
            <div className="absolute inset-0 rounded-full" style={{ background: ORANGE, opacity: 0.18 }} />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: ORANGE,
                opacity: i === activeStep ? 1 : 0,
                transition: "opacity 0.35s ease",
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom label + step bars */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 sm:px-16 lg:px-28">
        <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.25)" }}>
          How Kiwo works
        </p>
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div key={i} className="relative h-1 w-10 overflow-hidden rounded-full" style={{ background: "rgba(0,0,0,0.1)" }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: ORANGE,
                  opacity: i === activeStep ? 1 : 0,
                  transition: "opacity 0.35s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ──────────────────────────────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: "37%", label: "of kids fall below basic reading levels globally" },
    { value: "6",   label: "subject worlds designed as mini adventure games" },
    { value: "11m", label: "average weekly learning time in guided mode" },
    { value: "1",   label: "beautiful app where lessons, games and AI live together" },
  ];
  return (
    <section className="py-24 sm:py-32" style={{ background: TURQUOISE }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl lg:text-6xl">
            Numbers that <span style={{ color: YELLOW }}>matter</span>
          </h2>
        </Reveal>
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "rgba(255,255,255,0.2)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center px-8 py-12 text-center" style={{ background: TURQUOISE }}>
                <motion.span
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "clamp(52px,8vw,90px)" }}
                  initial={{ opacity: 0, y: 24, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s.value}
                </motion.span>
                <p className="mt-4 max-w-[180px] text-sm font-bold leading-relaxed text-white/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SUBJECTS ───────────────────────────────────────────────────────────── */
function SubjectsSection() {
  const subjects = [
    { title: "Math Missions",    copy: "Number puzzles and confidence loops.",          bg: "#B8F2D8", accent: "#00CED4", num: "01", img: "/images/subject-math.png" },
    { title: "Reading Stories",  copy: "Phonics support and magical story paths.",      bg: "#D6CAFF", accent: "#9B7FE8", num: "02", img: "/images/subject-reading.png" },
    { title: "Science Labs",     copy: "Curiosity-first STEM mini adventures.",         bg: "#FFE9A0", accent: "#F5A623", num: "03", img: "/images/subject-science.png" },
    { title: "Discovery Quests", copy: "Logic and exploration wrapped in one journey.", bg: "#FFB8D0", accent: "#FF6B8A", num: "04", img: "/images/subject-discovery.png" },
    { title: "Teacher Fox",      copy: "The guide that keeps every lesson warm.",       bg: "#B8E4FF", accent: "#4AABDF", num: "05", img: "/images/subject-teacher.png" },
    { title: "AI Tutor Owl",     copy: "Hints and pacing that adapt to each child.",   bg: "#C5F0B8", accent: "#52C41A", num: "06", img: "/images/subject-owl.png" },
  ];

  // ── Layout math (all px) ──────────────────────────────────────────────────
  const STEP   = 300;  // vertical gap between pill centres
  const NODE_R = 32;   // pill radius (h-16 / 2)
  const CARD_W = 280;  // card width
  const IMG_H  = 160;  // card image height
  const GAP    = 24;   // space between pill edge and card edge
  const PAD_T  = 70;   // top space before first pill
  const PAD_B  = 140;  // bottom space (room for last card text)
  const TOTAL_H = PAD_T + (subjects.length - 1) * STEP + PAD_B;

  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{
    pathD: string; W: number; pills: { x: number; y: number }[];
  } | null>(null);

  useEffect(() => {
    const build = () => {
      const el = containerRef.current;
      if (!el) return;
      const W = el.clientWidth;
      // Pills alternate: 38 % (left) ↔ 62 % (right) — enough swing for S-curve
      const xL = W * 0.38;
      const xR = W * 0.62;
      const pills = subjects.map((_, i) => ({
        x: i % 2 === 0 ? xL : xR,
        y: PAD_T + i * STEP,
      }));
      // Classic S-curve bezier through pill centres
      let d = `M ${pills[0].x} ${pills[0].y}`;
      for (let i = 1; i < pills.length; i++) {
        const p = pills[i - 1], c = pills[i];
        const midY = (p.y + c.y) / 2;
        d += ` C ${p.x} ${midY} ${c.x} ${midY} ${c.x} ${c.y}`;
      }
      setLayout({ pathD: d, W, pills });
    };
    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="subjects" className="py-24 sm:py-32" style={{ background: "#FFF3E8" }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ color: DARK }}>
            Character-led <span style={{ color: ORANGE }}>worlds</span><br />for every learner
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-lg leading-relaxed" style={{ color: `${DARK}55` }}>
            Each subject has its own mascot, color tone, and visual personality so every child finds their world.
          </p>
        </Reveal>

        {/* Mobile simple grid — hidden on md+ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          {subjects.map((s) => (
            <motion.div
              key={s.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-32 overflow-hidden" style={{ background: s.bg }}>
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg leading-tight" style={{ color: DARK }}>{s.title}</h3>
                <p className="mt-1 text-xs leading-snug" style={{ color: `${DARK}60` }}>{s.copy}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-extrabold" style={{ color: s.accent }}>
                  Explore world <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fixed-height canvas — path drawn first, pills + cards placed on top */}
        <div ref={containerRef} className="relative mx-auto hidden max-w-4xl md:block" style={{ height: TOTAL_H }}>
          {layout && (
            <>
              {/* ① PATH — road with depth layers */}
              <svg className="pointer-events-none absolute inset-0" width={layout.W} height={TOTAL_H}>
                <defs>
                  <filter id="road-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                </defs>
                {/* drop-shadow underneath */}
                <path d={layout.pathD} fill="none" stroke="#4C1D95" strokeWidth="28" strokeLinecap="round" opacity="0.12" filter="url(#road-blur)" />
                {/* outer border — orange edge of the road */}
                <path d={layout.pathD} fill="none" stroke={ORANGE} strokeWidth="22" strokeLinecap="round" opacity="0.28" />
                {/* road surface — warm cream */}
                <path d={layout.pathD} fill="none" stroke="#FFEEDD" strokeWidth="14" strokeLinecap="round" />
                {/* top-lit highlight */}
                <path d={layout.pathD} fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
                {/* centre dashes */}
                <path d={layout.pathD} fill="none" stroke={ORANGE} strokeWidth="2" strokeDasharray="14 12" strokeLinecap="round" opacity="0.45" />
              </svg>

              {subjects.map((s, i) => {
                const pill   = layout.pills[i];
                const isLeft = i % 2 === 0;
                const cardTop  = pill.y - IMG_H / 2 - 12;
                const cardLeft = isLeft
                  ? pill.x - NODE_R - GAP - CARD_W   // card sits LEFT of pill
                  : pill.x + NODE_R + GAP;            // card sits RIGHT of pill

                return (
                  <div key={s.title}>
                    {/* ② PILL — sits on the path */}
                    <motion.div
                      className="absolute z-20 flex items-center justify-center rounded-full shadow-2xl"
                      style={{
                        width: NODE_R * 2, height: NODE_R * 2,
                        left: pill.x - NODE_R, top: pill.y - NODE_R,
                        background: s.accent,
                        boxShadow: `0 4px 18px ${s.accent}60`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 320, damping: 22 }}
                    >
                      <span className="font-display text-2xl font-extrabold text-white">{s.num}</span>
                    </motion.div>

                    {/* ③ CARD — placed beside the pill */}
                    <motion.div
                      className="absolute z-10 overflow-hidden rounded-[24px] bg-white shadow-xl"
                      style={{ left: cardLeft, top: cardTop, width: CARD_W, rotate: isLeft ? -1.5 : 1.5 }}
                      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ rotate: 0, y: -7, scale: 1.03, transition: { duration: 0.22 } }}
                    >
                      <div className="relative overflow-hidden" style={{ height: IMG_H, background: s.bg }}>
                        <Image src={s.img} alt={s.title} fill className="object-cover scale-110" />
                      </div>
                      <div className="px-5 pt-3" style={{ paddingBottom: 26 }}>
                        <h3 className="font-display text-lg leading-tight" style={{ color: DARK }}>{s.title}</h3>
                        <p className="text-xs leading-snug" style={{ marginTop: 6, color: `${DARK}60` }}>{s.copy}</p>
                        <div className="flex items-center gap-1 text-xs font-extrabold" style={{ marginTop: 18, color: s.accent }}>
                          Explore world <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const items = [
    { quote: "Kiwo is the first app my daughter opens without being reminded. The missions feel like stories, not homework.", name: "Maya R.",  role: "Parent of a 7-year-old", accent: ORANGE },
    { quote: "The parent dashboard gives us real insight into where our son is improving, especially in math confidence.",   name: "David L.", role: "Parent of a 9-year-old", accent: TURQUOISE },
    { quote: "Kiwo balances play and structure beautifully. The AI hints keep frustration low and motivation high.",          name: "Sara K.",  role: "Parent of twins",        accent: ORANGE },
  ];
  return (
    <section className="py-24 sm:py-32" style={{ background: YELLOW }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl sm:text-5xl" style={{ color: DARK }}>
            Families notice the <span style={{ color: ORANGE }}>difference</span>
          </h2>
        </Reveal>
        <div className="divide-y" style={{ borderColor: `${DARK}18` }}>
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:gap-16">
                <div className="w-48 shrink-0">
                  <div className="flex gap-1" style={{ color: item.accent }}>
                    {Array.from({ length: 5 }).map((_, si) => <Star key={si} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-3 font-extrabold" style={{ color: DARK }}>{item.name}</p>
                  <p className="text-sm" style={{ color: `${DARK}70` }}>{item.role}</p>
                </div>
                <p className="font-display text-2xl leading-snug sm:text-3xl" style={{ color: `${DARK}CC` }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────────────────────────────────────── */
function PricingSection() {
  const plans = [
    { name: "Starter", price: "$0",  text: "A playful first step.",         features: ["2 subject worlds", "Limited quests", "Parent snapshot", "7 day free trial"],     featured: false },
    { name: "Plus",    price: "$19", text: "Full access for one child.",     features: ["All subjects", "AI tutor", "Rewards and streaks", "Detailed dashboard"],         featured: true  },
    { name: "Family",  price: "$29", text: "Built for households together.", features: ["Up to 4 profiles", "Shared dashboard", "Priority content", "Weekly recaps"],     featured: false },
  ];
  return (
    <section id="pricing" className="py-24 sm:py-32" style={{ background: "#FFF3E8" }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-5xl" style={{ color: DARK }}>
            Simple plans with a <span style={{ color: ORANGE }}>free trial</span> built in
          </h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <motion.div
                className="flex h-full flex-col rounded-[28px] p-5 sm:p-8"
                style={{ background: plan.featured ? ORANGE : "white" }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 340, damping: 24 }}
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : `${DARK}40` }}>{plan.name}</p>
                  {plan.featured && <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold text-white">Most loved</span>}
                </div>
                <p className="mt-4 font-display text-3xl sm:text-5xl" style={{ color: plan.featured ? "white" : DARK }}>
                  {plan.price}
                  {plan.price !== "$0" && <span className="text-base font-body" style={{ color: plan.featured ? "rgba(255,255,255,0.5)" : `${DARK}40` }}>/mo</span>}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: plan.featured ? "rgba(255,255,255,0.72)" : `${DARK}55` }}>{plan.text}</p>
                <div className="my-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: plan.featured ? "rgba(255,255,255,0.6)" : ORANGE }} />
                      <p className="text-sm font-semibold" style={{ color: plan.featured ? "rgba(255,255,255,0.85)" : `${DARK}65` }}>{f}</p>
                    </div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#"
                    className="block w-full rounded-full py-3 text-center text-sm font-extrabold transition"
                    style={plan.featured ? { background: "white", color: ORANGE } : { border: `2px solid ${ORANGE}`, color: ORANGE }}
                  >
                    Start Free Trial
                  </Link>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="py-16" style={{ background: "white" }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] px-5 py-12 text-center sm:px-14 sm:py-20">
            <Image src="/images/cta-bg.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "rgba(124,58,237,0.82)" }} />

            <p className="relative text-xs font-extrabold uppercase tracking-widest text-white/70">
              You&apos;re not the only one waiting…
            </p>
            <h2 className="relative mt-4 font-display text-3xl text-white sm:text-5xl lg:text-6xl">
              Sign up for the <span style={{ color: YELLOW }}>waitlist</span> today
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              A world of lessons, stories, games, and AI guidance designed to feel magical from the first tap.
            </p>
            <div className="relative mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-full bg-white/25 px-5 py-3.5 ring-1 ring-white/40">
                <Mail className="h-4 w-4 text-white/70" />
                <input
                  type="email"
                  placeholder="Your email…"
                  className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/60"
                />
              </div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 3 }}
                style={{ filter: "drop-shadow(0 5px 0px #B8860B)" }}
              >
                <Link
                  href="#"
                  className="block rounded-full px-6 py-3.5 text-sm font-extrabold"
                  style={{
                    background: "linear-gradient(180deg, #FFE566 0%, #FFD93D 50%, #F5C800 100%)",
                    color: DARK,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.12)",
                  }}
                >
                  Sign up free
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-16" style={{ background: CREAM }}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none items-end justify-center overflow-hidden" aria-hidden>
        <span
          className="font-display font-extrabold leading-none"
          style={{ fontSize: "clamp(60px, 20vw, 260px)", letterSpacing: "-0.02em", color: "rgba(0,0,0,0.04)" }}
        >
          KIWO
        </span>
      </div>

      <div className="relative z-10 mx-4 sm:mx-6 lg:mx-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl italic" style={{ color: DARK }}>Kiwo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: `${DARK}80` }}>
              A learning platform built to feel joyful, premium, and worth coming back to every day.
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: `${DARK}55` }}>Explore</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {[{ label: "Features", href: "#features" }, { label: "Subjects", href: "#subjects" }, { label: "How it Works", href: "#how-it-works" }, { label: "Pricing", href: "#pricing" }].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm font-bold transition" style={{ color: `${DARK}70` }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: `${DARK}55` }}>Social</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {["Instagram", "YouTube", "LinkedIn"].map((s) => (
                <Link key={s} href="#" className="text-sm font-bold transition" style={{ color: `${DARK}70` }}>{s}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: `${DARK}55` }}>Newsletter</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-full px-4 py-3" style={{ boxShadow: `0 0 0 1px ${DARK}20` }}>
                <Mail className="h-4 w-4" style={{ color: `${DARK}40` }} />
                <input type="email" placeholder="Parent email" className="w-full bg-transparent text-sm font-semibold outline-none" style={{ color: DARK }} />
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="#" className="block rounded-full px-6 py-3 text-center text-sm font-extrabold transition-transform hover:scale-105 active:scale-95" style={{ background: "linear-gradient(135deg, #FFE566 0%, #FFD93D 100%)", color: DARK, boxShadow: "0 4px 18px rgba(255,217,61,0.5), 0 1px 0 rgba(255,255,255,0.4) inset" }}>Join</Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row" style={{ borderColor: `${DARK}15` }}>
          <p className="text-sm" style={{ color: `${DARK}50` }}>© 2026 Kiwo. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Cookie settings", "Cookies"].map((t) => (
              <Link key={t} href="#" className="text-sm transition" style={{ color: `${DARK}50` }}>{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
