"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/65 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
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
            <Link key={n.href} href={n.href} className="hover:text-yellow-500 transition">
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

      {/* Mobile TOP SLIDE MENU */}
      <div
        className={[
          "md:hidden fixed left-0 right-0 top-0 z-[60] transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-full",
        ].join(" ")}
      >
        {/* Overlay */}
        <div
          className={[
            "absolute inset-0 bg-black/70 transition-opacity duration-300",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div className="relative bg-black border-b border-white/10 shadow-2xl">
          <div className="px-6 py-4 flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Smart Motorz"
              width={260}
              height={100}
              className="h-10 w-auto object-contain"
            />

            <button
              className="w-11 h-11 rounded-lg border border-white/15 text-white/90 hover:border-yellow-500 transition"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="px-6 pb-6 grid gap-3 text-white/85">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:border-yellow-500 transition"
              >
                {n.label}
              </Link>
            ))}

            <a href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">
              Contact / WhatsApp
            </a>

            {/* Social Icons */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs text-white/60">Follow</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                  aria-label="X / Twitter"
                  title="X / Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <p className="mt-2 text-xs text-white/50">Transparency • Integrity • Trust</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
