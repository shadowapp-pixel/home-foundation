import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | HOME Foundation",
  description:
    "Learn about HOME Foundation's mission, purpose, and values — dedicated to preserving affordable housing in Maryland.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, #C8A96B 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About HOME Foundation
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Mission Statement
              </p>
              <h2
                className="text-4xl text-[#1D3557] leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Mission
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8" />
              <p className="text-[#2F2F2F]/80 text-lg leading-relaxed">
                The mission of The HOME Foundation (Helping Others Meet Expectations) is to preserve and expand access to safe, stable, and affordable housing for low- to middle-income individuals and families in Maryland through the acquisition and rehabilitation of existing housing and the long-term preservation of affordability.
              </p>
            </div>

            <div className="bg-[rgba(220,201,163,0.12)] border border-[#EAE6DD] rounded-3xl p-10">
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Purpose Statement
              </p>
              <h3
                className="text-2xl text-[#1D3557] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Purpose
              </h3>
              <p className="text-[#2F2F2F]/80 leading-relaxed">
                The purpose of The HOME Foundation is to lessen neighborhood deterioration by preserving affordable housing in Maryland. The organization accomplishes this purpose by acquiring existing residential properties, rehabilitating and maintaining such properties to ensure safe and habitable living conditions while preserving long-term affordability for low- and middle-income residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-y border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              Values Statement
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What We Believe
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1D3557] rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 90% 10%, #C8A96B 0%, transparent 50%)",
                }}
              />
              <p className="relative z-10 text-lg lg:text-xl leading-relaxed text-white/90">
                At The HOME Foundation (Helping Others Meet Expectations), we believe that a safe, stable, and affordable HOME is the foundation upon which individuals and families can meet expectations and thrive. Housing stability creates the conditions necessary for people to pursue education, maintain employment, care for their families, and contribute positively to their communities.
              </p>
              <p className="relative z-10 text-lg leading-relaxed text-white/80 mt-6">
                Guided by this belief, we are committed to preserving and strengthening affordable housing in Maryland through responsible stewardship, long-term affordability, and equitable access — recognizing that a HOME is not just a place to live, but a critical foundation for opportunity and success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                label: "Dignity",
                desc: "Every resident deserves to be treated with compassion, respect, and the same opportunities to thrive.",
              },
              {
                label: "Stability",
                desc: "Housing stability is the cornerstone of healthy communities and individual success.",
              },
              {
                label: "Equity",
                desc: "We champion equitable access to safe, stable, and affordable housing for all.",
              },
              {
                label: "Stewardship",
                desc: "Responsible stewardship of our properties and resources ensures long-term community benefit.",
              },
            ].map((val) => (
              <div
                key={val.label}
                className="p-7 rounded-2xl border border-[#EAE6DD] hover:border-[#C8A96B] transition-all group"
              >
                <div className="w-8 h-0.5 bg-[#C8A96B] mb-5 group-hover:w-16 transition-all duration-500" />
                <h3
                  className="text-xl text-[#1D3557] mb-3"
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
      <section className="py-20 bg-[rgba(220,201,163,0.12)] border-b border-[#EAE6DD]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl text-[#1D3557] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Learn More?
          </h2>
          <p className="text-[#2F2F2F]/70 mb-8">
            Explore our programs or reach out to connect with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D3557] text-white rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] font-semibold transition-all duration-300 group"
            >
              Our Programs
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#1D3557] text-[#1D3557] rounded-full hover:bg-[#1D3557] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
