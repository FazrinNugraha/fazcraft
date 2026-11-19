import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface BlogSectionProps {
  blogPosts?: any[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const posts = blogPosts || [];

  const getCategoryStyles = (category: string) => {
    switch (category?.toLowerCase()) {
      case "tutorial":
        return isDark
          ? { color: "#60a5fa", bg: "#3b82f61a", border: "#3b82f640" }
          : { color: "#1d4ed8", bg: "#1d4ed81a", border: "#1d4ed840" };
      case "insight":
        return isDark
          ? { color: "#c084fc", bg: "#a855f71a", border: "#a855f740" }
          : { color: "#7e22ce", bg: "#7e22ce1a", border: "#7e22ce40" };
      case "article":
      default:
        return isDark
          ? { color: "#34d399", bg: "#10b9811a", border: "#10b98140" }
          : { color: "#047857", bg: "#0478571a", border: "#04785740" };
    }
  };

  return (
    <section
      id="blog"
      className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16"
    >
      <div className="space-y-6">
        {/* Blog Articles List */}
        {posts.map((post, index) => {
          const styles = getCategoryStyles(post.category);
          return (
            <a
              key={post.slug || index}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 px-4 -mx-4 cursor-pointer hover:pl-2 ${
                index >= 4 ? "deferred-card" : ""
              }`}
              style={{ borderBottom: "2px solid var(--border-color)" }}
            >
              <div className="flex-1 min-w-0">
                {/* Tag */}
                <span
                  className="inline-block text-sm font-semibold px-2.5 py-1 rounded mb-3"
                  style={{
                    color: styles.color,
                    border: `1px solid ${styles.border}`,
                  }}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h2
                  className="text-xl font-bold mb-2 transition-colors duration-200 text-[var(--text-primary)] group-hover:text-[var(--nav-text-hover)]"
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p
                  className="text-md leading-relaxed mb-4 transition-colors duration-200 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                >
                  {post.description}
                </p>
              </div>

              {/* Date - Stay on the right on larger screens */}
              <div className="sm:flex-shrink-0 sm:text-right">
                <div
                  className="text-base flex items-center gap-2 sm:justify-end transition-colors duration-200 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:font-bold"
                >
                  {post.date}
                  <ArrowUpRight size={14} className="flex-shrink-0" aria-hidden="true" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
