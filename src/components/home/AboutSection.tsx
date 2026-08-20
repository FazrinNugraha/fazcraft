import React, { useState } from "react";
import { ArrowRight, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { shortBio, fullBio, featuredArticles } from "../../data/home/aboutData";

// Helper function sederhana untuk merender teks dengan format **kata tebal**
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold" style={{ color: "var(--text-primary)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function AboutSection() {
  const [expandAbout, setExpandAbout] = useState(false);
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-0"
    >
      {/* Bio Section */}
      <div
        className="space-y-6 pt-12 sm:pt-16 pb-12 sm:pb-16"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
          <button
            onClick={() => setExpandAbout(!expandAbout)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            style={{
              color: "var(--text-primary)",
              border: "1px dashed var(--border-hover)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-secondary)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span>{expandAbout ? "Show Less" : "Full Version"}</span>
            {expandAbout ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>

        {!expandAbout ? (
          /* Tampilan Versi Awal (Short Bio) */
          <div className="space-y-6">
            {shortBio.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-bold text-justify leading-relaxed"
                    : "text-lg text-justify leading-relaxed"
                }
                style={{
                  color: index === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {renderFormattedText(paragraph)}
              </p>
            ))}
          </div>
        ) : (
          /* Tampilan Versi Lengkap (Full Bio) */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p
              className="text-xl font-bold text-justify leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              {fullBio.title}
            </p>
            {fullBio.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-justify leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {renderFormattedText(paragraph)}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Writing / Articles Section */}
      <div
        className="pt-12 sm:pt-16 pb-12 sm:pb-16"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
            Articles
          </h2>
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-sm"
            style={{
              color: "var(--text-primary)",
              border: "1px dashed var(--border-hover)",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-secondary)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span>See all articles</span>
            <ChevronRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="p-5 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-shrink-0">
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {article.date}
                  </span>
                  <ArrowRight size={16} style={{ color: "var(--text-muted)" }} className="transform -rotate-45" />
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

