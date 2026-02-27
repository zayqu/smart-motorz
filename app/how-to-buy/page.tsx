// app/how-to-buy/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

export default function HowToBuyPage() {
  const { t } = useTranslation();
  const { open: openLead } = useLeadFormModal();

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

  const steps = [
    {
      title: t("howToBuy.steps.choose.title"),
      desc: t("howToBuy.steps.choose.desc"),
    },
    {
      title: t("howToBuy.steps.budget.title"),
      desc: t("howToBuy.steps.budget.desc"),
    },
    {
      title: t("howToBuy.steps.secure.title"),
      desc: t("howToBuy.steps.secure.desc"),
    },
    {
      title: t("howToBuy.steps.delivery.title"),
      desc: t("howToBuy.steps.delivery.desc"),
    },
  ];

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {t("howToBuy.title")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-white/70 text-base md:text-lg"
            >
              {t("howToBuy.subtitle")}
            </motion.p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md hover:border-yellow-500/35 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                    {idx + 1}
                  </span>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                </div>
                <p className="mt-4 text-white/70">{s.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 size={16} className="text-yellow-500" />
                  {t("howToBuy.note")}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {t("howToBuy.ctaTitle")}
              </h3>
              <p className="mt-2 text-white/70">{t("howToBuy.ctaDesc")}</p>
            </div>

            <button type="button" onClick={openLead} className="btn-primary">
              {t("howToBuy.ctaButton")} <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}