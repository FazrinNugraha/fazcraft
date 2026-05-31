import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="lg:min-h-screen lg:flex lg:items-center max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32 lg:pb-36"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-5 lg:space-y-8 flex flex-col justify-start lg:mt-10">
            {/* Main Headline */}
            <div className="hidden lg:block space-y-4">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                I like building things that work
              </h1>

              <p
                className="hidden lg:block text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Building practical solutions that blend engineering, design, and
                innovation. Transforming ideas into products that people
                actually use.
              </p>
            </div>

            {/* Mobile Glassmorphic Card (Opsi B) - Now beautifully acting as description below the headline */}
            <div
              className="flex lg:hidden flex-col gap-4 p-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Row 1: Avatar, Name, Status */}
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src="/pp6.png"
                    alt="Fazrin Nugraha"
                    className="w-14 h-14 rounded-full object-cover"
                    style={{
                      border: "2px solid var(--border-color)",
                    }}
                  />
                  {/* Pulsing Active Indicator */}
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 animate-pulse"
                    style={{
                      backgroundColor: "#10b981", // Emerald green
                      borderColor: "var(--bg-card)",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className="text-sm font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Muhamad Fazrin Nugraha
                    </h3>
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: "rgba(37, 99, 235, 0.1)",
                        color: "var(--link-blue)",
                        border: "1px solid rgba(37, 99, 235, 0.2)",
                      }}
                    >
                      Open to Work
                    </span>
                  </div>
                  <p
                    className="text-[10px] uppercase tracking-widest mt-0.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Based in Indonesia
                  </p>
                </div>
              </div>

              {/* Row 2: Short elegant quote */}
              <div
                className="pl-3 border-l-2 py-0.5"
                style={{ borderColor: "var(--border-color)" }}
              >
                <p
                  className="text-xs leading-relaxed italic text-justify"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "I build AI-powered software that solves real problems - taking ideas all the way to production, with systems that ship reliably and work for actual users."
                </p>
              </div>
            </div>

            {/* Mobile Standalone Let's Connect Section */}
            <div className="flex lg:hidden flex-col gap-3">
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--text-secondary)" }}
              >
                Let's Connect
              </p>

              <p
                className="text-xs leading-relaxed text-justify"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm always open to discussing new opportunities, collaborating on
                innovative projects, or sharing thoughts on engineering and AI.
                Let's start a conversation!
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/FazrinNugraha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs py-1 transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  <Github size={14} style={{ color: "var(--text-secondary)" }} />
                  <span>I ship code on <span className="underline font-semibold" style={{ textDecorationColor: "var(--border-color)" }}>GitHub</span></span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs py-1 transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  <Linkedin size={14} style={{ color: "var(--text-secondary)" }} />
                  <span>Let's connect on <span className="underline font-semibold" style={{ textDecorationColor: "var(--border-color)" }}>LinkedIn</span></span>
                </a>

                <a
                  href="/contact"
                  className="flex items-center gap-3 text-xs py-1 transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  <Mail size={14} style={{ color: "var(--text-secondary)" }} />
                  <span>Drop me a message on <span className="underline font-semibold" style={{ textDecorationColor: "var(--border-color)" }}>Email</span></span>
                </a>
              </div>
            </div>

            {/* Mobile: Opsi B — badge profil atas, role tags sejajar bawah */}
            <div className="flex lg:hidden flex-col gap-2">
              {/* Baris 2: Role Tags sejajar */}
              <div className="flex gap-2">
                {["FULLSTACK ENGINEER", "AI & ML ENGINEER"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop: Role tags only */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {["FULLSTACK ENGINEER", "AI & ML ENGINEER"].map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                View Selected Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                style={{
                  border: "1px solid var(--btn-secondary-border)",
                  color: "var(--btn-secondary-text)",
                  backgroundColor: "transparent",
                }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="hidden lg:flex justify-end items-start mt-12 transition-all duration-200 ease-out text-md hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5">
            <div
              className="w-full p-6 rounded-2xl flex flex-col gap-5"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Top Row: Avatar+Name left, Description right */}
              <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
                {/* Left: Avatar + Name */}
                <div
                  className="flex flex-col items-center flex-shrink-0 mt-0 md:mt-2"
                  style={{ minWidth: "140px" }}
                >
                  <img
                    src="/pp6.png"
                    alt="Fazrin Nugraha"
                    className="w-20 h-20 rounded-[18px] object-cover"
                    style={{
                      border: "2px solid var(--border-color)",
                    }}
                  />
                  <h3
                    className="text-base font-bold mt-3 whitespace-nowrap"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Fazrin Nugraha
                  </h3>
                  <p
                    className="text-[11px] uppercase tracking-[0.15em] mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Based in Indonesia
                  </p>
                </div>

                {/* Right: Quote Block Description */}
                <div
                  className="pl-3 border-l-2 py-0.5 mt-2 md:mt-5 flex-1"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <p
                    className="text-md leading-relaxed italic text-justify md:text-left"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    "I build AI-powered software that solves real problems - taking ideas all the way to production, with systems that ship reliably and work for actual users."
                  </p>
                </div>
              </div>

              {/* Bottom Row: Stats */}
              <div
                className="grid grid-cols-3 gap-6 mt-4 pt-4 items-center text-center"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Role
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Engineer
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Status
                  </p>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap inline-block"
                    style={{
                      backgroundColor: "rgba(37, 99, 235, 0.1)",
                      color: "var(--link-blue)",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                    }}
                  >
                    Open to Work
                  </span>
                </div>
                <div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Focus
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    AI Integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
