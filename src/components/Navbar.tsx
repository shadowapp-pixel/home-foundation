"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#EAE6DD]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1D3557] flex items-center justify-center flex-shrink-0">
              <span className="text-[#C8A96B] font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                H
              </span>
            </div>
            <div className="leading-tight">
              <div
                className="text-[#1D3557] font-bold text-base tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                HOME Foundation
              </div>
              <div className="text-[#C8A96B] text-[10px] tracking-widest uppercase font-medium">
                Helping Others Meet Expectations
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[#C8A96B]"
                    : "text-[#2F2F2F] hover:text-[#1D3557]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-[#1D3557] text-white text-sm font-medium rounded-full hover:bg-[#C8A96B] transition-colors duration-300"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1D3557]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#EAE6DD] shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-[#C8A96B]" : "text-[#2F2F2F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-3 bg-[#1D3557] text-white text-sm font-medium rounded-full text-center hover:bg-[#C8A96B] transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
