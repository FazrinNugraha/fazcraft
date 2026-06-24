import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import type { Project } from "./projectsData";
import PhotoCarousel from "./PhotoCarousel";

interface ProjectCardProps {
  project: Project;
}

// Color mapping for status colors to actual hex values
const colorMap: Record<string, string> = {
  emerald: "#10B981",
  purple: "#A855F7",
  blue: "#3B82F6",
  orange: "#F97316",
};

// Extract color name from Tailwind class like "bg-purple-500" → "purple"
function extractColorName(twClass: string): string {
  const match = twClass.match(/(?:bg|text|border)-(\w+)-\d+/);
  return match ? match[1] : "blue";
}

const statusConfig = {
  FEATURED: {
    label: "Featured",
    color: "#A855F7",
    bg: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.3)",
  },
  ONGOING: {
    label: "Ongoing",
    color: "#F97316",
    bg: "rgba(249, 115, 22, 0.1)",
    border: "rgba(249, 115, 22, 0.3)",
  },
  COMPLETED: {
    label: "Completed",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.1)",
    border: "rgba(16, 185, 129, 0.3)",
  },
};

function StatusBadge({ status }: { status: Project["status"] }) {
  const config = statusConfig[status];
  return (
    <span
      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap inline-block"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
      }}
    >
      {config.label}
    </span>
  );
}

function TechPill({
  tech,
  accentColor,
}: {
  tech: string;
  accentColor: string;
}) {
  return (
    <span
      className="text-xs px-3 py-1 rounded transition-all duration-300 cursor-default hover:-translate-y-0.5 hover:scale-102 border font-medium inline-block"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.backgroundColor = `${accentColor}1a`; // 10% opacity accent tint
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
      }}
    >
      {tech}
    </span>
  );
}

function ProjectLinks({
  sourceCode,
  liveDemo,
}: {
  sourceCode: string;
  liveDemo: string;
}) {
  return (
    <div className="flex items-center gap-6 text-sm font-medium">
      {sourceCode !== "#" && (
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 inline-flex items-center gap-2 group/link relative overflow-hidden"
        >
          <span className="relative">
            Source Code
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-blue-500 transition-all duration-300 group-hover/link:w-full" />
          </span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
            <ArrowRight size={14} />
          </span>
        </a>
      )}

      {liveDemo !== "#" && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 inline-flex items-center gap-2 group/link relative overflow-hidden"
        >
          <span className="relative">
            Live Demo
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-blue-500 transition-all duration-300 group-hover/link:w-full" />
          </span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
            <ArrowRight size={14} />
          </span>
        </a>
      )}
      {/* Status Badge — pinned to the right */}
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Get the accent hex color from the project's statusColor class
  const accentColor =
    colorMap[extractColorName(project.statusColor)] || "#3B82F6";

  return (
    <div className="relative pl-8 group">
      {/* Timeline Dot */}
      <div
        className={`absolute left-0 top-3 w-4 h-4 ${project.statusColor} rounded-full transition-transform group-hover:scale-125 z-10`}
      />

      {/* Content - Stacked Layout */}
      <div className="flex flex-col" style={{ gap: "1.25rem" }}>
        {/* Thumbnail */}
        <div className="w-full">
          <PhotoCarousel thumbnails={project.thumbnails} />
        </div>

        {/* Project Info */}
        <div className="flex flex-col">
          {/* Phase & Role Label */}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-bold ${project.phaseColor} uppercase tracking-wider`}
            >
              {project.phase}
            </span>
            <span className="text-xs text-neutral-500 select-none mx-1">•</span>
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.role}
            </span>
          </div>

          {/* Title + Status Badge inline */}
          <div className="flex items-center gap-3 mb-2 sm:mb-3 flex-wrap">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h2>
            <StatusBadge status={project.status} />
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base text-justify mb-3 sm:mb-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech pills only — badge moved to links row */}
          <div className="flex flex-wrap gap-1.5 mb-3 items-center">
            {project.tech.slice(0, 10).map((tech, idx) => (
              <TechPill key={idx} tech={tech} accentColor={accentColor} />
            ))}
          </div>

          {/* Links */}
          <ProjectLinks
            sourceCode={project.sourceCode}
            liveDemo={project.liveDemo}
          />
        </div>
      </div>
    </div>
  );
}
