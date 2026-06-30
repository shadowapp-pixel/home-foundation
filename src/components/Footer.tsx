import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1D3557] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B]/30 flex items-center justify-center">
                <span className="text-[#C8A96B] font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  H
                </span>
              </div>
              <div>
                <div className="font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                  HOME Foundation
                </div>
                <div className="text-[#C8A96B] text-[10px] tracking-widest uppercase">
                  Helping Others Meet Expectations
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Preserving and expanding access to safe, stable, and affordable housing for families in Maryland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Our Programs" },
                { href: "/leadership", label: "Leadership" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C8A96B] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="text-[#C8A96B] flex-shrink-0" />
                <a href="mailto:info@homefoundationmd.org" className="hover:text-[#C8A96B] transition-colors">
                  info@homefoundationmd.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} The HOME Foundation. All rights reserved.</span>
          <span className="text-[#C8A96B]/60">A 501(c)(3) Nonprofit Organization</span>
        </div>
      </div>
    </footer>
  );
}
