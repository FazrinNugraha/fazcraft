import React from "react";

// Color mapping for type to accent colors
const typeColorMap: Record<string, string> = {
  LEARNING: "#10B981",
  MILESTONE: "#A855F7",
  ACHIEVEMENT: "#3B82F6",
};

// Determine type color classes for badge styling
function getTypeClasses(type: string): string {
  switch (type?.toUpperCase()) {
    case "LEARNING":
      return "border-emerald-500 text-emerald-500";
    case "MILESTONE":
      return "border-purple-500 text-purple-500";
    case "ACHIEVEMENT":
      return "border-blue-500 text-blue-500";
    default:
      return "border-blue-500 text-blue-500";
  }
}

// Determine dot color class
function getDotClass(type: string): string {
  switch (type?.toUpperCase()) {
    case "LEARNING":
      return "bg-emerald-500";
    case "MILESTONE":
      return "bg-purple-500";
    case "ACHIEVEMENT":
      return "bg-blue-500";
    default:
      return "bg-blue-500";
  }
}

interface JourneyPost {
  slug: string;
  title: string;
  description?: string;
  summary?: string;
  date: string;
  type: string;
  accentColor: string;
  skills: string[];
}

interface JourneyPageProps {
  journeyPosts?: JourneyPost[];
}

// Define the desired display order by slug
const slugOrder = [
  "bootcamp-revou-fundamental",
  "mern-stack-learning",
  "hackathon-amaratha-finalist",
  "dbs-coding-camp-ai-engineer",
  "capstone-emigria",
  "asah-ai-engineer-dicoding-goto",
];

export default function JourneyPage({ journeyPosts }: JourneyPageProps) {
  // Sort posts by the predefined order using non-mutating toSorted()
  const sortedPosts = journeyPosts
    ? journeyPosts.toSorted((a, b) => {
        const indexA = slugOrder.indexOf(a.slug);
        const indexB = slugOrder.indexOf(b.slug);
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
      })
    : [];

  return (
    <div className="min-h-screen">
      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Journey
        </h1>
        <p
          className="mb-16 max-w-3xl mx-auto text-center text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          A timeline of my professional growth and learning progression. This
          isn't a resume, it's a story of how I've evolved as an engineer, the
          pivotal moments that shaped my thinking, and the skills I've developed
          along the way.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1.75 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "var(--border-color)" }}
          />

          <div className="space-y-6">
            {sortedPosts.map((item, index) => {
              const accentColor =
                item.accentColor ||
                typeColorMap[item.type?.toUpperCase()] ||
                "#3B82F6";
              const cardColor =
                typeColorMap[item.type?.toUpperCase()] || accentColor;
              const dotClass = getDotClass(item.type);
              const typeClasses = getTypeClasses(item.type);

              return (
                <div
                  key={item.slug}
                  className={`relative pl-8 group ${index >= 2 ? "deferred-card" : ""}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-3 w-4 h-4 ${dotClass} rounded-full transition-transform group-hover:scale-125`}
                  />

                  {/* Card Content */}
                  <div
                    className="rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
                    style={{
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                      "--accent": cardColor,
                    } as React.CSSProperties}
                  >
                    {/* Date and Type Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-medium uppercase tracking-wider"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.date}
                      </span>
                      <span
                        className={`text-xs font-semibold border px-2.5 py-1 rounded ${typeClasses}`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Title - hover changes to type color via CSS */}
                    <h2
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span className="accent-hover-text transition-colors duration-200 cursor-default">
                        {item.title}
                      </span>
                    </h2>

                    {/* Description */}
                    {(item.summary || item.description) && (
                      <p
                        className="text-justify mb-4 leading-relaxed text-sm md:text-base"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.summary || item.description}
                      </p>
                    )}

                    {/* Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mb-4">
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="journey-skill-pill text-xs px-3 py-1.5 rounded transition-colors duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Read More Link */}
                    <a
                      href={`/journey/${item.slug}`}
                      className="text-sm font-medium inline-flex items-center gap-1.5 group/link relative overflow-hidden"
                      style={{ color: accentColor }}
                    >
                      <span className="relative">
                        Read more
                        <span
                          className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover/link:w-full"
                          style={{ backgroundColor: accentColor }}
                        />
                      </span>
                      <span
                        className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
