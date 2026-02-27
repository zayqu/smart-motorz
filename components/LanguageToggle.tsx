"use client";

import { useTranslation } from "react-i18next";
import { setLanguage } from "@/i18n/client";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const active = i18n.language === "sw" ? "sw" : "en";

  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={
          active === "en"
            ? "rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-black"
            : "rounded-lg px-3 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10"
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("sw")}
        className={
          active === "sw"
            ? "rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-black"
            : "rounded-lg px-3 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10"
        }
      >
        SW
      </button>
    </div>
  );
}