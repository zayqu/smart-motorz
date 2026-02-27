// components/LeadFormModal.tsx  (update translations for hardcoded error/placeholder prefix)
"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

type LeadPayload = {
  fullName: string;
  phone: string;
  email?: string;
};

const WHATSAPP_NUMBER = "255651732526";

export default function LeadFormModal() {
  const { isOpen, close } = useLeadFormModal();
  const { t } = useTranslation();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const waMessage = useMemo(() => {
    const safeEmail = email?.trim() ? email.trim() : "-";
    return `Hello Smart Motorz,
My name is ${fullName.trim()}.
My phone number is ${phone.trim()}.
My email is ${safeEmail}.
I am interested in your services.`;
  }, [fullName, phone, email]);

  const reset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setSubmitting(false);
    setError(null);
  };

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  const openWhatsAppProgrammatically = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const submitLead = async (payload: LeadPayload) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(txt || "Request failed");
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const name = fullName.trim();
    const ph = phone.trim();
    const em = email.trim();

    if (!name || !ph) {
      setError("Required");
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({ fullName: name, phone: ph, email: em || undefined });
      openWhatsAppProgrammatically();
      close();
    } catch {
      setError("Failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
      <button type="button" aria-label="Close" onClick={close} className="absolute inset-0 bg-black/80" />

      <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div className="pr-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t("leadForm.title")}</h2>
            <p className="mt-2 text-white/70">{t("leadForm.subtitle")}</p>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close modal"
            className="w-11 h-11 rounded-xl border border-white/15 text-white/90 hover:border-yellow-500 transition grid place-items-center"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="px-6 pb-6 pt-5">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-semibold text-white/85">
                {t("leadForm.fullName")} <span className="text-yellow-500">*</span>
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("leadForm.fullNamePh")}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/85">
                {t("leadForm.phone")} <span className="text-yellow-500">*</span>
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                <span className="text-white/60 text-sm">{t("leadForm.phonePrefix")}</span>
                <span className="h-5 w-px bg-white/10" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none"
                  placeholder={t("leadForm.phonePh")}
                  required
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/85">{t("leadForm.email")}</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("leadForm.emailPh")}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                type="email"
                autoComplete="email"
              />
            </div>

            {error ? (
              <p className="text-sm text-red-400">
                {error === "Required" ? t("leadForm.errors.required") : t("leadForm.errors.failed")}
              </p>
            ) : null}

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={close} className="btn-outline w-full sm:w-auto" disabled={submitting}>
                {t("common.cancel")}
              </button>

              <button type="submit" className="btn-primary w-full sm:flex-1" disabled={submitting}>
                {submitting ? t("common.loading") : t("common.submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}