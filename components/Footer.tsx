import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
  MessageCircle,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";

// ✅ Replace these with real details
const CONTACT = {
  phone: "+255 000 000 000",
  email: "info@smartmotorz.co.tz",
  location: "Dar es Salaam, Tanzania",
  whatsappNumber: "255000000000", // no +
};

// ✅ Replace with real social links (or keep "#")
const SOCIALS = {
  instagram: "#",
  facebook: "#",
  youtube: "#",
  twitter: "#",
};

export default function Footer() {
  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hello Smart Motorz, I’d like a vehicle consultation."
  )}`;

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top CTA strip inside footer */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 md:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm text-white/70">Smart Motorz Promise</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                Buying a car should feel exciting, not stressful.
              </h3>
              <p className="mt-3 text-white/70">
                We deliver transparency, fast turnaround, and full support from sourcing to doorstep delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-center"
              >
                WhatsApp Now <ArrowRight size={16} className="ml-2" />
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Contact <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* 5 CTAs grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3">
            <Link
              href="/services#car-loans"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">Car Loans</p>
              <p className="mt-1 text-white/60">Apply today, drive same day</p>
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">How to Buy</p>
              <p className="mt-1 text-white/60">Begin your ownership journey</p>
            </Link>

            <Link
              href="/services#car-importation"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">Importation</p>
              <p className="mt-1 text-white/60">Get a vehicle quote</p>
            </Link>

            <Link
              href="/services#in country"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">in country Sourcing</p>
              <p className="mt-1 text-white/60">Speak with an advisor</p>
            </Link>

            <Link
              href="/services#car-rentals"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">Car Rentals</p>
              <p className="mt-1 text-white/60">Secure your vehicle today</p>
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/logo.svg"
              alt="Smart Motorz"
              width={260}
              height={100}
              className="h-10 w-auto object-contain"
            />

            <p className="mt-4 text-white/70">
              Smart Motorz (Smart Group Holdings Limited) simplifies car buying through transparent car importation,
              flexible vehicle financing, corporate car rentals, in country sourcing, and exclusive after sales support.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/75">
              <p className="flex items-center gap-2">
                <PhoneCall size={16} className="text-yellow-500" />
                <span className="font-semibold">Phone:</span> {CONTACT.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                <span className="font-semibold">Email:</span> {CONTACT.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-500" />
                <span className="font-semibold">Location:</span> {CONTACT.location}
              </p>
            </div>

            {/* Quick actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-yellow-500 transition"
              >
                <MessageCircle size={16} className="text-yellow-500" />
                WhatsApp
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-yellow-500 transition"
              >
                <Mail size={16} className="text-yellow-500" />
                Email
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold">Useful Links</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><Link className="hover:text-yellow-500 transition" href="/">Home</Link></li>
              <li><Link className="hover:text-yellow-500 transition" href="/about">About</Link></li>
              <li><Link className="hover:text-yellow-500 transition" href="/services">Services</Link></li>
              <li><Link className="hover:text-yellow-500 transition" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="font-bold">Follow</h4>
            <p className="mt-4 text-white/70">
              Updates, arrivals, and offers, follow Smart Motorz.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SOCIALS.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                aria-label="X / Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Transparency • Integrity • Trust
            </p>
          </div>
        </div>

        {/* Bottom bar + ✅ Daraja credit (visible, premium) */}
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} Smart Motorz. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span>Smart Group Holdings Limited</span>
            <span className="hidden sm:inline">•</span>

            <a
              href="https://daraja.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              title="Website by Daraja"
            >
              Website by Daraja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
