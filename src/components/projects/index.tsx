import { useTheme } from "../../context/ThemeContext";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen">
      <main>
        <section className="max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-5 md:px-6">
          {/* Header */}
          <ProjectsHeader />

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div
              className="absolute left-1.75 top-8 bottom-8 w-0.5"
              style={{ backgroundColor: "var(--border-color)" }}
            />

            {/* Projects */}
            <div className="flex flex-col" style={{ gap: "4.5rem" }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Re-export for convenience
export { projects } from "./projectsData";
export type { Project } from "./projectsData";
