import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | HOME Foundation",
  description:
    "Learn about HOME Foundation — our mission, our story, and the values behind our work preserving and developing affordable housing in Maryland.",
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
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h2
            className="text-3xl lg:text-4xl text-[#1D3557] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Helping Others Meet Expectations
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8 mx-auto" />
          <p className="text-[#2F2F2F]/80 text-lg lg:text-xl leading-relaxed">
            The HOME Foundation (Helping Others Meet Expectations) works to ensure that low- to moderate-income individuals and families throughout Maryland have access to safe, stable, and affordable housing by acquiring, rehabilitating, developing, and preserving quality affordable housing that strengthens individuals, families, and communities.
          </p>
        </div>
      </section>

      {/* Our Story / Why We Exist */}
      <section className="py-24 bg-white border-y border-[#EAE6DD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2
                className="text-4xl text-[#1D3557] leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why We Exist
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8" />
            </div>

            <div className="space-y-5 text-[#2F2F2F]/80 text-lg leading-relaxed">
              <p>
                Across Maryland, affordable homes are disappearing. Older properties that have quietly housed working families for decades are being sold, redeveloped, or left to deteriorate — and each one lost pushes stability further out of reach for the people who need it most.
              </p>
              <p>
                HOME Foundation was created to change that. We believe a safe, stable, and affordable home is the foundation on which everything else is built — the ability to hold a job, raise children, pursue an education, and put down roots in a community. When housing is secure, people can meet their expectations and thrive.
              </p>
              <p>
                Our approach is hands-on and practical. We acquire and rehabilitate existing housing at risk of leaving the affordable market, develop new housing in partnership with mission-aligned developers, and commit to preserving affordability for the long term. It is not just about buildings — it is about protecting opportunity, strengthening neighborhoods, and helping individuals and families build lasting stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-3">
              What We Believe
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1D3557] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="p-7 rounded-2xl bg-white border border-[#EAE6DD] hover:border-[#C8A96B] transition-all group"
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
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#1D3557]/20 text-[#1D3557] rounded-full hover:border-[#C8A96B] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
