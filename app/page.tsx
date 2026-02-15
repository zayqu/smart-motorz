"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import {
  Ship,
  CreditCard,
  KeyRound,
  Scale,
  ShieldCheck,
  Handshake,
  Truck,
  PhoneCall,
  ClipboardList,
  FileText,
  Wallet,
  Globe,
  Radar,
  Car,
  CheckCircle2,
  BadgeCheck,
  Fuel,
  TriangleAlert,
  Flame,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  // -----------------------------
  // Data
  // -----------------------------
  const brandLogos = useMemo(
    () => [
      { name: "Toyota", src: "/brands/toyota.webp" },
      { name: "Mercedes", src: "/brands/mercedes.webp" },
      { name: "BMW", src: "/brands/bmw.webp" },
      { name: "Nissan", src: "/brands/nissan.webp" },
      { name: "Audi", src: "/brands/audi.webp" },
    
    ],
    []
  );

  const categories = useMemo(
    () => [
      { label: "Sportcars", desc: "Performance focused models", img: "/cats/sport.jpg" },
      { label: "SUVs", desc: "Comfort, space, power", img: "/cats/suv.jpg" },
      { label: "Luxury Sedans", desc: "Executive class rides", img: "/cats/sedan.jpg" },
      { label: "Vans", desc: "Family & business utility", img: "/cats/van.jpg" },
    ],
    []
  );

  // -----------------------------
  // Motion
  // -----------------------------
  const reduced = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  };

  const fade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  // -----------------------------
  // HERO parallax
  // -----------------------------
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroVideoY = useTransform(heroProgress, [0, 1], reduced ? [0, 0] : [0, 90]);
  const heroOverlayOpacity = useTransform(heroProgress, [0, 1], reduced ? [0.78, 0.78] : [0.78, 0.92]);

  const [heroLoaded, setHeroLoaded] = useState(false);

  // -----------------------------
  // RESULTS parallax
  // -----------------------------
  const resultsRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: resultsProgress } = useScroll({
    target: resultsRef,
    offset: ["start end", "end start"],
  });

  const resultsVideoY = useTransform(resultsProgress, [0, 1], reduced ? [0, 0] : [-55, 55]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    // soft load fallback (prevents flash if video metadata is slow)
    const t = setTimeout(() => setHeroLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  // -----------------------------
  // Small UI helpers
  // -----------------------------
  const SectionTopDivider = () => (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );

  const GlowDot = () => (
    <span className="inline-block h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_24px_rgba(234,179,8,0.55)]" />
  );

  return (
    <main className="bg-black text-white">
      {/* ------------------ HERO ------------------ */}
      <section ref={heroRef as any} className="relative min-h-[94vh] overflow-hidden">
        {/* Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onCanPlayThrough={() => setHeroLoaded(true)}
          style={{ y: heroVideoY, opacity: heroLoaded ? 1 : 0 }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </motion.video>

        {/* Cinematic overlays: vignette + gradient */}
        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"
        />
        <div className="absolute inset-0 pointer-events-none">
          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.55)_68%,rgba(0,0,0,0.85)_100%)]" />
          {/* subtle grain */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
            >
              <GlowDot /> Automotive excellence
            </motion.p>

            <motion.h1 variants={fadeUp} className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Smart Motorz
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-white/75 max-w-3xl mx-auto">
              We simplify car buying through transparent importation, flexible financing, corporate rentals,
              in country sourcing, and exclusive after sales support in Tanzania.
            </motion.p>

            {/* Premium CTA buttons with shine */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/services#car-importation"
                className="group relative overflow-hidden btn-primary"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Get a Personalized Vehicle Quote <ArrowRight size={16} />
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)] -translate-x-full group-hover:translate-x-full" />
              </a>

              <a
                href="/services#car-loans"
                className="group relative overflow-hidden btn-outline"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Apply Today & Drive Home <ArrowRight size={16} />
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(110deg,transparent,rgba(234,179,8,0.18),transparent)] -translate-x-full group-hover:translate-x-full" />
              </a>
            </motion.div>
          </motion.div>

          {/* Premium quick cards (hover lift + glow) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mx-auto max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
          >
            {[
              {
                Icon: Ship,
                title: "Car Importation",
                subtitle: "Transparent sourcing",
                text: "Japan • Germany • Dubai • UK • USA",
                href: "/services#car-importation",
                cta: "Get Quote",
              },
              {
                Icon: CreditCard,
                title: "Car Loans",
                subtitle: "Drive home same day",
                text: "2–4 years • No collateral",
                href: "/services#car-loans",
                cta: "Apply Today",
              },
              {
                Icon: KeyRound,
                title: "Car Rentals",
                subtitle: "Corporate & executives",
                text: "Daily • Weekly • Long-term",
                href: "/services#car-rentals",
                cta: "Secure Today",
              },
            ].map(({ Icon, title, subtitle, text, href, cta }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group card-dark hover:border-yellow-500/40 transition will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.55)]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-white/60">{title}</p>
                    <p className="font-semibold">{subtitle}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-white/70">{text}</p>

                <a
                  href={href}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-500 hover:underline"
                >
                  {cta} <ArrowRight size={14} />
                </a>

                {/* subtle corner glow */}
                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition duration-500 inset-0">
                  <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-yellow-500/10 blur-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Faint text */}
        <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden md:block">
          <p className="text-[120px] font-black tracking-tight text-white/5 text-center">DRIVE SMART</p>
        </div>

        {/* Section separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <SectionTopDivider />
        </div>
      </section>

      {/* ------------------ CATEGORY STRIP ------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        className="bg-black"
      >
        <div className="mx-auto max-w-6xl px-6 py-7 flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
          <a className="hover:text-yellow-500 transition" href="/services#car-importation">Importation</a>
          <a className="hover:text-yellow-500 transition" href="/services#car-loans">Loans</a>
          <a className="hover:text-yellow-500 transition" href="/services#in-country">In-Country Sourcing</a>
          <a className="hover:text-yellow-500 transition" href="/services#car-rentals">Rentals</a>
          <a className="hover:text-yellow-500 transition" href="/services#after-sales">After-Sales</a>
        </div>
        <SectionTopDivider />
      </motion.section>

      {/* ------------------ LOGO SLIDER (fade edges) ------------------ */}
      <section className="bg-black py-10 relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden">
            <div className="marquee gap-12 items-center">
              {[...brandLogos, ...brandLogos].map((b, idx) => (
                <div
                  key={`${b.name}-${idx}`}
                  className="h-12 w-28 flex items-center justify-center opacity-70 hover:opacity-100 transition"
                >
                  <img src={b.src} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionTopDivider />
      </section>

      {/* ------------------ CAR TYPES ------------------ */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex items-end justify-between gap-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              Car Types
            </motion.h2>
            <motion.a variants={fadeUp} href="/services" className="text-sm text-white/70 hover:text-yellow-500 transition">
              Explore services <ArrowRight size={14} className="inline ml-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {categories.map((c) => (
              <motion.a
                key={c.label}
                variants={fadeUp}
                href="/contact"
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-yellow-500/50 transition will-change-transform hover:-translate-y-1"
              >
                <div className="h-44 bg-black relative">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <p className="font-semibold">{c.label}</p>
                  <p className="mt-1 text-sm text-white/70">{c.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <SectionTopDivider />
        </div>
      </section>

      {/* ------------------ WHITE SPLIT SECTION ------------------ */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-sm font-semibold text-black/70">
              <Sparkles size={16} className="text-yellow-600" />
              Premium automotive partner
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold leading-tight">
              A smarter way to own a quality vehicle.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-black/70">
              Smart Motorz is a division of Smart Group Holdings Limited dedicated to simplifying
              the car buying experience with quality, transparency and personalized service.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="/about" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                Learn About Smart Motorz
              </a>
              <a href="/contact" className="rounded-lg border border-black/20 px-6 py-3 font-semibold hover:border-black/40 transition">
                Speak With an Advisor
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fade}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
              <img src="/showcase.jpg" alt="Smart Motorz showcase" className="h-[420px] w-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* VALUE CARDS */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { t: "Transparency", d: "Clear pricing & full vehicle details, no hidden charges.", Icon: Scale },
              { t: "Integrity", d: "Ethical standards and fairness in every transaction.", Icon: ShieldCheck },
              { t: "Trust", d: "Reliable service, quality vehicles, long term support.", Icon: Handshake },
              { t: "Delivery", d: "Doorstep delivery to any region in Tanzania.", Icon: Truck },
            ].map(({ t, d, Icon }) => (
              <motion.div
                key={t}
                variants={fadeUp}
                className="rounded-xl border border-black/10 bg-white p-6 hover:-translate-y-1 transition will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/30 grid place-items-center text-yellow-700">
                    <Icon size={18} />
                  </span>
                  <p className="font-semibold">{t}</p>
                </div>
                <p className="mt-3 text-sm text-black/70">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ RESULTS VIDEO SECTION ------------------ */}
      <section ref={resultsRef as any} className="relative h-[460px] overflow-hidden bg-black">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onCanPlayThrough={() => setResultsLoaded(true)}
          style={{ y: resultsVideoY, opacity: resultsLoaded ? 1 : 0 }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        >
          <source src="/results-video.mp4" type="video/mp4" />
        </motion.video>

        {/* overlay + grain */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-end pb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              Results. Not excuses.
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-3 text-white/75">
              Fast turnaround, strong local and international networks, and weekly updates until handover.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <SectionTopDivider />
        </div>
      </section>

      {/* ------------------ YELLOW STRIP ------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="bg-yellow-500 text-black"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Not sure which car is right for you?</h3>
            <p className="mt-2 text-black/80">
              Take our private 10-question assessment and receive a personalized recommendation.
              <span className="font-semibold"> Exclusive. Confidential. Tailored to you.</span>
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <a href="/private-car-match" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition text-center">
              Start Your Private Car Match
            </a>
            <a href="/contact" className="rounded-lg border border-black/25 px-6 py-3 font-semibold hover:border-black/40 transition text-center">
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>

      {/* ------------------ HOW TO BUY + OFFERS ------------------ */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* HOW TO BUY */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-bold">
              How to Buy
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-3 text-black/70">
              A clear, guided process from first message to handover.
            </motion.p>

            <div className="mt-8 space-y-4">
              {[
                { t: "Get in touch", d: "Visit, call, WhatsApp or email to start.", I: PhoneCall },
                { t: "Private assessment", d: "We learn your budget, lifestyle, and preference.", I: ClipboardList },
                { t: "Transparent quote", d: "Contract + proforma invoice with full breakdown.", I: FileText },
                { t: "Initial payment", d: "60% deposit (or 100% for faster processing).", I: Wallet },
                { t: "Sourcing & import", d: "We handle the entire importation end-to-end.", I: Globe },
                { t: "Weekly tracking", d: "Shipping, clearing, registration, timeline updates.", I: Radar },
                { t: "Handover", d: "Collection or doorstep delivery, your choice.", I: Car },
                { t: "Drive with confidence", d: "After-sales support for our clients only.", I: CheckCircle2 },
              ].map(({ t, d, I }) => (
                <motion.div key={t} variants={fadeUp} className="flex gap-4 rounded-xl border border-black/10 bg-white p-4 hover:-translate-y-1 transition will-change-transform">
                  <span className="w-11 h-11 rounded-xl bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700 shrink-0">
                    <I size={18} />
                  </span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-black/70 mt-1">{d}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10">
              <a href="/contact" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                Begin Your Ownership Journey
              </a>
            </motion.div>
          </motion.div>

          {/* OFFERS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-bold">
              Offers Included
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-3 text-black/70">
              Extra value and essentials included, no surprises.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Insurance (BIMA)", I: BadgeCheck },
                { t: "Registration & Plate Number", I: FileText },
                { t: "Triangle", I: TriangleAlert },
                { t: "Fire Extinguisher", I: Flame },
                { t: "Full Tank", I: Fuel },
                { t: "Delivery to Any Region", I: MapPin },
              ].map(({ t, I }) => (
                <div key={t} className="rounded-xl border border-black/10 bg-white p-5 flex gap-3 hover:-translate-y-1 transition will-change-transform">
                  <span className="mt-0.5 w-9 h-9 rounded-lg bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700 shrink-0">
                    <I size={16} />
                  </span>
                  <p className="font-semibold">{t}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
              <img src="/offers.jpg" alt="Smart Motorz offers" className="h-[260px] w-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
