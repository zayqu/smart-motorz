"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/messages/en.json";
import sw from "@/messages/sw.json";

const COOKIE_NAME = "sm_lang";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : null;
}

function setCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function getLang(): "en" | "sw" {
  const saved =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("locale")) ||
    getCookie(COOKIE_NAME) ||
    "en";

  return saved === "sw" ? "sw" : "en";
}

/**
 * Main language setter
 */
export function setLanguage(lang: "en" | "sw") {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("locale", lang);
    document.documentElement.lang = lang;
  }

  setCookie(COOKIE_NAME, lang);

  if (i18n.isInitialized) {
    i18n.changeLanguage(lang);
  }
}

/**
 * Backward compatibility (if any file uses setLang)
 */
export const setLang = setLanguage;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      sw: { translation: sw },
    },
    lng: getLang(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export default i18n;