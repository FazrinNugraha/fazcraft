import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

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

export default function BlogMarkdownLayout({
  frontmatter,
  children,
}: BlogMarkdownLayoutProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getCategoryStyles = (category: string) => {
    switch (category?.toLowerCase()) {
      case "tutorial":
        return { color: "#3b82f6", bg: "#3b82f61a", border: "#3b82f640" };
      case "insight":
        return { color: "#a855f7", bg: "#a855f71a", border: "#a855f740" };
      case "article":
      default:
        return { color: "#10b981", bg: "#10b9811a", border: "#10b98140" };
    }
  };

  const styles = getCategoryStyles(frontmatter.category || "");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-white"
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded"
                style={{
                  border: `1px solid ${styles.border}`,
                  backgroundColor: styles.bg,
                  color: styles.color,
                }}
              >
                <Tag size={12} />
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
