// components/Navbar.tsx (FULL REPLACE)
// NOTE: Only updated to include TikTok + Facebook social links/icons, no removals of existing structure.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { setLang, getLang } from "@/i18n/client";
import {
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  TIKTOK_LINK,
  PHONE_TEL,
} from "@/lib/siteConfig";

const nav = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/how-to-buy", key: "nav.howToBuy" },
  { href: "/why-choose-us", key: "nav.whyChooseUs" },
  { href: "/contact", key: "nav.contact" },
];

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[18px] h-[18px]"
      aria-hidden="true"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-2.885-.973v6.511a5.223 5.223 0 1 1-5.223-5.223c.184 0 .365.015.543.045v2.708a2.516 2.516 0 1 0 2.93 2.47V2h2.75a4.81 4.81 0 0 0 2.885 4.686z" />
    </svg>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const lang = getLang();
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [i18n]);

  const activeLang = (i18n.language === "sw" ? "sw" : "en") as "en" | "sw";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/65 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Smart Motorz"
              width={260}
              height={100}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hover:text-yellow-500 transition"
              >
                {t(n.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden sm:flex items-center gap-2 text-sm text-white/80">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "px-2 py-1 rounded-md border transition",
                  activeLang === "en"
                    ? "border-yellow-500 text-yellow-500"
                    : "border-white/15 hover:border-yellow-500/60",
                ].join(" ")}
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                type="button"
                onClick={() => setLang("sw")}
                className={[
                  "px-2 py-1 rounded-md border transition",
                  activeLang === "sw"
                    ? "border-yellow-500 text-yellow-500"
                    : "border-white/15 hover:border-yellow-500/60",
                ].join(" ")}
              >
                SW
              </button>
            </div>

            {/* Lets Talk => CALL */}
            <a href={PHONE_TEL} className="btn-primary hidden sm:inline-flex">
              {t("cta.talk")}
            </a>

            <button
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-white/90 hover:border-yellow-500 transition"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          "md:hidden fixed inset-0 z-[9999]",
          "transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-black/75 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        <div
          className={[
            "absolute inset-0",
            "transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-full",
          ].join(" ")}
        >
          <div className="h-full w-full bg-black/55 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
            <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/10">
              <Image
                src="/logo.svg"
                alt="Smart Motorz"
                width={240}
                height={90}
                className="h-10 w-auto object-contain"
              />
              <button
                className="w-11 h-11 rounded-xl border border-white/15 text-white/90 hover:border-yellow-500 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-8 h-[calc(100%-80px)] overflow-y-auto">
              <div className="grid gap-3">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white/90 font-semibold hover:border-yellow-500/60 transition"
                  >
                    {t(n.key)}
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={PHONE_TEL}
                  onClick={() => setOpen(false)}
                  className="btn-primary text-center w-full"
                >
                  {t("cta.talk")}
                </a>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-sm text-white/80">Language</div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={[
                      "px-2 py-1 rounded-md border transition",
                      activeLang === "en"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-white/15 hover:border-yellow-500/60",
                    ].join(" ")}
                  >
                    EN
                  </button>
                  <span className="text-white/30">|</span>
                  <button
                    type="button"
                    onClick={() => setLang("sw")}
                    className={[
                      "px-2 py-1 rounded-md border transition",
                      activeLang === "sw"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-white/15 hover:border-yellow-500/60",
                    ].join(" ")}
                  >
                    SW
                  </button>
                </div>
              </div>

              {/* Socials (UPDATED: Instagram + TikTok + Facebook) */}
              <div className="mt-8 flex gap-2">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <TikTokIcon />
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <p className="mt-6 text-xs text-white/50">
                Transparency • Integrity • Trust
              </p>

              <div className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}