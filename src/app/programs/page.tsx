import Link from "next/link";
import { Building2, Home, Wrench, Users, TrendingUp, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Programs | HOME Foundation",
  description:
    "Explore HOME Foundation's programs — property acquisition, rehabilitation, and long-term affordability stewardship across Maryland.",
};

const programs = [
  {
    icon: Building2,
    title: "Property Acquisition",
    tag: "Core Program",
    desc: "We identify and acquire existing residential properties in Maryland communities, focusing on neighborhoods where affordable housing is most at risk.",
    details: [
      "Strategic site identification in underserved communities",
      "Partnership with local governments and agencies",
      "Focus on properties with existing affordable residents",
    ],
  },
  {
    icon: Wrench,
    title: "Rehabilitation & Modernization",
    tag: "Core Program",
    desc: "We rehabilitate acquired properties to ensure safe, habitable, and modern living conditions — while carefully preserving long-term affordability.",
    details: [
      "Full structural and systems rehabilitation",
      "Energy-efficient upgrades and green improvements",
      "Accessibility improvements for all residents",
    ],
  },
  {
    icon: Building2,
    title: "Development & Partnerships",
    tag: "Core Program",
    desc: "We develop new affordable housing and partner with mission-aligned developers to expand the supply of quality homes across Maryland.",
    details: [
      "Ground-up development of new affordable housing",
      "Joint ventures with mission-aligned development partners",
      "Expanding the supply of quality affordable homes",
    ],
  },
  {
    icon: Users,
    title: "Community Partnerships",
    tag: "Community Impact",
    desc: "We collaborate with public agencies, nonprofit organizations, developers, and local stakeholders to amplify our impact and advance housing equity across Maryland.",
    details: [
      "Public-private partnership development",
      "Coordination with city and county housing agencies",
      "Collaboration with community development organizations",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 70%, #C8A96B 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Programs
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Through strategic acquisition, careful rehabilitation, and responsible stewardship, we create lasting pathways to housing stability for families across Maryland.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#EAE6DD] card-hover group"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1D3557]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1D3557] transition-colors duration-300">
                    <program.icon
                      size={22}
                      className="text-[#1D3557] group-hover:text-[#C8A96B] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#C8A96B] font-semibold tracking-widest uppercase">
                      {program.tag}
                    </span>
                    <h3
                      className="text-xl text-[#1D3557] mt-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#2F2F2F]/70 text-sm leading-relaxed mb-6">
                  {program.desc}
                </p>

                <div className="h-px bg-[#EAE6DD] mb-6" />

                <ul className="space-y-2.5">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-[#2F2F2F]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="py-24 bg-white border-y border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Our Approach
              </p>
              <h2
                className="text-4xl text-[#1D3557] leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Preserving Neighborhoods, One Home at a Time
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8" />
              <p className="text-[#2F2F2F]/80 leading-relaxed mb-6">
                Our model focuses on existing housing stock — rescuing properties at risk of leaving the affordable market and restoring them to safe, well-maintained homes for families who need them most.
              </p>
              <p className="text-[#2F2F2F]/80 leading-relaxed">
                By combining financial expertise, community partnerships, and a deep commitment to mission-driven development, HOME Foundation creates durable, community-centered solutions that outlast market cycles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "01", label: "Acquire", desc: "Identify and acquire at-risk affordable properties" },
                { num: "02", label: "Rehabilitate", desc: "Restore homes to safe, modern living standards" },
                { num: "03", label: "Preserve", desc: "Lock in affordability for current and future residents" },
                { num: "04", label: "Sustain", desc: "Ongoing stewardship and community investment" },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-[#FAFAF7] border border-[#EAE6DD] rounded-2xl p-6"
                >
                  <div
                    className="text-3xl font-bold text-[#C8A96B]/40 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.num}
                  </div>
                  <h4
                    className="text-[#1D3557] font-semibold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.label}
                  </h4>
                  <p className="text-xs text-[#2F2F2F]/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[rgba(220,201,163,0.12)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl text-[#1D3557] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Partner With Us
          </h2>
          <p className="text-[#2F2F2F]/70 mb-8 leading-relaxed">
            We welcome partnerships with housing agencies, developers, investors, and community organizations who share our commitment to affordable housing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D3557] text-white rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] font-semibold transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
