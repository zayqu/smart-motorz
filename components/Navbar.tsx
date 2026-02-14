"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Smart Motorz" className="w-36" />
        </Link>

        <div className="space-x-8 hidden md:block">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/services" className="hover:text-yellow-500">
            Services
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}