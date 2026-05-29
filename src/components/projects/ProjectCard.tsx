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

function StatusBadge({ status }: { status: Project["status"] }) {
  const statusConfig = {
    FEATURED: { bg: "bg-purple-500", label: "Featured" },
    ONGOING: { bg: "bg-orange-500", label: "Ongoing" },
    COMPLETED: { bg: "bg-emerald-500", label: "Completed" },
  };

  const config = statusConfig[status];
  return (
    <span className={`text-xs px-2 py-1 ${config.bg} text-white rounded`}>
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
      className="text-xs px-2 py-1 bg-transparent rounded transition-all duration-300 cursor-default hover:-translate-y-2 hover:scale-105"
      style={{
        border: "1px solid var(--border-color)",
        color: "var(--text-secondary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.color = accentColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.color = "";
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
    <div className="flex gap-6 text-sm font-medium">
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
    <div className="relative">
      {/* Timeline Dot */}
      <div
        className={`hidden md:block absolute left-1/2 top-24 w-4 h-4 ${project.statusColor} rounded-full -translate-x-1/2 z-10 border-4`}
        style={{ borderColor: "var(--bg-primary)" }}
      />

      {/* Content - Compact Layout */}
      <div
        className={`grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center max-w-4xl mx-auto `}
      >
        {/* Thumbnail */}
        <div
          className={`${project.side === "left" ? "md:order-1 " : "md:order-2"}`}
        >
          <PhotoCarousel thumbnails={project.thumbnails} />
        </div>

        {/* Project Info */}
        <div
          className={`block min-h-0 sm:min-h-[250px] md:min-h-[320px] flex flex-col justify-center ${project.side === "left" ? "md:order-2" : "md:order-1"}`}
        >
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

          {/* Title */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <p
            className="text-sm sm:text-base text-justify mb-3 sm:mb-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech pills + status badge */}
          <div className="flex flex-wrap gap-2 mb-3 items-center">
            {project.tech.slice(0, 10).map((tech, idx) => (
              <TechPill key={idx} tech={tech} accentColor={accentColor} />
            ))}
            <StatusBadge status={project.status} />
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
