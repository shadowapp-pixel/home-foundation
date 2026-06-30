"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const boardMembers = [
  {
    name: "Roy Danniell",
    title: "President",
    initials: "RD",
    bio: "Roy Danniell leads HOME Foundation as Executive Director and President with a vision centered on housing stability, community empowerment, and long-term opportunity for underserved individuals and families. His leadership reflects a deep commitment to building partnerships that create pathways to safe, sustainable, and affordable housing.",
  },
  {
    name: "Donald Nuzzio Jr.",
    title: "Vice President",
    initials: "DN",
    bio: "Donald Nuzzio Jr., MRED is an affordable housing and real estate development professional with extensive experience in the preservation, financing, and development of multifamily housing communities. His work focuses on expanding affordable housing through LIHTC, USDA programs, and energy-efficient modernization initiatives.",
  },
  {
    name: "Mansur Abdul-Malik",
    title: "Secretary",
    initials: "MA",
    bio: "Mansur Abdul-Malik is an experienced affordable housing development leader with a strong background in complex real estate finance, community development, and housing preservation. He brings expertise spanning acquisition, rehabilitation, LIHTC, tax-exempt bonds, and public-private financing structures.",
  },
  {
    name: "James Holley-Grisham",
    title: "Treasurer",
    initials: "JG",
    bio: "James Grisham brings valuable leadership experience and a strong commitment to community advancement and housing accessibility. His professional background reflects a focus on strategic growth, operational leadership, and mission-driven collaboration aligned with HOME Foundation's goals.",
  },
];

