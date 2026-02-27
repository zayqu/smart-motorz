// components/Footer.tsx (FULL REPLACE)
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  ArrowRight,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLeadFormModal } from "@/components/LeadModalProvider";
import {
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  FACEBOOK_LINK,
} from "@/lib/siteConfig";

const CONTACT = {
  phone: "+255651732526",
  email: "info@smartmotorz.co.tz",
  address: "Tanga Mjini, Chuda karibu na Nyinda Tourist Hotel.",
  hours: "Monday – Saturday, 08:00 – 17:00",
};

const SOCIALS = {
  instagram: INSTAGRAM_LINK,
  tiktok: TIKTOK_LINK,
  facebook: FACEBOOK_LINK,
};

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

export default function Footer() {
  const { t } = useTranslation();
  const { open: openLead } = useLeadFormModal();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 md:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm text-white/70">{t("footer.promise")}</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                {t("footer.promiseTitle")}
              </h3>
              <p className="mt-3 text-white/70">{t("footer.promiseDesc")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={openLead}
                className="btn-primary text-center"
              >
                {t("cta.talk")} <ArrowRight size={16} className="ml-2" />
              </button>
              <Link href="/contact" className="btn-outline text-center">
                {t("nav.contact")} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3">
            <Link
              href="/services#car-loans"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">{t("footer.carLoans")}</p>
              <p className="mt-1 text-white/60">{t("footer.carLoansDesc")}</p>
            </Link>

            <Link
              href="/how-to-buy"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">{t("footer.howToBuy")}</p>
              <p className="mt-1 text-white/60">{t("footer.howToBuyDesc")}</p>
            </Link>

            <Link
              href="/services#car-importation"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">{t("footer.importation")}</p>
              <p className="mt-1 text-white/60">
                {t("footer.importationDesc")}
              </p>
            </Link>

            <Link
              href="/services#in-country"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">{t("footer.inCountry")}</p>
              <p className="mt-1 text-white/60">{t("footer.inCountryDesc")}</p>
            </Link>

            <Link
              href="/services#car-rentals"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/85 hover:border-yellow-500 transition"
            >
              <p className="font-semibold">{t("footer.carRentals")}</p>
              <p className="mt-1 text-white/60">
                {t("footer.carRentalsDesc")}
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Image
              src="/logo.svg"
              alt="Smart Motorz"
              width={260}
              height={100}
              className="h-10 w-auto object-contain"
            />

            <p className="mt-4 text-white/70">{t("footer.aboutText")}</p>

            <div className="mt-6 space-y-2 text-sm text-white/75">
              <p className="flex items-center gap-2">
                <PhoneCall size={16} className="text-yellow-500" />
                <span className="font-semibold">{t("footer.phone")}</span>{" "}
                {CONTACT.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                <span className="font-semibold">{t("footer.email")}</span>{" "}
                {CONTACT.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-500" />
                <span className="font-semibold">{t("footer.address")}</span>{" "}
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="text-yellow-500" />
                <span className="font-semibold">{t("footer.hours")}</span>{" "}
                {CONTACT.hours}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openLead}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-yellow-500 transition"
              >
                {t("cta.talk")}
              </button>

              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-yellow-500 transition"
              >
                <Mail size={16} className="text-yellow-500" />
                {t("footer.emailBtn")}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold">{t("footer.usefulLinks")}</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>
                <Link className="hover:text-yellow-500 transition" href="/">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-yellow-500 transition" href="/about">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-500 transition"
                  href="/services"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-500 transition"
                  href="/how-to-buy"
                >
                  {t("nav.howToBuy")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-500 transition"
                  href="/why-choose-us"
                >
                  {t("nav.whyChooseUs")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-500 transition"
                  href="/contact"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold">{t("footer.follow")}</h4>
            <p className="mt-4 text-white/70">{t("footer.followDesc")}</p>

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
                href={SOCIALS.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 grid place-items-center hover:border-yellow-500 transition"
                aria-label="TikTok"
              >
                <TikTokIcon />
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
            </div>

            <p className="mt-6 text-sm text-white/60">{t("footer.values")}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row gap-3 justify-between">
          <p>
            © {new Date().getFullYear()} Smart Motorz. {t("footer.rights")}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span>{t("footer.company")}</span>
            <span className="hidden sm:inline">•</span>

            <a
              href="https://daraja.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              title="Website by Daraja"
            >
              {t("footer.websiteBy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}