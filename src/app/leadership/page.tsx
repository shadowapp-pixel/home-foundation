"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const boardMembers = [
  {
    name: "Don Nuzzio",
    title: "Vice President",
    initials: "DN",
    photo: "/don-nuzzio.jpg",
    bioParagraphs: [
      "Donald Nuzzio Jr., MRED is an affordable housing and real estate development professional with extensive experience in the preservation, financing, and development of multifamily housing communities. His work focuses heavily on expanding and preserving affordable housing opportunities through innovative financing structures, public-private partnerships, and long-term community investment strategies.",
      "Donald has been involved in numerous affordable housing redevelopment and preservation initiatives throughout the Mid-Atlantic region, including projects utilizing LIHTC, USDA Rural Development programs, and energy-efficient modernization initiatives. His professional experience includes overseeing complex financing transactions, rehabilitation projects, and mixed-finance affordable housing developments designed to strengthen communities while maintaining long-term affordability.",
      "Throughout his career, Donald has demonstrated a strong commitment to sustainable housing solutions, community revitalization, and resident-centered development. His work frequently incorporates energy-efficient upgrades, accessibility improvements, and long-range preservation strategies that improve quality of life for residents while protecting affordability for future generations.",
      "Donald brings valuable expertise in housing finance, strategic development planning, construction coordination, and affordable housing policy to HOME Foundation's Board of Directors. His perspective helps support the organization's mission of creating stable and thriving communities through equitable housing opportunities.",
    ],
  },
  {
    name: "Mansur Abdul-Malik",
    title: "Secretary",
    initials: "MA",
    photo: "/mansur-abdul-malik.jpg",
    bioParagraphs: [
      "Mansur Abdul-Malik is an experienced affordable housing development leader with a strong background in complex real estate finance, community development, and housing preservation. He currently serves in senior leadership within the affordable housing industry, where he oversees multifamily housing developments focused on increasing access to high-quality affordable housing communities.",
      "With expertise spanning acquisition, rehabilitation, new construction, and public-private financing structures, Mansur has worked extensively with LIHTC, tax-exempt bonds, public subsidies, and layered financing models that support sustainable affordable housing development.",
      "In addition to his development leadership, Mansur has contributed to the academic and professional advancement of the industry through his involvement in real estate development education. His work reflects a commitment to strengthening communities through thoughtful planning, equitable investment, and mission-driven development practices.",
      "Mansur's leadership approach combines financial expertise with a deep understanding of the social impact of housing. His experience managing multidisciplinary development teams and navigating complex affordable housing transactions provides valuable strategic insight to HOME Foundation's Board of Directors.",
    ],
  },
  {
    name: "James Holley-Grisham",
    title: "Treasurer",
    initials: "JG",
    photo: "/james-holley-grisham.jpg",
    bioParagraphs: [
      "James Holley-Grisham brings valuable leadership experience and a strong commitment to community advancement and housing accessibility. His professional background reflects a focus on strategic growth, operational leadership, and mission-driven collaboration that aligns with HOME Foundation's goals of expanding opportunity and creating stable communities.",
      "Throughout his career, James has worked alongside organizations and stakeholders dedicated to strengthening neighborhoods and improving access to resources that support long-term community well-being. His experience includes collaborative leadership, relationship management, and supporting initiatives that prioritize sustainable growth and community impact.",
      "James is passionate about helping organizations develop thoughtful, people-centered solutions that create meaningful and lasting change. His leadership style emphasizes accountability, partnership, and service-oriented decision-making.",
      "As a member of HOME Foundation's Board of Directors, James contributes strategic insight, organizational leadership, and a commitment to advancing equitable opportunities for individuals and families through housing and community-focused initiatives.",
    ],
  },
];

export default function LeadershipPage() {
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
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-[#EAE6DD] shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Portrait */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center p-12 min-h-[320px]">
                  <div className="text-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mb-4 shadow-xl relative border-4 border-white/40">
                      <Image
                        src="/roy-danniell.jpg"
                        alt="Roy Danniell"
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    </div>
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
                      Executive Director &amp; Board President
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

          <div className="flex flex-wrap justify-center gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-[#FAFAF7] rounded-3xl border border-[#EAE6DD] overflow-hidden"
              >
                {/* Portrait area — bigger photo */}
                <div className="h-64 bg-gradient-to-br from-[#EAE6DD] to-[#DCC9A3] flex items-center justify-center relative">
                  {member.photo ? (
                    <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl relative border-4 border-white/50">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-36 h-36 rounded-full bg-[#1D3557] flex items-center justify-center shadow-xl border-4 border-white/30">
                      <span
                        className="text-3xl text-[#C8A96B] font-bold"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A96B] to-[#DCC9A3] group-hover:h-1.5 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg text-[#1D3557] mb-1 text-center"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#C8A96B] text-xs font-semibold tracking-wide uppercase mb-4 text-center">
                    {member.title}
                  </p>
                  <div className="space-y-3 text-[#2F2F2F]/70 text-xs leading-relaxed">
                      {member.bioParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
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
}
