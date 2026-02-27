// app/contact/page.tsx  (update: FULL REPLACE)
"use client";

import { motion, Variants } from "framer-motion";
import { PhoneCall, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

export default function ContactPage() {
  const { t } = useTranslation();
  const { open: openLead } = useLeadFormModal();

  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const email = "info@smartmotorz.co.tz";
  const phone = "+255651732526";
  const address = "Tanga Mjini, Chuda karibu na Nyinda Tourist Hotel.";
  const hours = "Monday – Saturday, 08:00 – 17:00";

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              {t("contact.title")}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
              {t("contact.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openLead} className="btn-primary">
                {t("cta.talk")} <ArrowRight size={16} className="ml-2" />
              </button>
              <a href={`mailto:${email}`} className="btn-outline">
                {t("contact.emailUs")} <ArrowRight size={16} className="ml-2" />
              </a>
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
            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <MessageCircle size={18} />
                </span>
                <h2 className="text-2xl font-bold">{t("contact.fastestTitle")}</h2>
              </div>
              <p className="mt-4 text-white/70">{t("contact.fastestDesc")}</p>
              <button type="button" onClick={openLead} className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                {t("contact.openForm")} <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <Mail size={18} />
                </span>
                <h2 className="text-2xl font-bold">{t("contact.emailTitle")}</h2>
              </div>
              <p className="mt-4 text-white/70">{t("contact.emailDesc")}</p>
              <a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                {email} <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <PhoneCall size={18} />
                </span>
                <h2 className="text-2xl font-bold">{t("contact.phoneTitle")}</h2>
              </div>
              <p className="mt-4 text-white/70">{t("contact.phoneDesc")}</p>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                {phone} <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <MapPin size={18} />
                </span>
                <h2 className="text-2xl font-bold">{t("contact.locationTitle")}</h2>
              </div>
              <div className="mt-4 space-y-2 text-white/70">
                <p className="flex items-center gap-2"><MapPin size={16} className="text-yellow-500" /> {address}</p>
                <p className="flex items-center gap-2"><Clock size={16} className="text-yellow-500" /> {hours}</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold">{t("contact.fastQuoteTitle")}</h3>
            <p className="mt-3 text-white/70">{t("contact.fastQuoteDesc")}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openLead} className="btn-primary text-center">
                {t("cta.talk")}
              </button>
              <a href="/services" className="btn-outline text-center">
                {t("contact.viewServices")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}