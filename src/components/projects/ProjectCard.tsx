import React from "react";
import { ArrowRight } from "lucide-react";
import type { Project, ProjectTone } from "../../data/projects/projectsData";
import PhotoCarousel from "./PhotoCarousel";

interface ProjectCardProps {
  project: Project;
  isPriority?: boolean;
  deferred?: boolean;
}

/** Badge label per status; colour comes from the project's statusTone. */
const statusLabels: Record<Project["status"], string> = {
  FEATURED: "Featured",
  ONGOING: "Ongoing",
  COMPLETED: "Completed",
};

function StatusBadge({
  status,
  tone,
}: {
  status: Project["status"];
  tone: ProjectTone;
}) {
  return (
    <span
      className={`tone-badge tone-${tone} text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap inline-block`}
    >
      {statusLabels[status]}
    </span>
  );
}

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="accent-hover-pill text-xs px-3 py-1 rounded transition-transform duration-200 cursor-default hover:-translate-y-0.5 hover:scale-102 border font-medium inline-block">
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
          className="tone-text tone-blue inline-flex items-center gap-2 group/link relative overflow-hidden"
        >
          <span className="relative">
            Source Code
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
          </span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </a>
      )}

      {liveDemo !== "#" && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="tone-text tone-blue inline-flex items-center gap-2 group/link relative overflow-hidden"
        >
          <span className="relative">
            Live Demo
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
          </span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({
  project,
  isPriority = false,
  deferred = false,
}: ProjectCardProps) {
  return (
    <div
      className={`tone-${project.statusTone} relative pl-8 group ${deferred ? "deferred-card" : ""}`}
    >
      {/* Timeline Dot */}
      <div
        className={`tone-dot tone-${project.statusTone} absolute left-0 top-3 w-4 h-4 rounded-full transition-transform group-hover:scale-125 z-10`}
        aria-hidden="true"
      />

      {/* Content - Stacked Layout */}
      <div className="flex flex-col" style={{ gap: "1.25rem" }}>
        {/* Thumbnail */}
        <div className="w-full">
          <PhotoCarousel
            thumbnails={project.thumbnails}
            isPriority={isPriority}
            title={project.title}
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col">
          {/* Phase & Role Label */}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`tone-text tone-${project.phaseTone} text-xs font-bold uppercase tracking-wider`}
            >
              {project.phase}
            </span>
            <span
              className="text-xs text-neutral-500 select-none mx-1"
              aria-hidden="true"
            >
              •
            </span>
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
            <StatusBadge status={project.status} tone={project.statusTone} />
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base text-justify mb-3 sm:mb-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-3 items-center">
            {project.tech.slice(0, 10).map((tech, idx) => (
              <TechPill key={idx} tech={tech} />
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
