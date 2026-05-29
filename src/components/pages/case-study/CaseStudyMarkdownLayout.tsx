import React, { useEffect, useRef } from "react";
import { useTheme } from "../../../context/ThemeContext";

interface CaseStudyMarkdownLayoutProps {
  frontmatter: {
    title: string;
    description?: string;
    date: string;
    type: string;
    accentColor: string;
    skills: string[];
  };
  children: React.ReactNode;
}

export default function CaseStudyMarkdownLayout({
  frontmatter,
  children,
}: CaseStudyMarkdownLayoutProps) {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const accentColor = frontmatter.accentColor || "#3B82F6";

  useEffect(() => {
    if (!contentRef.current) return;

    const article = contentRef.current;

    // Style h2 headings with dynamic sequential numbering (01, 02, etc.)
    const headings = article.querySelectorAll("h2");
    headings.forEach((h2, index) => {
      h2.style.fontSize = "1.5rem";
      h2.style.fontWeight = "700";
      h2.style.marginTop = "2rem";
      h2.style.marginBottom = "1.25rem";
      h2.style.paddingLeft = "0";
      h2.style.borderLeft = "none";
      h2.style.color = "var(--text-primary)";

      // Clean up previous prefixes to avoid duplication on hot reloads
      const existingSlash = h2.querySelector(".heading-prefix");
      if (existingSlash) {
        existingSlash.remove();
      }
      const existingNumber = h2.querySelector(".heading-number");
      if (existingNumber) {
        existingNumber.remove();
      }

      // Add modern numbering prefix
      const numSpan = document.createElement("span");
      numSpan.className = "heading-number";
      numSpan.style.color = accentColor;
      numSpan.style.marginRight = "0.75rem";
      numSpan.style.fontFamily = "var(--font-mono, monospace)";
      numSpan.style.fontWeight = "500";
      numSpan.style.opacity = "0.85";
      
      // Pad the index to 2 digits (e.g., 01, 02)
      const formattedNum = String(index + 1).padStart(2, "0");
      numSpan.textContent = formattedNum;
      h2.insertBefore(numSpan, h2.firstChild);
    });

    // Style h3 headings
    const h3s = article.querySelectorAll("h3");
    h3s.forEach((h3) => {
      h3.style.fontSize = "1.25rem";
      h3.style.fontWeight = "600";
      h3.style.marginTop = "1.5rem";
      h3.style.marginBottom = "1rem";
      h3.style.color = "var(--text-primary)";
    });

    // Style paragraphs
    const paragraphs = article.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.style.fontSize = "clamp(1.025rem, 2.2vw, 1.1rem)";
      p.style.lineHeight = "1.8";
      p.style.textAlign = "justify";
      p.style.color = "var(--text-secondary)";
      p.style.marginBottom = "1.25rem";
    });

    // Style tables if any
    const tables = article.querySelectorAll("table");
    tables.forEach((table) => {
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";
      table.style.marginTop = "1.5rem";
      table.style.marginBottom = "1.5rem";
      table.style.fontSize = "0.95rem";
    });

    const ths = article.querySelectorAll("th");
    ths.forEach((th) => {
      th.style.borderBottom = "2px solid var(--border-color)";
      th.style.padding = "0.75rem";
      th.style.textAlign = "left";
      th.style.fontWeight = "600";
      th.style.color = "var(--text-primary)";
    });

    const tds = article.querySelectorAll("td");
    tds.forEach((td) => {
      td.style.borderBottom = "1px solid var(--border-color)";
      td.style.padding = "0.75rem";
      td.style.color = "var(--text-secondary)";
    });

    // Style hr elements as gradient separators
    const hrs = article.querySelectorAll("hr");
    hrs.forEach((hr) => {
      hr.style.border = "none";
      hr.style.height = "1px";
      hr.style.background = `linear-gradient(to right, ${accentColor}40, transparent)`;
      hr.style.marginTop = "2.5rem";
      hr.style.marginBottom = "2.5rem";
    });

    // Style details and summary blocks (like Table of Contents)
    const details = article.querySelectorAll("details");
    details.forEach((detail) => {
      detail.style.border = "1px solid var(--border-color)";
      detail.style.borderRadius = "8px";
      detail.style.padding = "1rem";
      detail.style.marginBottom = "1.5rem";
      detail.style.backgroundColor = "var(--bg-card)";
    });

    const summaries = article.querySelectorAll("summary");
    summaries.forEach((summary) => {
      summary.style.fontWeight = "600";
      summary.style.cursor = "pointer";
      summary.style.color = "var(--text-primary)";
      summary.style.outline = "none";
    });

    // Style list items with accent markers
    const listItems = article.querySelectorAll("li");
    listItems.forEach((li) => {
      li.style.fontSize = "clamp(0.95rem, 2vw, 1.05rem)";
      li.style.lineHeight = "1.75";
      li.style.color = "var(--text-secondary)";

      // Style strong elements inside li
      const strong = li.querySelector("strong");
      if (strong) {
        strong.style.color = "var(--text-primary)";
      }
    });

    // Style ul elements if they are not inside TOC or summaries
    const uls = article.querySelectorAll("ul");
    uls.forEach((ul) => {
      // Skip if inside details / Table of Contents
      if (ul.closest("details")) {
        ul.style.paddingLeft = "1.5rem";
        ul.style.marginTop = "0.5rem";
        return;
      }

      ul.style.listStyle = "none";
      ul.style.padding = "0";
      ul.style.margin = "1rem 0";
      ul.style.display = "flex";
      ul.style.flexDirection = "column";
      ul.style.gap = "0.75rem";

      // Add accent markers to li children
      const items = ul.querySelectorAll(":scope > li");
      items.forEach((li) => {
        // Check if the li already has a marker span
        if (!li.querySelector(".case-study-marker")) {
          li.style.display = "flex";
          li.style.alignItems = "flex-start";
          li.style.gap = "0.75rem";

          const marker = document.createElement("span");
          marker.className = "case-study-marker";
          marker.style.color = accentColor;
          marker.style.marginTop = "0.25rem";
          marker.style.fontSize = "1.125rem";
          marker.style.flexShrink = "0";
          marker.textContent = "›";
          li.insertBefore(marker, li.firstChild);

          // Wrap the remaining content in a span
          const content = document.createElement("span");
          while (li.childNodes.length > 1) {
            content.appendChild(li.childNodes[1]);
          }
          li.appendChild(content);
        }
      });
    });

    // Style ol elements
    const ols = article.querySelectorAll("ol");
    ols.forEach((ol) => {
      ol.style.paddingLeft = "1.5rem";
      ol.style.marginTop = "0.5rem";
      ol.style.display = "flex";
      ol.style.flexDirection = "column";
      ol.style.gap = "0.5rem";
    });
  }, [accentColor, children]);

  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
        >
          <span>←</span> Back to Home
        </a>

        {/* Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              {frontmatter.date}
            </span>
            <span
              className="text-xs font-semibold border px-2.5 py-1 rounded"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {frontmatter.type}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {frontmatter.description}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article ref={contentRef} className="markdown-content">
          {children}
        </article>

        {/* Footer */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: `1px solid var(--border-color)` }}
        >
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            Project Case Study Showcase &middot; Muhamad Fazrin Nugraha
          </div>
        </footer>
      </section>
    </div>
  );
}
