"use client";

import { motion, Variants } from "framer-motion";
import { PhoneCall, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  // ✅ Replace these with real details
  const whatsappNumber = "255000000000"; // no + sign
  const email = "info@smartmotorz.co.tz";
  const phone = "+255 000 000 000";
  const address = "Dar es Salaam, Tanzania";
  const hours = "Mon–Sat: 8:00 AM – 6:00 PM";

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Smart Motorz, I’d like a vehicle consultation."
  )}`;

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              Contact Smart Motorz
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
              Ready to drive smart? Send us your budget and preference we’ll recommend the right vehicle and handle the rest.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={waLink} target="_blank" className="btn-primary">
                WhatsApp Now <ArrowRight size={16} className="ml-2" />
              </a>
              <a href={`mailto:${email}`} className="btn-outline">
                Email Us <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      {/* CONTACT CARDS */}
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
                <h2 className="text-2xl font-bold">WhatsApp</h2>
              </div>
              <p className="mt-4 text-white/70">
                Fastest way to reach us. Send your budget, preferred model, and timeline.
              </p>
              <a href={waLink} target="_blank" className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                Open WhatsApp <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <Mail size={18} />
                </span>
                <h2 className="text-2xl font-bold">Email</h2>
              </div>
              <p className="mt-4 text-white/70">
                Prefer email? Send a short brief and we’ll respond with next steps.
              </p>
              <a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                {email} <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <PhoneCall size={18} />
                </span>
                <h2 className="text-2xl font-bold">Phone</h2>
              </div>
              <p className="mt-4 text-white/70">
                Call us for a direct consultation and quick guidance.
              </p>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-6 inline-flex items-center gap-2 text-yellow-500 hover:underline">
                {phone} <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <MapPin size={18} />
                </span>
                <h2 className="text-2xl font-bold">Location & Hours</h2>
              </div>
              <div className="mt-4 space-y-2 text-white/70">
                <p className="flex items-center gap-2"><MapPin size={16} className="text-yellow-500" /> {address}</p>
                <p className="flex items-center gap-2"><Clock size={16} className="text-yellow-500" /> {hours}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold">Send this to get a fast quote</h3>
            <p className="mt-3 text-white/70">
              Budget • Preferred model • Fuel type • Transmission • Timeline • City/Region for delivery.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={waLink} target="_blank" className="btn-primary text-center">
                WhatsApp Now
              </a>
              <a href="/services" className="btn-outline text-center">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
