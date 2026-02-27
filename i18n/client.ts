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
    (typeof window !== "undefined" && window.localStorage.getItem("locale")) ||
    getCookie(COOKIE_NAME) ||
    "en";
  return saved === "sw" ? "sw" : "en";
}

export function setLang(lang: "en" | "sw") {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("locale", lang);
    document.documentElement.lang = lang;
  }
  setCookie(COOKIE_NAME, lang);
  i18n.changeLanguage(lang);
}

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