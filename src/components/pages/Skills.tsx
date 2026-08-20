import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { skillsHeader, getTechStackCategories } from "../../data/pages/skillsData";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const techStackCategories = getTechStackCategories(isDark);

  return (
    <section
      id="skills"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-5 md:px-6 transition-colors duration-300"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {skillsHeader.title}
          </h2>
          <p
            style={{ color: "var(--text-secondary)" }}
            className="max-w-2xl mx-auto"
          >
            {skillsHeader.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-12">
          {techStackCategories.map((category) => (
            <div key={category.category}>
              <h3
                className="text-xl font-semibold mb-6 pl-4"
                style={{ borderLeft: "2px solid var(--border-hover)" }}
              >
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    style={{
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    <div className="text-center">
                      {tech.isGeminiIcon ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                        >
                          {/* Large Sparkle */}
                          <path
                            d="M 10 2 Q 10 10 2 10 Q 10 10 10 18 Q 10 10 18 10 Q 10 10 10 2"
                            fill="url(#gemini-inline-grad)"
                          />
                          {/* Small Sparkle */}
                          <path
                            d="M 18 3 Q 18 6 15 6 Q 18 6 18 9 Q 18 6 21 6 Q 18 6 18 3"
                            fill="url(#gemini-inline-grad)"
                          />
                          <defs>
                            <linearGradient id="gemini-inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#9b51e0" />
                              <stop offset="35%" stopColor="#3b82f6" />
                              <stop offset="70%" stopColor="#60a5fa" />
                              <stop offset="100%" stopColor="#f43f5e" />
                            </linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      )}
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {tech.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

