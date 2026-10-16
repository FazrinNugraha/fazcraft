import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
  heroInfo,
  ctaButtonsData,
  mobileConnectData,
} from "../../data/home/heroData";

const connectIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

/**
 * "Let's Connect" block (desktop only): short invitation text + social/contact links.
 * Reuses mobileConnectData so the content stays in a single source of truth.
 */
function ConnectBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3.5 sm:gap-4 ${className}`}>
      <p
        className="text-xs sm:text-sm font-bold uppercase tracking-widest"
        style={{ color: "var(--text-primary)" }}
      >
        {mobileConnectData.title}
      </p>

      <p
        className="text-sm sm:text-base leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {mobileConnectData.description}
      </p>

      <div className="flex flex-col gap-2 pt-1">
        {mobileConnectData.links.map((link) => {
          const Icon = connectIcons[link.type];
          const isExternal = link.type !== "email";
          return (
            <a
              key={link.type}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-3 py-1 text-sm sm:text-base transition-opacity duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              <Icon size={18} style={{ color: "var(--text-secondary)" }} />
              <span>
                {link.label}{" "}
                <span className="underline font-semibold">{link.highlight}</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Helper to render subheadline with highlighted / emphasized spans.
 * Any segment surrounded by **word** will be styled with primary text color for subtle, premium contrast.
 */
function renderFormattedSubHeadline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span
          key={index}
          className="font-medium transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

/**
 * Reusable CTA Action Buttons (View Selected Projects & View Resume)
 */
function CtaActionButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {/* Primary: View Selected Projects */}
      <a
        href={ctaButtonsData.projects.url}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 group cursor-pointer"
        style={{
          backgroundColor: "var(--btn-primary-bg)",
          color: "var(--btn-primary-text)",
        }}
      >
        <span>{ctaButtonsData.projects.label}</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>

      {/* Secondary: View Resume */}
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
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 cursor-pointer"
        style={{
          border: "1px solid var(--btn-secondary-border)",
          color: "var(--btn-secondary-text)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border-hover)";
          e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--btn-secondary-border)";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <span>{ctaButtonsData.resume.label}</span>
        <Download size={16} />
      </a>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      <div className="w-full">
        {/* 2-Column Responsive Grid - Exact 50/50 Split on Desktop, Natural Flow on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
          {/* Left Column: 50% width on desktop */}
          <div className="lg:pr-10 xl:pr-12 flex flex-col justify-start">
            {/* Profile Stack: Avatar + Personal Info */}
            <div className="flex items-center gap-5 sm:gap-6 lg:gap-6">
              {/* Circular Avatar */}
              <div className="relative shrink-0">
                <img
                  src={heroInfo.avatarUrl}
                  alt={heroInfo.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-28 lg:h-28 rounded-full object-cover shadow-sm"
                  style={{ border: "2px solid var(--border-color)" }}
                  loading="eager"
                  decoding="async"
                  width={112}
                  height={112}
                />
                <span
                  className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 animate-pulse"
                  style={{
                    backgroundColor: "#10b981",
                    borderColor: "var(--bg-primary)",
                  }}
                  title="Available for opportunities"
                />
              </div>

              {/* Info Stack */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <span
                  className="text-xs sm:text-sm font-mono tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {heroInfo.tagline}
                </span>

                <div className="flex items-center">
                  <h1
                    className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold tracking-tight inline-flex items-center gap-2 flex-wrap lg:flex-nowrap lg:whitespace-nowrap"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>{heroInfo.name}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-blue-500 inline-block"
                      aria-label="Verified"
                    >
                      <path
                        fill="currentColor"
                        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"
                      />
                      <path
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.75 12.25L10.5 15l6-6"
                      />
                    </svg>
                  </h1>
                </div>

                <p
                  className="text-sm sm:text-base lg:text-[17px] font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {heroInfo.roleSubtitle}
                </p>

                <div className="flex items-center gap-1.5 mt-0.5">
                  <MapPin size={14} style={{ color: "var(--text-secondary)" }} />
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {heroInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio SubHeadline directly under profile */}
            <p
              className="text-sm sm:text-base leading-relaxed text-left mt-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {renderFormattedSubHeadline(heroInfo.subHeadline)}
            </p>

            {/* Action Buttons directly under bio */}
            <CtaActionButtons className="mt-6 sm:mt-7" />
          </div>

          {/* Right Column: 50% width on desktop, clean divider on mobile */}
          <div
            className="pt-8 border-t lg:border-t-0 lg:pt-0 lg:pl-10 xl:pl-12 lg:border-l flex flex-col justify-center"
            style={{ borderColor: "var(--border-color)" }}
          >
            <ConnectBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
