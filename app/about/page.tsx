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
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

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

  // Only 2 leadership members (translated)
  const leaders = [
    {
      key: "ceo",
      name: t("about.leadership.members.ceo.name"),
      title: t("about.leadership.members.ceo.title"),
      message: t("about.leadership.members.ceo.message"),
      // Replace with your real photo path
      image: "/team/ceo.jpg",
    },
    {
      key: "ops",
      name: t("about.leadership.members.ops.name"),
      title: t("about.leadership.members.ops.title"),
      message: t("about.leadership.members.ops.message"),
      // Replace with your real photo path
      image: "/team/ops.jpg",
    },
  ] as const;

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sm text-white/75"
            >
              <Sparkles size={16} className="text-yellow-500" />
              {t("about.hero.badge")}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl md:text-6xl font-bold tracking-tight"
            >
              {t("about.hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-white/70 text-base md:text-lg"
            >
              {t("about.hero.description")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="/services" className="btn-primary">
                {t("about.hero.primary")} <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="/contact" className="btn-outline">
                {t("about.hero.secondary")} <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              {t("about.values.title")}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 text-white/70 max-w-3xl">
              {t("about.values.subtitle")}
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: t("about.values.items.transparency.title"),
                  desc: t("about.values.items.transparency.desc"),
                  Icon: Scale,
                },
                {
                  title: t("about.values.items.integrity.title"),
                  desc: t("about.values.items.integrity.desc"),
                  Icon: ShieldCheck,
                },
                {
                  title: t("about.values.items.trust.title"),
                  desc: t("about.values.items.trust.desc"),
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
              <h3 className="text-3xl font-bold">{t("about.vision.title")}</h3>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-black/70">
              {t("about.vision.desc")}
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
              <h3 className="text-3xl font-bold">{t("about.mission.title")}</h3>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-black/70">
              {t("about.mission.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP (2 members only, no CTA buttons on the cards) */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
              {t("about.leadership.title")}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 text-white/70 max-w-3xl">
              {t("about.leadership.subtitle")}
            </motion.p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {leaders.map((m) => (
                <motion.div
                  key={m.key}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
                >
                  <div className="relative aspect-4/5 bg-black">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top opacity-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl font-semibold">{m.name}</p>
                      <p className="mt-1 text-sm text-white/70">{m.title}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-white/80 leading-relaxed">{m.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold">{t("about.cta.title")}</h3>
            <p className="mt-3 text-white/70 max-w-2xl">{t("about.cta.desc")}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a className="btn-primary" href="/contact">
                {t("about.cta.primary")} <ArrowRight size={16} className="ml-2" />
              </a>
              <a className="btn-outline" href="/services">
                {t("about.cta.secondary")} <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}