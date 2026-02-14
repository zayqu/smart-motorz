import {
  Ship,
  CreditCard,
  KeyRound,
  Scale,
  ShieldCheck,
  Handshake,
  Truck,
  PhoneCall,
  ClipboardList,
  FileText,
  Wallet,
  Globe,
  Radar,
  Car,
  CheckCircle2,
  BadgeCheck,
  Fuel,
  TriangleAlert,
  Flame,
  MapPin,
} from "lucide-react";

export default function Home() {
  const brandLogos = [
    { name: "Toyota", src: "/brands/toyota.webp" },
    { name: "Mercedes", src: "/brands/mercedes.webp" },
    { name: "BMW", src: "/brands/bmw.webp" },
    { name: "Nissan", src: "/brands/nissan.webp" },
    { name: "Audi", src: "/brands/audi.webp" },
    { name: "Land Rover", src: "/brands/landrover.webp" },
  ];

  const categories = [
    { label: "Sportcars", desc: "Performance-focused models", img: "/cats/sport.jpg" },
    { label: "SUVs", desc: "Comfort, space, power", img: "/cats/suv.jpg" },
    { label: "Luxury Sedans", desc: "Executive-class rides", img: "/cats/sedan.jpg" },
    { label: "Vans", desc: "Family & business utility", img: "/cats/van.jpg" },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO with VIDEO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            Automotive excellence
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Smart Motorz
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/75 max-w-3xl mx-auto">
            We simplify car buying through transparent importation, flexible financing, corporate rentals,
            in-country sourcing, and exclusive after-sales support in Tanzania.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/services#car-importation" className="btn-primary">
              Get a Personalized Vehicle Quote
            </a>
            <a href="/services#car-loans" className="btn-outline">
              Apply Today & Drive Home
            </a>
          </div>

          {/* Informative Quick Cards */}
          <div className="mx-auto max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="card-dark">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <Ship size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/60">Car Importation</p>
                  <p className="font-semibold">Transparent sourcing</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">Japan • Germany • Dubai • UK • USA</p>
              <a
                href="/services#car-importation"
                className="mt-4 inline-block text-sm text-yellow-500 hover:underline"
              >
                Get Quote →
              </a>
            </div>

            <div className="card-dark">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <CreditCard size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/60">Car Loans</p>
                  <p className="font-semibold">Drive home same day</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">2–4 years • No collateral</p>
              <a
                href="/services#car-loans"
                className="mt-4 inline-block text-sm text-yellow-500 hover:underline"
              >
                Apply Today →
              </a>
            </div>

            <div className="card-dark">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/25 grid place-items-center text-yellow-500">
                  <KeyRound size={18} />
                </span>
                <div>
                  <p className="text-xs text-white/60">Car Rentals</p>
                  <p className="font-semibold">Corporate & executives</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">Daily • Weekly • Long-term</p>
              <a
                href="/services#car-rentals"
                className="mt-4 inline-block text-sm text-yellow-500 hover:underline"
              >
                Secure Today →
              </a>
            </div>
          </div>
        </div>

        {/* Big faint text */}
        <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden md:block">
          <p className="text-[120px] font-black tracking-tight text-white/5 text-center">
            DRIVE SMART
          </p>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-t border-white/10" />
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-white/70">
            <a className="hover:text-yellow-500 transition" href="/services#car-importation">Importation</a>
            <a className="hover:text-yellow-500 transition" href="/services#car-loans">Loans</a>
            <a className="hover:text-yellow-500 transition" href="/services#in-country">In-Country Sourcing</a>
            <a className="hover:text-yellow-500 transition" href="/services#car-rentals">Rentals</a>
            <a className="hover:text-yellow-500 transition" href="/services#after-sales">After-Sales</a>
          </div>
        </div>
      </section>

      {/* LOGO SLIDER */}
      <section className="bg-black py-10 border-t border-white/10 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden">
            <div className="marquee gap-10 items-center">
              {[...brandLogos, ...brandLogos].map((b, idx) => (
                <div
                  key={`${b.name}-${idx}`}
                  className="h-12 w-28 flex items-center justify-center opacity-70 hover:opacity-100 transition"
                >
                  <img src={b.src} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAR TYPES */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Car Types</h2>
            <a href="/services" className="text-sm text-white/70 hover:text-yellow-500 transition">
              Explore services →
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
            {categories.map((c) => (
              <a
                key={c.label}
                href="/contact"
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-yellow-500 transition"
              >
                <div className="h-44 bg-black">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="h-full w-full object-cover opacity-85 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold">{c.label}</p>
                  <p className="mt-1 text-sm text-white/70">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE SPLIT SECTION */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold leading-tight">
              A smarter way to own a quality vehicle.
            </h2>
            <p className="mt-4 text-black/70">
              Smart Motorz is a division of Smart Group Holdings Limited dedicated to simplifying
              the car buying experience with quality, transparency and personalized service.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="/about" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                Learn About Smart Motorz
              </a>
              <a href="/contact" className="rounded-lg border border-black/20 px-6 py-3 font-semibold hover:border-black/40 transition">
                Speak With an Advisor
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src="/showcase.jpg" alt="Smart Motorz showcase" className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>

        {/* VALUE CARDS with icons */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Transparency", d: "Clear pricing & full vehicle details—no hidden charges.", Icon: Scale },
              { t: "Integrity", d: "Ethical standards and fairness in every transaction.", Icon: ShieldCheck },
              { t: "Trust", d: "Reliable service, quality vehicles, long-term support.", Icon: Handshake },
              { t: "Delivery", d: "Doorstep delivery to any region in Tanzania.", Icon: Truck },
            ].map(({ t, d, Icon }) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-500/30 grid place-items-center text-yellow-700">
                    <Icon size={18} />
                  </span>
                  <p className="font-semibold">{t}</p>
                </div>
                <p className="mt-3 text-sm text-black/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID IMAGE BANNER */}
      <section className="relative h-[360px]">
        <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-end pb-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold">Results. Not excuses.</h3>
            <p className="mt-3 text-white/75">
              Fast turnaround, strong local + international networks, and weekly updates until handover.
            </p>
          </div>
        </div>
      </section>

      {/* YELLOW STRIP */}
      <section className="bg-yellow-500 text-black">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Not sure which car is right for you?</h3>
            <p className="mt-2 text-black/80">
              Take our private 10-question assessment and receive a personalized recommendation.
              <span className="font-semibold"> Exclusive. Confidential. Tailored to you.</span>
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <a href="/private-car-match" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition text-center">
              Start Your Private Car Match
            </a>
            <a href="/contact" className="rounded-lg border border-black/25 px-6 py-3 font-semibold hover:border-black/40 transition text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO BUY + OFFERS */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* HOW TO BUY - premium steps */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold">How to Buy</h3>
            <p className="mt-3 text-black/70">A clear, guided process—from first message to handover.</p>

            <div className="mt-8 space-y-4">
              {[
                { t: "Get in touch", d: "Visit, call, WhatsApp or email to start.", I: PhoneCall },
                { t: "Private assessment", d: "We learn your budget, lifestyle, and preference.", I: ClipboardList },
                { t: "Transparent quote", d: "Contract + proforma invoice with full breakdown.", I: FileText },
                { t: "Initial payment", d: "60% deposit (or 100% for faster processing).", I: Wallet },
                { t: "Sourcing & import", d: "We handle the entire importation end-to-end.", I: Globe },
                { t: "Weekly tracking", d: "Shipping, clearing, registration, timeline updates.", I: Radar },
                { t: "Handover", d: "Collection or doorstep delivery—your choice.", I: Car },
                { t: "Drive with confidence", d: "After-sales support for our clients only.", I: CheckCircle2 },
              ].map(({ t, d, I }) => (
                <div key={t} className="flex gap-4 rounded-xl border border-black/10 bg-white p-4">
                  <span className="w-11 h-11 rounded-xl bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700 shrink-0">
                    <I size={18} />
                  </span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-black/70 mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="/contact" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                Begin Your Ownership Journey
              </a>
            </div>
          </div>

          {/* OFFERS */}
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold">Offers Included</h3>
            <p className="mt-3 text-black/70">Extra value and essentials included—no surprises.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Insurance (BIMA)", I: BadgeCheck },
                { t: "Registration & Plate Number", I: FileText },
                { t: "Triangle", I: TriangleAlert },
                { t: "Fire Extinguisher", I: Flame },
                { t: "Full Tank", I: Fuel },
                { t: "Delivery to Any Region", I: MapPin },
              ].map(({ t, I }) => (
                <div key={t} className="rounded-xl border border-black/10 bg-white p-5 flex gap-3">
                  <span className="mt-0.5 w-9 h-9 rounded-lg bg-yellow-500/20 border border-yellow-500/35 grid place-items-center text-yellow-700 shrink-0">
                    <I size={16} />
                  </span>
                  <p className="font-semibold">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-black/10">
              <img src="/offers.jpg" alt="Smart Motorz offers" className="h-[260px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
