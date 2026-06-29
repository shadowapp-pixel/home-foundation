"use client";
import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#EAE6DD]">
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
              <div className="text-[#C8A96B] text-[10px] tracking-widest uppercase
