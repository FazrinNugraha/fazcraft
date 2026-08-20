import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import {
  heroInfo,
  heroRoleTags,
  mobileConnectData,
  ctaButtonsData,
  profileCardData,
} from "../../data/home/heroData";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="lg:min-h-screen lg:flex lg:items-center max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-36"
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
                {heroInfo.headline}
              </h1>

              <p
                className="hidden lg:block text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {heroInfo.subHeadline}
              </p>
            </div>

            {/* Mobile Profile Header */}
            <div className="flex lg:hidden flex-col gap-6">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={heroInfo.avatarUrl}
                    alt={heroInfo.name}
                    className="w-20 h-20 rounded-full object-cover"
                    style={{ border: "2px solid var(--border-color)" }}
                    loading="eager"
                    decoding="async"
                    width={80}
                    height={80}
                  />
                  <span
                    className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 animate-pulse"
                    style={{
                      backgroundColor: "#10b981",
                      borderColor: "var(--bg-primary)",
                    }}
                  />
                </div>

                {/* Info Stack */}
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[11px] tracking-widest font-mono uppercase font-semibold"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {heroInfo.tagline}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <h3
                      className="text-lg font-black tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {heroInfo.name}
                    </h3>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-500 fill-current inline-block flex-shrink-0"
                      aria-label="Verified"
                    >
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0-3.818-1.78-3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 4.19l-3.32-3.32 1.32-1.32 2 2 4.67-4.67 1.32 1.32-5.99 5.99z" />
                    </svg>
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {heroInfo.roleSubtitle}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={13} style={{ color: "var(--text-secondary)" }} />
                    <span
                      className="text-xs sm:text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {heroInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div
                className="py-2.5 px-3 border-y border-dashed text-[13px] sm:text-sm font-semibold flex items-center justify-center gap-2 text-center"
                style={{
                  borderColor: "rgba(37, 99, 235, 0.2)",
                  backgroundColor: "rgba(37, 99, 235, 0.05)",
                  color: "var(--text-primary)",
                }}
              >
                <span>👋</span>
                <span>{heroInfo.statusBanner}</span>
              </div>
            </div>

            {/* Mobile Standalone Let's Connect Section */}
            <div className="flex lg:hidden flex-col gap-3">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--text-primary)" }}
              >
                {mobileConnectData.title}
              </p>

              <p
                className="text-sm leading-relaxed text-justify"
                style={{ color: "var(--text-secondary)" }}
              >
                {mobileConnectData.description}
              </p>

              <div className="flex flex-col gap-2.5">
                {mobileConnectData.links.map((link, idx) => {
                  const Icon =
                    link.type === "github"
                      ? Github
                      : link.type === "linkedin"
                      ? Linkedin
                      : Mail;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target={link.type !== "email" ? "_blank" : undefined}
                      rel={link.type !== "email" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-sm py-1 transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <Icon size={16} style={{ color: "var(--text-secondary)" }} />
                      <span>
                        {link.label}{" "}
                        <span className="underline font-semibold">{link.highlight}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Role tags */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {heroRoleTags.map((skill, idx) => (
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
                href={ctaButtonsData.projects.url}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                {ctaButtonsData.projects.label}
                <ArrowRight size={16} />
              </a>

              <a
                href={ctaButtonsData.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = ctaButtonsData.resume.url;
                  link.download = ctaButtonsData.resume.filename;
                  link.click();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 ease-out text-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                style={{
                  border: "1px solid var(--btn-secondary-border)",
                  color: "var(--btn-secondary-text)",
                  backgroundColor: "transparent",
                }}
              >
                {ctaButtonsData.resume.label}
                <Download size={16} />
              </a>
            </div>
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
                    src={heroInfo.avatarUrl}
                    alt={heroInfo.shortName}
                    className="w-20 h-20 rounded-[18px] object-cover"
                    style={{ border: "2px solid var(--border-color)" }}
                    loading="lazy"
                    decoding="async"
                    width={80}
                    height={80}
                  />
                  <h3
                    className="text-base font-bold mt-3 whitespace-nowrap"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {heroInfo.shortName}
                  </h3>
                  <p
                    className="text-[11px] uppercase tracking-[0.15em] mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Based in {heroInfo.location}
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
                    {profileCardData.quote}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Stats */}
              <div
                className="grid grid-cols-3 gap-6 mt-4 pt-4 items-center text-center"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                {profileCardData.stats.map((stat, idx) => (
                  <div key={idx} className={stat.isBadge ? "flex flex-col items-center" : undefined}>
                    <p
                      className="text-[11px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {stat.label}
                    </p>
                    {stat.isBadge ? (
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap inline-block mt-1"
                        style={{
                          backgroundColor: "rgba(37, 99, 235, 0.1)",
                          color: "var(--link-blue)",
                          border: "1px solid rgba(37, 99, 235, 0.2)",
                        }}
                      >
                        {stat.value}
                      </span>
                    ) : (
                      <p
                        className="text-base font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {stat.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

