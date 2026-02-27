// app/services/page.tsx  (update buttons + translations: FULL REPLACE)
"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { Ship, CreditCard, Search, KeyRound, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

export default function ServicesPage() {
  const { t } = useTranslation();
  const { open: openLead } = useLeadFormModal();

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
      title: t("services.items.importation.title"),
      desc: t("services.items.importation.desc"),
      bullets: t("services.items.importation.bullets", { returnObjects: true }) as string[],
      cta: t("services.items.importation.cta"),
    },
    {
      id: "car-loans",
      Icon: CreditCard,
      title: t("services.items.loans.title"),
      desc: t("services.items.loans.desc"),
      bullets: t("services.items.loans.bullets", { returnObjects: true }) as string[],
      cta: t("services.items.loans.cta"),
    },
    {
      id: "in-country",
      Icon: Search,
      title: t("services.items.inCountry.title"),
      desc: t("services.items.inCountry.desc"),
      bullets: t("services.items.inCountry.bullets", { returnObjects: true }) as string[],
      cta: t("services.items.inCountry.cta"),
    },
    {
      id: "car-rentals",
      Icon: KeyRound,
      title: t("services.items.rentals.title"),
      desc: t("services.items.rentals.desc"),
      bullets: t("services.items.rentals.bullets", { returnObjects: true }) as string[],
      cta: t("services.items.rentals.cta"),
    },
    {
      id: "after-sales",
      Icon: Wrench,
      title: t("services.items.afterSales.title"),
      desc: t("services.items.afterSales.desc"),
      bullets: t("services.items.afterSales.bullets", { returnObjects: true }) as string[],
      cta: t("services.items.afterSales.cta"),
    },
  ];

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              {t("services.title")}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
              {t("services.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openLead} className="btn-primary">
                {t("cta.talk")} <ArrowRight size={16} className="ml-2" />
              </button>
              <a href="/why-choose-us" className="btn-outline">
                {t("services.why")} <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
          {services.map((s) => (
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
                    <button type="button" onClick={openLead} className="btn-primary">
                      {s.cta} <ArrowRight size={16} className="ml-2" />
                    </button>
                    <button type="button" onClick={openLead} className="btn-outline">
                      {t("services.talk")} <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <p className="text-sm text-white/70 mb-4">{t("services.whatYouGet")}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-white/80">
                          <CheckCircle2 size={18} className="text-yellow-500 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 text-sm text-white/60">{t("footer.values")}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 text-black">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">{t("services.stripTitle")}</h3>
            <p className="mt-2 text-black/80">{t("services.stripDesc")}</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={openLead}
              className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition text-center"
            >
              {t("services.stripPrimary")}
            </button>
            <button
              type="button"
              onClick={openLead}
              className="rounded-lg border border-black/25 px-6 py-3 font-semibold hover:border-black/40 transition text-center"
            >
              {t("services.stripSecondary")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}