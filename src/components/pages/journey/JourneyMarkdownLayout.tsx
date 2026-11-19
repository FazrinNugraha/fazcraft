import React, { useEffect, useRef } from "react";

interface JourneyMarkdownLayoutProps {
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

export default function JourneyMarkdownLayout({
  frontmatter,
  children,
}: JourneyMarkdownLayoutProps) {
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
      h2.style.marginBottom = "1.25rem";
      h2.style.paddingLeft = "0";
      h2.style.borderLeft = "none";
      h2.style.color = "var(--text-primary)";

      const existingSlash = h2.querySelector(".heading-prefix");
      if (existingSlash) existingSlash.remove();
      const existingNumber = h2.querySelector(".heading-number");
      if (existingNumber) existingNumber.remove();

      const numSpan = document.createElement("span");
      numSpan.className = "heading-number";
      numSpan.style.color = accentColor;
      numSpan.style.marginRight = "0.75rem";
      numSpan.style.fontFamily = "var(--font-mono, monospace)";
      numSpan.style.fontWeight = "500";
      numSpan.style.opacity = "0.85";
      numSpan.textContent = String(index + 1).padStart(2, "0");
      h2.insertBefore(numSpan, h2.firstChild);
    });

    const paragraphs = article.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.style.fontSize = "clamp(1rem, 2vw, 1.125rem)";
      p.style.lineHeight = "1.75";
      p.style.textAlign = "justify";
      p.style.color = "var(--text-secondary)";
      p.style.marginBottom = "0";
    });

    const hrs = article.querySelectorAll("hr");
    hrs.forEach((hr) => {
      hr.style.border = "none";
      hr.style.height = "1px";
      hr.style.background = `linear-gradient(to right, ${accentColor}40, transparent)`;
      hr.style.marginTop = "3rem";
      hr.style.marginBottom = "3rem";
    });

    const listItems = article.querySelectorAll("li");
    listItems.forEach((li) => {
      li.style.display = "flex";
      li.style.alignItems = "flex-start";
      li.style.gap = "0.75rem";
      li.style.fontSize = "clamp(1rem, 2vw, 1.125rem)";
      li.style.lineHeight = "1.75";
      li.style.color = "var(--text-secondary)";
      li.style.listStyle = "none";

      const strong = li.querySelector("strong");
      if (strong) {
        strong.style.color = "var(--text-primary)";
      }
    });

    const uls = article.querySelectorAll("ul");
    uls.forEach((ul) => {
      ul.style.listStyle = "none";
      ul.style.padding = "0";
      ul.style.margin = "0";
      ul.style.display = "flex";
      ul.style.flexDirection = "column";
      ul.style.gap = "1rem";

      const items = ul.querySelectorAll(":scope > li");
      items.forEach((li) => {
        if (!li.querySelector(".journey-marker")) {
          const marker = document.createElement("span");
          marker.className = "journey-marker";
          marker.style.color = accentColor;
          marker.style.marginTop = "0.375rem";
          marker.style.fontSize = "1.125rem";
          marker.style.flexShrink = "0";
          marker.textContent = "›";
          li.insertBefore(marker, li.firstChild);

          const content = document.createElement("span");
          while (li.childNodes.length > 1) {
            content.appendChild(li.childNodes[1]);
          }
          li.appendChild(content);
        }
      });
    });

    type ShieldsEntry = [string, string, string?];
    const SHIELDS_MAP: Record<string, ShieldsEntry> = {
      "html": ["html5", "E34F26"],
      "css": ["css3", "1572B6"],
      "javascript": ["javascript", "F7DF1E", "000000"],
      "java script": ["javascript", "F7DF1E", "000000"],
      "typescript": ["typescript", "007ACC"],
      "react": ["react", "20232A", "61DAFB"],
      "node.js": ["node.js", "339933"],
      "express": ["express", "404040"],
      "express js": ["express", "404040"],
      "mongodb": ["mongodb", "47A248"],
      "mysql": ["mysql", "4479A1"],
      "php": ["php", "777BB4"],
      "git": ["git", "F05032"],
      "tailwind css": ["tailwind-css", "06B6D4"],
      "python": ["python", "3670A0", "ffdd54"],
      "fastapi": ["fastapi", "005571"],
      "tensorflow": ["tensorflow", "FF6F00"],
      "google gemini": ["google-gemini", "8E75C2"],
      "google gemini api": ["google-gemini", "8E75C2"],
      "google cloud vision": ["google-cloud", "4285F4"],
      "google cloud": ["google-cloud", "4285F4"],
      "chart.js": ["chart.js", "F5788D"],
      "chart js": ["chart.js", "F5788D"],
      "sigma.js": ["", "e67e22"],
      "maplibre": ["", "296DB0"],
      "neon database": ["neon", "00E599", "000000"],
      "machine learning": ["", "FF6D00"],
      "deep learning": ["", "7C3AED"],
      "neural networks": ["", "0EA5E9"],
      "data science": ["", "0F766E"],
      "mlops": ["", "059669"],
      "ai engineering": ["", "D97706"],
      "ai": ["", "6366F1"],
      "groq - ai": ["", "F54E42"],
      "fraud detection": ["", "DC2626"],
      "api integration": ["", "0369A1"],
      "prompt engineering": ["", "7E22CE"],
      "database management": ["", "1D4ED8"],
      "crud operations": ["", "15803D"],
      "table structure": ["", "64748B"],
      "responsive design": ["", "0891B2"],
    };

    const getShieldsUrl = (skill: string): string => {
      const key = skill.toLowerCase().trim();
      const entry = SHIELDS_MAP[key];
      const label = encodeURIComponent(skill);

      if (entry) {
        const [logo, color, logoColor] = entry;
        const lc = logoColor ?? "white";
        const logoParam = logo ? `&logo=${encodeURIComponent(logo)}&logoColor=${lc}` : "";
        return `https://img.shields.io/badge/${label}-${color}.svg?style=for-the-badge${logoParam}`;
      }

      const fallbackColor = accentColor.replace("#", "");
      return `https://img.shields.io/badge/${label}-${fallbackColor}.svg?style=for-the-badge`;
    };

    const skillContainers = article.querySelectorAll(".journey-skills");
    skillContainers.forEach((container) => {
      const skillsData = container.getAttribute("data-skills");
      const skills =
        frontmatter.skills && frontmatter.skills.length > 0
          ? frontmatter.skills
          : skillsData
            ? skillsData.split(",").map((s) => s.trim())
            : [];

      if (skills.length === 0) return;

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.gap = "0.875rem";
      wrapper.style.alignItems = "flex-start";

      skills.forEach((skill) => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.alignItems = "center";
        row.style.gap = "0.75rem";

        const marker = document.createElement("span");
        marker.style.color = accentColor;
        marker.style.fontSize = "1.25rem";
        marker.style.fontWeight = "bold";
        marker.style.lineHeight = "1";
        marker.style.userSelect = "none";
        marker.textContent = "›";

        const img = document.createElement("img");
        img.src = getShieldsUrl(skill);
        img.alt = skill;
        img.height = 28;
        img.loading = "lazy";
        img.decoding = "async";
        img.className = "journey-badge-img";

        row.appendChild(marker);
        row.appendChild(img);
        wrapper.appendChild(row);
      });

      container.replaceWith(wrapper);
    });
  }, [accentColor, children, frontmatter.skills]);

  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Back Button */}
        <a
          href="/journey"
          className="accent-hover-link inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          style={{ "--accent": accentColor } as React.CSSProperties}
        >
          <span aria-hidden="true">←</span> Back to Journey
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
        <article ref={contentRef}>
          {children}
        </article>

        {/* Footer */}
        <footer
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            Part of my development journey
          </div>
        </footer>
      </section>
    </div>
  );
}
