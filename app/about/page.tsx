"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Scale,
  Handshake,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  // Dummy data for now
  const directors = [
    { name: "Director Name 1", title: "Managing Director", image: "/team/director-1.jpg" },
    { name: "Director Name 2", title: "Director", image: "/team/director-2.jpg" },
    { name: "Director Name 3", title: "Director", image: "/team/director-3.jpg" },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-sm text-white/75">
              <Sparkles size={16} className="text-yellow-500" />
              About Smart Motorz
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              Built on transparency, integrity, and trust.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
              Smart Motorz is a proud division of Smart Group Holdings Limited, dedicated to simplifying the car buying
              experience for our clients. With a commitment to quality, transparency, and personalized service, we
              specialize in car importation, car rentals, vehicle financing, in-country car sourcing, and exclusive
              after sales support tailored to our clients’ needs.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/services" className="btn-primary">
                Explore Services <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="/contact" className="btn-outline">
                Speak With an Advisor <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              Our Core Values
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 text-white/70 max-w-3xl">
              The Smart Group Holdings family and Smart Motorz embody our values of integrity, transparency, and trust.
              We strive to make every automotive journey smooth and rewarding.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparency",
                  desc:
                    "We provide clear, honest information about every vehicle, from pricing to condition, so you have the full picture before deciding.",
                  Icon: Scale,
                },
                {
                  title: "Integrity",
                  desc:
                    "We adhere to strong ethical standards and fairness in every transaction, with honest, responsible handling from start to finish.",
                  Icon: ShieldCheck,
                },
                {
                  title: "Trust",
                  desc:
                    "We build long term trust through reliable service, quality vehicles, and support that continues beyond the purchase.",
                  Icon: Handshake,
                },
              ].map(({ title, desc, Icon }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:-translate-y-1 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                      <Icon size={18} />
                    </span>
                    <p className="text-xl font-semibold">{title}</p>
                  </div>
                  <p className="mt-3 text-white/70">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700">
                <Eye size={18} />
              </span>
              <h3 className="text-3xl font-bold">Vision</h3>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-black/70">
              To become the most trusted automotive partner in Tanzania, setting the standard for service excellence and
              long term customer relationships.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700">
                <Target size={18} />
              </span>
              <h3 className="text-3xl font-bold">Mission</h3>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-black/70">
              To make quality vehicles accessible through transparent, reliable, and customer-focused automotive
              solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              Our Leadership
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/70 max-w-3xl">
              Our directors lead with a client first mindset and a focus on long term relationships.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((d) => (
                <motion.div
                  key={d.name}
                  variants={fadeUp}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-yellow-500/40 transition hover:-translate-y-1"
                >
                  <div className="relative h-56 bg-black">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover opacity-90 group-hover:opacity-100 transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <p className="text-lg font-semibold">{d.name}</p>
                    <p className="mt-1 text-sm text-white/65">{d.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <div className="relative aspect-[16/9] bg-black">
                <Image
                  src="/team/staff.jpg"
                  alt="Smart Motorz Team"
                  fill
                  sizes="100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-2xl font-bold">The Smart Motorz Team</p>
                  <p className="mt-2 text-white/75 max-w-2xl">
                    Professional, consistent service from consultation to delivery, plus ongoing after sales support.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold">Ready to drive smart?</h3>
            <p className="mt-3 text-white/70 max-w-2xl">
              Contact Smart Motorz today. Our team will handle everything from sourcing to delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a className="btn-primary" href="/contact">
                Contact and WhatsApp <ArrowRight size={16} className="ml-2" />
              </a>
              <a className="btn-outline" href="/services">
                View Services <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
