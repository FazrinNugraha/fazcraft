import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Tone } from "../../../utils/tone";

interface BlogMarkdownLayoutProps {
  frontmatter: {
    title: string;
    description?: string;
    date: string;
    readTime: string;
    category?: string;
  };
  children: React.ReactNode;
}

/** Article category → accent tone (contrast-safe in both themes). */
const CATEGORY_TONES: Record<string, Tone> = {
  tutorial: "blue",
  insight: "purple",
  article: "emerald",
};

export default function BlogMarkdownLayout({
  frontmatter,
  children,
}: BlogMarkdownLayoutProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tone = CATEGORY_TONES[frontmatter.category?.toLowerCase() ?? ""] ?? "emerald";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-[var(--text-primary)]"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Articles
        </a>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            {frontmatter.category && (
              <span
                className={`tone-badge tone-${tone} inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded`}
              >
                <Tag size={12} aria-hidden="true" />
                {frontmatter.category}
              </span>
            )}
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar size={12} />
              {frontmatter.date}
            </div>
            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={12} />
              {frontmatter.readTime}
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p
              className="text-xl leading-relaxed text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              {frontmatter.description}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article
          className={`prose prose-lg max-w-none text-justify ${isDark ? "prose-invert" : ""}`}
        >
          {children}
        </article>

        {/* Footer / Share */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              Written by Muhamad Fazrin Nugraha
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
