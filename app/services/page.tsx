"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import {
  Ship,
  CreditCard,
  Search,
  KeyRound,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const services = [
    {
      id: "car-importation",
      Icon: Ship,
      title: "Car Importation",
      desc:
        "We source, order and import high-quality vehicles tailored to your requirements from Japan, Germany, Dubai, Singapore, UK and USA. Transparent pricing and full process management delivered to your doorstep.",
      bullets: [
        "Advisory on best car for your needs",
        "Sourcing that matches your exact criteria",
        "Transparent pricing (no hidden charges)",
        "End-to-end import handling",
        "Weekly progress updates until handover",
      ],
      cta: "Get a Personalized Vehicle Quote",
    },
    {
      id: "car-loans",
      Icon: CreditCard,
      title: "Car Loans",
      desc:
        "Flexible and affordable financing plans, small down payment and monthly installments over two to four years. No collateral needed, no complicated processes, Simple terms and transparent pricing.",
      bullets: [
        "Small down payment to start",
        "2–4 years installment plan",
        "No collateral required",
        "Same-day drive-away (subject to terms)",
        "Transparent monthly schedule",
      ],
      cta: "Apply today, and drive your car home the same day",
    },
    {
      id: "in-country",
      Icon: Search,
      title: "In-Country Car Sourcing",
      desc:
        "Need a vehicle immediately? We connect you with trusted local dealers, handle negotiation, and deliver to your doorstep fast, hassle free, and value focused.",
      bullets: [
        "Fast sourcing inside Tanzania",
        "Trusted dealer network",
        "Negotiation handled by experts",
        "Delivery to your location",
        "Save time and avoid guesswork",
      ],
      cta: "Speak With a Smart Motorz Advisor",
    },
    {
      id: "car-rentals",
      Icon: KeyRound,
      title: "Car Rentals",
      desc:
        "Professional rentals for corporate clients, executives, and business travelers. Daily, weekly, and long-term plans with delivery, support, and corporate billing options.",
      bullets: [
        "Sedans & SUVs (well-maintained fleet)",
        "Daily / weekly / long-term options",
        "Delivery + dedicated support",
        "Corporate billing available",
        "Insurance + maintenance covered",
      ],
      cta: "Secure Your Vehicle Today",
    },
    {
      id: "after-sales",
      Icon: Wrench,
      title: "After-Sales Support (Clients Only)",
      desc:
        "When you buy from Smart Motorz, you join our family. Maintenance guidance, trusted mechanic recommendations, and Dubai sourcing for upgrades and parts, service charges on us.",
      bullets: [
        "Maintenance guidance & best oil advice",
        "Trusted mechanic recommendations",
        "Dubai team sources upgrades & special parts",
        "No service charge—pay supplier + transport only",
        "Exclusive to Smart Motorz clients",
      ],
      cta: "Talk to us about upgrades & support",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              Services
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
              Importation, loans, rentals, in-country sourcing, and exclusive after-sales support are built to eliminate delays, hidden costs, and uncertainty.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="btn-primary">
                Contact / WhatsApp <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="/about" className="btn-outline">
                Why Smart Motorz <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              variants={stagger}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 md:p-10 hover:border-yellow-500/35 transition"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <motion.div variants={fadeUp} className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                      <s.Icon size={18} />
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-white/70">{s.desc}</p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a href="/contact" className="btn-primary">
                      {s.cta} <ArrowRight size={16} className="ml-2" />
                    </a>
                    <a href="/contact" className="btn-outline">
                      Talk to an Advisor <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <p className="text-sm text-white/70 mb-4">What you get</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-white/80">
                          <CheckCircle2 size={18} className="text-yellow-500 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 text-sm text-white/60">
                    • Transparency • Integrity • Trust
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-yellow-500 text-black">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to drive smart?</h3>
            <p className="mt-2 text-black/80">
              Tell us your budget and preference. We’ll recommend the right vehicle and handle the rest.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition text-center">
              Speak With a Smart Motorz Advisor
            </a>
            <a href="/contact" className="rounded-lg border border-black/25 px-6 py-3 font-semibold hover:border-black/40 transition text-center">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
