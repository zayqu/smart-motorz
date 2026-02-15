"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// ✅ Replace with real links (or keep "#")
const socials = {
  instagram: "#",
  facebook: "#",
  youtube: "#",
  twitter: "#",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hover:text-yellow-500 transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/contact" className="btn-primary hidden sm:inline-flex">
              Let’s Talk
            </a>

            {/* Mobile hamburger */}
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

      {/* ✅ FULLSCREEN TOP-SLIDE MENU (IN FRONT) */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[9999]",
          "transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/75 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* Panel slides from TOP and covers full screen */}
        <div
          className={[
            "absolute inset-0",
            "transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-full",
          ].join(" ")}
        >
          {/* Glass panel */}
          <div className="h-full w-full bg-black/55 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
            {/* Top bar */}
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

            {/* Menu content */}
            <div className="px-6 py-8 h-[calc(100%-80px)] overflow-y-auto">
              <div className="grid gap-3">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white/90 font-semibold hover:border-yellow-500/60 transition"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>

              {/* Optional bottom CTA (still just a button, no details) */}
              <div className="mt-6 grid gap-3">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary text-center w-full"
                >
                  Contact / WhatsApp
                </a>
              </div>

              {/* Social icons */}
              <div className="mt-10">
                <div className="flex gap-2">
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md grid place-items-center hover:border-yellow-500 transition"
                    aria-label="X / Twitter"
                    title="X / Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>

                <p className="mt-6 text-xs text-white/50">
                  Transparency • Integrity • Trust
                </p>
              </div>

              <div className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
