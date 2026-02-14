export default function Home() {
  const brandLogos = [
    { name: "Toyota", src: "/brands/toyota.png" },
    { name: "Mercedes", src: "/brands/mercedes.png" },
    { name: "BMW", src: "/brands/bmw.png" },
    { name: "Nissan", src: "/brands/nissan.png" },
    { name: "Audi", src: "/brands/audi.png" },
    { name: "Land Rover", src: "/brands/landrover.png" },
  ];

  const categories = [
    { label: "Sportcars", desc: "Performance-focused models", img: "/cats/sport.jpg" },
    { label: "SUVs", desc: "Comfort, space, power", img: "/cats/suv.jpg" },
    { label: "Luxury Sedans", desc: "Executive-class rides", img: "/cats/sedan.jpg" },
    { label: "Vans", desc: "Family & business utility", img: "/cats/van.jpg" },
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-28 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            Automotive excellence
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Smart Motorz
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/75 max-w-3xl mx-auto">
            We simplify car buying through transparent importation, flexible financing,
            corporate rentals, in-country sourcing, and exclusive after-sales support in Tanzania.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/services#car-importation" className="btn-primary">
              Get a Personalized Vehicle Quote
            </a>
            <a href="/how-to-buy" className="btn-outline">
              Begin Your Ownership Journey
            </a>
          </div>

          {/* INFORMATIVE QUICK CARDS (keep the Rally feel) */}
          <div className="mx-auto max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="card-dark">
              <p className="text-xs text-white/60">Car Importation</p>
              <p className="mt-1 font-semibold">Transparent sourcing</p>
              <p className="mt-1 text-sm text-white/70">Japan • Germany • Dubai • UK • USA</p>
              <a href="/services#car-importation" className="mt-4 inline-block text-sm text-yellow-500 hover:underline">
                Get Quote →
              </a>
            </div>
            <div className="card-dark">
              <p className="text-xs text-white/60">Car Loans</p>
              <p className="mt-1 font-semibold">Drive home same day</p>
              <p className="mt-1 text-sm text-white/70">2–4 years • No collateral</p>
              <a href="/services#car-loans" className="mt-4 inline-block text-sm text-yellow-500 hover:underline">
                Apply Today →
              </a>
            </div>
            <div className="card-dark">
              <p className="text-xs text-white/60">Car Rentals</p>
              <p className="mt-1 font-semibold">Corporate & executives</p>
              <p className="mt-1 text-sm text-white/70">Daily • Weekly • Long-term</p>
              <a href="/services#car-rentals" className="mt-4 inline-block text-sm text-yellow-500 hover:underline">
                Secure Today →
              </a>
            </div>
          </div>
        </div>

        {/* BIG FAINT TEXT */}
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

      {/* CAR TYPE SECTION */}
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
                Speak With a Smart Motorz Advisor
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src="/showcase.jpg" alt="Smart Motorz showcase" className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>

        {/* VALUE CARDS */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              ["Transparency", "Clear pricing & full vehicle details—no hidden charges."],
              ["Integrity", "Ethical standards and fairness in every transaction."],
              ["Trust", "Reliable service, quality vehicles, long-term support."],
              ["Delivery", "Doorstep delivery to any region in Tanzania."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-6">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-black/70">{d}</p>
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
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold">How to Buy</h3>
            <ol className="mt-6 space-y-4 text-black/75">
              {[
                "Get in Touch via office, phone, WhatsApp, or email.",
                "Choose the Right Car with our expert guidance.",
                "Review Transparent Pricing (contract + proforma invoice).",
                "Make Initial Payment: 60% deposit or 100% upfront.",
                "We Handle Importation end-to-end.",
                "Track Your Vehicle with weekly updates.",
                "Vehicle Handover: collection or doorstep delivery.",
                "Drive with Confidence: stress-free and fully handled.",
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-bold">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <a href="/how-to-buy" className="rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                Begin Your Ownership Journey
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold">Offers Included</h3>
            <p className="mt-3 text-black/70">
              We go beyond the sale—here’s what you get with Smart Motorz.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Insurance (BIMA)",
                "Registration & Plate Number",
                "Triangle",
                "Fire Extinguisher",
                "Full Tank",
                "Delivery to Any Region",
              ].map((o) => (
                <div key={o} className="rounded-xl border border-black/10 bg-white p-5 flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <p className="font-semibold">{o}</p>
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