export default function LeadershipPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, #C8A96B 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            Leadership &amp; Governance
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our Leadership
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            HOME Foundation is guided by compassionate leaders dedicated to creating stability, opportunity, and lasting impact within the communities we serve.
          </p>
        </div>
      </section>

      {/* Executive Director */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-12 text-center">
            Executive Leadership
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-[#EAE6DD] shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Portrait */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center p-12 min-h-[320px]">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-[#1D3557] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span
                        className="text-4xl text-[#C8A96B] font-bold"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        RD
                      </span>
                    </div>
                    <p className="text-[#1D3557]/60 text-xs">Photo Coming Soon</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-10 lg:p-14">
                  <div className="mb-6">
                    <h2
                      className="text-3xl text-[#1D3557] mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Roy Danniell
                    </h2>
                    <p className="text-[#C8A96B] font-medium">
                      Executive Director &amp; President
                    </p>
                    <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mt-4" />
                  </div>

                  <div className="space-y-4 text-[#2F2F2F]/80 leading-relaxed text-sm mb-8">
                    <p>
                      Roy Danniell serves as the Executive Director and President of HOME Foundation, where he leads with a vision centered on housing stability, community empowerment, and long-term opportunity for underserved individuals and families. His leadership reflects a strong commitment to building partnerships that create pathways to safe, sustainable, and affordable housing while strengthening the communities HOME Foundation serves.
                    </p>
                    <p>
                      With experience connected to community-focused housing initiatives and mission-driven development, Roy brings a collaborative and solutions-oriented approach to nonprofit leadership. He is passionate about helping organizations create environments where residents feel supported, valued, and positioned for success.
                    </p>
                    <p>
                      Under his leadership, HOME Foundation continues to expand its mission of creating opportunities for individuals and families to thrive through compassionate support systems, community-centered programming, and affordable housing advocacy.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#C8A96B] pl-6 bg-[rgba(220,201,163,0.12)] rounded-r-2xl py-4 pr-4">
                    <blockquote
                      className="text-[#1D3557] italic text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      &ldquo;Everyone deserves the opportunity to feel safe and supported in a home where they can meet their expectations.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-white border-t border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              Governance
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Board of Directors
            </h2>
            <p className="text-[#2F2F2F]/70 max-w-2xl mx-auto leading-relaxed">
              Our Board of Directors provides thoughtful leadership, strategic oversight, and unwavering support for HOME Foundation&apos;s mission — guiding the organization toward sustainable growth and meaningful community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#FAFAF7] rounded-3xl border border-[#EAE6DD] overflow-hidden card-hover group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Portrait area */}
                <div className="h-48 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full bg-[#1D3557] flex items-center justify-center shadow-md">
                    <span
                      className="text-xl text-[#C8A96B] font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A96B] to-[#DCC9A3] group-hover:h-1.5 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg text-[#1D3557] mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#C8A96B] text-xs font-semibold tracking-wide uppercase mb-4">
                    {member.title}
                  </p>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: hoveredMember === member.name ? "300px" : "80px",
                    }}
                  >
                    <p className="text-[#2F2F2F]/70 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[rgba(220,201,163,0.12)] border-t border-[#EAE6DD]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-[#1D3557] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Connect With Our Team
          </h2>
          <p className="text-[#2F2F2F]/70 mb-8">
            Interested in learning more or partnering with HOME Foundation? We&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D3557] text-white rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] font-semibold transition-all duration-300 group"
          >
            Reach Out
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}export default function LeadershipPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, #C8A96B 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            Leadership &amp; Governance
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our Leadership
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            HOME Foundation is guided by compassionate leaders dedicated to creating stability, opportunity, and lasting impact within the communities we serve.
          </p>
        </div>
      </section>

      {/* Executive Director */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-12 text-center">
            Executive Leadership
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-[#EAE6DD] shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Portrait */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center p-12 min-h-[320px]">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-[#1D3557] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span
                        className="text-4xl text-[#C8A96B] font-bold"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        RD
                      </span>
                    </div>
                    <p className="text-[#1D3557]/60 text-xs">Photo Coming Soon</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-10 lg:p-14">
                  <div className="mb-6">
                    <h2
                      className="text-3xl text-[#1D3557] mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Roy Danniell
                    </h2>
                    <p className="text-[#C8A96B] font-medium">
                      Executive Director &amp; President
                    </p>
                    <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mt-4" />
                  </div>

                  <div className="space-y-4 text-[#2F2F2F]/80 leading-relaxed text-sm mb-8">
                    <p>
                      Roy Danniell serves as the Executive Director and President of HOME Foundation, where he leads with a vision centered on housing stability, community empowerment, and long-term opportunity for underserved individuals and families. His leadership reflects a strong commitment to building partnerships that create pathways to safe, sustainable, and affordable housing while strengthening the communities HOME Foundation serves.
                    </p>
                    <p>
                      With experience connected to community-focused housing initiatives and mission-driven development, Roy brings a collaborative and solutions-oriented approach to nonprofit leadership. He is passionate about helping organizations create environments where residents feel supported, valued, and positioned for success.
                    </p>
                    <p>
                      Under his leadership, HOME Foundation continues to expand its mission of creating opportunities for individuals and families to thrive through compassionate support systems, community-centered programming, and affordable housing advocacy.
                    </p>
                  </div>

                  {/* Signature Quote */}
                  <div className="border-l-4 border-[#C8A96B] pl-6 bg-[rgba(220,201,163,0.12)] rounded-r-2xl py-4 pr-4">
                    <blockquote
                      className="text-[#1D3557] italic text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      &ldquo;Everyone deserves the opportunity to feel safe and supported in a home where they can meet their expectations.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-white border-t border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              Governance
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Board of Directors
            </h2>
            <p className="text-[#2F2F2F]/70 max-w-2xl mx-auto leading-relaxed">
              Our Board of Directors provides thoughtful leadership, strategic oversight, and unwavering support for HOME Foundation&apos;s mission — guiding the organization toward sustainable growth and meaningful community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#FAFAF7] rounded-3xl border border-[#EAE6DD] overflow-hidden card-hover group"
              >
                {/* Portrait area */}
                <div className="h-48 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full bg-[#1D3557] flex items-center justify-center shadow-md">
                    <span
                      className="text-xl text-[#C8A96B] font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A96B] to-[#DCC9A3] group-hover:h-1.5 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg text-[#1D3557] mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#C8A96B] text-xs font-semibold tracking-wide uppercase mb-4">
                    {member.title}
                  </p>
                  <p className="text-[#2F2F2F]/70 text-xs leading-relaxed line-clamp-5">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[rgba(220,201,163,0.12)] border-t border-[#EAE6DD]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-[#1D3557] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Connect With Our Team
          </h2>
          <p className="text-[#2F2F2F]/70 mb-8">
            Interested in learning more or partnering with HOME Foundation? We&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D3557] text-white rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] font-semibold transition-all duration-300 group"
          >
            Reach Out
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
