import React from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-8 flex flex-col justify-start">
            {/* Availability Badge */}
            <div className="flex items-center">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.05)",
                  borderColor: "rgba(59, 130, 246, 0.18)",
                  color: "#60a5fa",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  {/* Pulsing indicator */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Available for select projects
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                I like building things that work
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Building practical solutions that blend engineering, design, and
                innovation. Transforming ideas into products that people
                actually use.
              </p>
            </div>

            {/* Mobile: Opsi B — badge profil atas, role tags sejajar bawah */}
            <div className="flex lg:hidden flex-col gap-2 mt-6">
              {/* Baris 1: Badge Profil */}
              {/* <a
                href="#about"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest transition-colors duration-200 w-fit"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                <img
                  src="/profile/pepe.jpeg"
                  alt="Fazrin Nugraha"
                  className="rounded-full object-cover flex-shrink-0"
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
                Muhamad Fazrin Nugraha
              </a> */}

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
            <div className="hidden lg:flex flex-col sm:flex-row gap-3">
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
              className="w-full p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Top Row: Avatar+Name left, Description right */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Left: Avatar + Name */}
                <div
                  className="flex flex-col items-center flex-shrink-0 mt-0 md:mt-4"
                  style={{ minWidth: "140px" }}
                >
                  <img
                    src="/profile/pepe.jpeg"
                    alt="Fazrin Nugraha"
                    className="w-20 h-20 rounded-full object-cover"
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
                    className="text-[11px] uppercase tracking-widest mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Based in Indonesia
                  </p>
                </div>

                {/* Right: Description */}
                <p
                  className="text-md leading-relaxed pt-0 md:pt-10 text-center text-justify md:text-left"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I blend engineering, design, and motion to create interfaces
                  that feel deliberate, calm, and precise without sacrificing
                  performance or accessibility.
                </p>
              </div>

              {/* Bottom Row: Stats */}
              <div
                className="grid grid-cols-3 gap-6 mt-6 pt-5 items-center text-center"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <div>
                  <p
                    className="text-[11px] uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Since
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    2023
                  </p>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Selected Projects
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    5+ Projects
                  </p>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Focus
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Web · AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Mobile Only (below profile card) */}
          <div className="flex lg:hidden flex-col sm:flex-row gap-3 pt-2">
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
        </div>
      </div>
    </section>
  );
}
