import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    role: "AI Engineer",
    phase: "Februari 2026 - Juni 2026",
    title: "Coding Camp 2026 by DBS Foundation",
    description:
      "Got into Coding Camp 2026 powered by DBS Foundation and chose the AI Engineer track.",
    badgeColor: "text-blue-500",
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/20",
    url: "/journey/dbs-coding-camp-ai-engineer",
  },
  {
    role: "Frontend Engineer",
    phase: "September 2025",
    title: "Finalist Hackaton x Amartha 2025",
    description:
      "My first hackathon — made it to Finalist Top 15 out of 150+ teams. Spent 24 hours building SocialCollateral AI as the Frontend Dev",
    badgeColor: "text-purple-500",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    url: "/case-studies/social-collateral-ai",
  },
];

export default function RecentActivities() {
  const { theme } = useTheme();

  return (
    <section
      id="decisions"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16 scroll-mt-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Top divider */}
      <div
        className="pt-12 mb-8 flex justify-between items-end"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <h2
          className="text-xl font-bold mt-2"
          style={{ color: "var(--text-primary)" }}
        >
          Latest Highlights
        </h2>
        <a
          href="/journey"
          className="text-sm font-medium hover:text-white transition-colors pb-1"
          style={{
            color: "var(--text-secondary)",
            borderBottom: "1px dashed var(--border-hover)"
          }}
        >
          See all journey
        </a>
      </div>

      {/* Grid Cards Container - 2 columns on medium screens up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((item, idx) => (
          <a key={idx} href={item.url} className="group block">
            <div
              className="p-5 sm:p-6 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg relative overflow-hidden flex h-full flex-col justify-between"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Date + Badge Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.phase}
                    </span>
                    <div
                      className={`inline-flex items-center text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md border ${item.badgeColor} ${item.badgeBorder}`}
                      style={{
                        backgroundColor: item.badgeBg,
                      }}
                    >
                      {item.role}
                    </div>
                  </div>

                  {/* Highlight Title */}
                  <h3
                    className="text-xl font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-blue-400"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed text-justify"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Row (View Case Study) */}
              <div
                className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] relative z-10"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="group-hover:text-white transition-colors duration-300 font-semibold">
                  View Case Study
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full border bg-transparent transition-colors duration-300 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)]"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}