// app/why-choose-us/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

export default function WhyChooseUsPage() {
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

  const items = [
    "why.items.experienced",
    "why.items.rightCar",
    "why.items.transparency",
    "why.items.endToEnd",
    "why.items.fast",
    "why.items.relationships",
    "why.items.peace",
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
              {t("why.title")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-white/70 text-base md:text-lg"
            >
              {t("why.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <button type="button" onClick={openLead} className="btn-primary">
                {t("why.cta")} <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
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
            {items.map((k) => (
              <motion.div
                key={k}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md hover:border-yellow-500/35 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500 shrink-0">
                    <BadgeCheck size={18} />
                  </span>
                  <p className="text-white/85 leading-relaxed">{t(k)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-xl md:text-2xl font-bold">{t("why.footerLine")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}