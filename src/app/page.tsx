import Link from "next/link";
import { Home, Shield, ArrowRight, Heart, Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-[#1D3557]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%,#C8A96B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #DCC9A3 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-[#FAFAF7]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">

            <h1
              className="text-5xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Safe Home Is
              <em className="block text-[#C8A96B] not-italic">the Foundation</em>
              of Everything.
            </h1>


          </div>
        </div>
      </section>

      {/* Mission Highlight */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Our Mission
              </p>
              <h2
                className="text-4xl lg:text-5xl text-[#1D3557] leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Helping Families Build Stability
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8" />
              <p className="text-[#2F2F2F]/80 text-lg leading-relaxed mb-8">
                The HOME Foundation (Helping Others Meet Expectations) is dedicated to preserving and expanding access to safe, stable, and affordable housing for low to moderate income individuals and families in Maryland — through the acquisition and rehabilitation of existing housing and the long-term preservation of affordability.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1D3557] font-semibold border-b border-[#C8A96B] pb-1 hover:text-[#C8A96B] transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-[rgba(220,201,163,0.12)] border border-[#EAE6DD] rounded-3xl p-10">
                <blockquote
                  className="text-2xl text-[#1D3557] italic leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;Everyone deserves the opportunity to feel safe and supported in a home where they can meet their expectations.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1D3557] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-[#C8A96B] font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      RD
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1D3557]">Roy Danniell</div>
                    <div className="text-sm text-[#2F2F2F]/60">
                      Executive Director &amp; President
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-[rgba(220,201,163,0.12)] border-y border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Programs &amp; Services
            </h2>
            <p className="text-[#2F2F2F]/70 max-w-2xl mx-auto">
              Through strategic acquisition, careful rehabilitation, and long-term stewardship, we create lasting pathways to housing stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Property Acquisition",
                desc: "We identify and acquire existing residential properties in Maryland communities, focusing on neighborhoods where affordable housing is most at risk of being lost.",
              },
              {
                icon: Home,
                title: "Rehabilitation & Preservation",
                desc: "We transform acquired properties with high-quality renovations—including energy-efficient upgrades, accessibility improvements, and modern amenities—ensuring long-term sustainability and comfort for residents.",
              },
              {
                icon: Shield,
                title: "Affordability Stewardship",
                desc: "Through responsible stewardship and equitable access, we maintain long-term affordability for low- and middle-income residents, protecting housing as a critical community resource.",
              },
            ].map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#EAE6DD] card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1D3557]/5 flex items-center justify-center mb-6 group-hover:bg-[#1D3557] transition-colors duration-300">
                  <program.icon
                    size={24}
                    className="text-[#1D3557] group-hover:text-[#C8A96B] transition-colors duration-300"
                  />
                </div>
                <h3
                  className="text-xl text-[#1D3557] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {program.title}
                </h3>
                <p className="text-[#2F2F2F]/70 text-sm leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D3557] text-white rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] font-semibold transition-all duration-300 group"
            >
              View All Programs
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              What Guides Us
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Dignity", desc: "Every resident deserves to be treated with respect and compassion." },
              { label: "Stability", desc: "Housing stability creates the foundation for opportunity and growth." },
              { label: "Equity", desc: "We are committed to equitable access to safe and affordable homes." },
              { label: "Stewardship", desc: "Responsible management of resources for long-term community benefit." },
            ].map((val) => (
              <div
                key={val.label}
                className="p-6 rounded-2xl border border-[#EAE6DD] hover:border-[#C8A96B] transition-colors group"
              >
                <div className="w-8 h-0.5 bg-[#C8A96B] mb-4 group-hover:w-16 transition-all duration-500" />
                <h3
                  className="text-xl text-[#1D3557] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {val.label}
                </h3>
                <p className="text-sm text-[#2F2F2F]/70 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #C8A96B 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Heart size={32} className="text-[#C8A96B] mx-auto mb-6" />
          <h2
            className="text-4xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join Us in Creating
            <em className="block text-[#C8A96B] not-italic">Lasting Change</em>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Whether you are a resident seeking housing support, a partner organization, or someone who believes in our mission — we would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C8A96B] text-[#1D3557] font-semibold rounded-full hover:bg-[#DCC9A3] transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/leadership"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
