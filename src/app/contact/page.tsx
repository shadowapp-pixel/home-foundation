import { Mail, Heart } from "lucide-react";

export const metadata = {
  title: "Contact | HOME Foundation",
  description:
    "Get in touch with HOME Foundation — for housing support, partnerships, or general inquiries about our affordable housing mission in Maryland.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-[#1D3557] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 60%, #C8A96B 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h1
            className="text-5xl lg:text-6xl text-white leading-tight max-w-xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-white/70 text-lg max-w-lg leading-relaxed">
            Whether you are a resident seeking housing support, a partner organization, or an individual who believes in our mission — reach out today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-[#C8A96B] text-xs font-semibold tracking-widest uppercase mb-4">
                Contact Information
              </p>
              <h2
                className="text-3xl text-[#1D3557] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Connect With HOME Foundation
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#C8A96B] to-transparent mb-8" />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1D3557]/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#C8A96B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1D3557] mb-1">Email</div>
                    <a
                      href="mailto:info@homefoundationmd.org"
                      className="text-[#2F2F2F]/70 text-sm hover:text-[#C8A96B] transition-colors"
                    >
                      info@homefoundationmd.org
                    </a>
                  </div>
                </div>
              </div>

              {/* How we can help */}
              <div className="bg-[rgba(220,201,163,0.12)] border border-[#EAE6DD] rounded-2xl p-8">
                <h3
                  className="text-xl text-[#1D3557] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  How We Can Help
                </h3>
                <ul className="space-y-3">
                  {[
                    "Partnership and collaboration opportunities",
                    "Volunteer and community involvement",
                    "General questions about our mission",
                    "Media and press inquiries",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#2F2F2F]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl border border-[#EAE6DD] shadow-sm p-8 lg:p-10">
                <h3
                  className="text-2xl text-[#1D3557] mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Send Us a Message
                </h3>

                <form className="space-y-5" action="mailto:info@homefoundationmd.org" method="get">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D3557] tracking-wide mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="Jane"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1D3557] tracking-wide mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1D3557] tracking-wide mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1D3557] tracking-wide mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all">
                      <option value="">Select a topic…</option>
                      <option>Partnership Opportunity</option>
                      <option>Volunteer / Get Involved</option>
                      <option>Media / Press</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1D3557] tracking-wide mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help…"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE6DD] bg-[#FAFAF7] text-[#2F2F2F] text-sm focus:outline-none focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#1D3557] text-white font-semibold rounded-full hover:bg-[#C8A96B] hover:text-[#1D3557] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Heart size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
