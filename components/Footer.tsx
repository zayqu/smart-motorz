import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt="Smart Motorz"
              width={220}
              height={80}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 text-white/70">
              Smart Motorz (Smart Group Holdings) simplifies car buying with transparency,
              integrity, and trust—importation, financing, rentals, sourcing and after-sales support.
            </p>

            <div className="mt-6 text-sm text-white/80 space-y-1">
              <p><span className="font-semibold">Phone:</span> +255 000 000 000</p>
              <p><span className="font-semibold">Email:</span> info@smartmotorz.co.tz</p>
              <p><span className="font-semibold">Location:</span> Dar es Salaam, Tanzania</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold">Links</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a className="hover:text-yellow-500" href="/services">Services</a></li>
              <li><a className="hover:text-yellow-500" href="/how-to-buy">How to Buy</a></li>
              <li><a className="hover:text-yellow-500" href="/offers">Offers</a></li>
              <li><a className="hover:text-yellow-500" href="/private-car-match">Private Car Match</a></li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="font-bold">Ready to drive smart?</h4>
            <p className="mt-4 text-white/70">
              Contact Smart Motorz today and let us handle the rest.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a className="btn-primary text-center" href="/contact">
                Contact Us
              </a>
              <a className="btn-outline text-center" href="/services#car-loans">
                Apply Today & Drive Home
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} Smart Motorz. All rights reserved.</p>
          <p>Transparency • Integrity • Trust</p>
        </div>
      </div>
    </footer>
  );
}
