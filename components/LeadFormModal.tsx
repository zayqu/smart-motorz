"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";

const WHATSAPP_NUMBER = "255651732526";

export default function LeadFormModal() {
  const { isOpen, close } = useLeadFormModal();
  const { t } = useTranslation();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const waMessage = useMemo(() => {
    const safeEmail = email?.trim() ? email.trim() : "-";
    return `Hello Smart Motorz,
My name is ${fullName.trim()}.
My phone number is +255${phone.trim()}.
My email is ${safeEmail}.
I am interested in your services.`;
  }, [fullName, phone, email]);

  const reset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setError(null);
  };

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const name = fullName.trim();
    const ph = phone.trim();

    if (!name || !ph) {
      setError("Required");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      waMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
      <button
        type="button"
        onClick={close}
        className="absolute inset-0 bg-black/80"
      />

      <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div className="pr-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("leadForm.title")}
            </h2>
            <p className="mt-2 text-white/70">
              {t("leadForm.subtitle")}
            </p>
          </div>

          <button
            type="button"
            onClick={close}
            className="w-11 h-11 rounded-xl border border-white/15 text-white/90 hover:border-yellow-500 transition grid place-items-center"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="px-6 pb-6 pt-5">
          <div className="grid gap-4">

            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-semibold text-white/85">
                {t("leadForm.fullName")} *
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("leadForm.fullNamePh")}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold text-white/85">
                {t("leadForm.phone")} *
              </label>

              <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                <span className="text-white/60 text-sm">+255</span>
                <span className="h-5 w-px bg-white/10" />
                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 9))
                  }
                  placeholder="7XXXXXXXX"
                  className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none"
                  inputMode="tel"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-white/85">
                {t("leadForm.email")}
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("leadForm.emailPh")}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                type="email"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">
                {t("leadForm.errors.required")}
              </p>
            )}

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={close}
                className="btn-outline w-full sm:w-auto"
              >
                {t("common.cancel")}
              </button>

              <button type="submit" className="btn-primary w-full sm:flex-1">
                {t("common.submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}