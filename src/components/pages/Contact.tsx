import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Github, Instagram, Linkedin } from "lucide-react";
import { contactHeaderData, socialMediaSectionData } from "../../data/pages/contactData";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className="relative min-h-[calc(100vh)] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-5 md:px-6 overflow-hidden transition-colors duration-300"
    >
      {/* Geometric Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ color: "var(--text-primary)" }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid-contact"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <line
            x1="0"
            y1="0"
            x2="400"
            y2="400"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="400"
            y1="0"
            x2="0"
            y2="400"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="50"
            width="300"
            height="300"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-3">
        <svg viewBox="0 0 400 400" fill="none">
          <rect
            x="50"
            y="50"
            width="300"
            height="300"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="100"
            y="100"
            width="200"
            height="200"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="150"
            y="150"
            width="100"
            height="100"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Let's Talk Header */}
        <div className="text-left mb-16 md:mb-20">
          <p
            className="text-base md:text-lg mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {contactHeaderData.tagline}
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 break-all sm:break-words"
            style={{ color: "var(--text-primary)" }}
          >
            <a
              href={`mailto:${contactHeaderData.email}`}
              className="hover:text-blue-500 transition-colors"
            >
              {contactHeaderData.email}
            </a>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {contactHeaderData.subText}
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-8 md:mb-12"
          style={{ borderTop: "1px solid var(--border-color)" }}
        />

        {/* Social Media Links */}
        <div>
          <p
            className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {socialMediaSectionData.title}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            {socialMediaSectionData.links.map((link) => {
              const Icon =
                link.type === "github"
                  ? Github
                  : link.type === "instagram"
                  ? Instagram
                  : Linkedin;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                  title={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

