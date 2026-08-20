import { useTheme } from "../../context/ThemeContext";
import { projects } from "../../data/projects/projectsData";

export default function ProjectsHeader() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const featuredCount = projects.filter((p) => p.status === "FEATURED").length;

  return (
    <div className="mb-16 text-center">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Selected Project
      </h1>
      <p
        className="mb-16 max-w-3xl mx-auto text-center text-lg"
        style={{ color: "var(--text-secondary)" }}
      >
        Here's a collection of projects I've worked on. Each project tells a
        story about why I built it, how I approached it, and what came out of it.
        Together, they show my experience in building practical solutions that
        people can actually use.
      </p>
      <p className="text-sm" style={{ color: "var(--text-primary)" }}>
        {projects.length} projects · {featuredCount} featured
      </p>
    </div>
  );
}
