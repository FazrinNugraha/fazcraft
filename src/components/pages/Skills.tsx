import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const techStackCategories = [
    {
      category: "Frontend",
      techs: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Astro.js",
          icon: isDark
            ? "https://astro.build/assets/press/astro-icon-light.svg"
            : "https://astro.build/assets/press/astro-icon-dark.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "shadcn/ui",
          icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
        },
      ],
    },
    {
      category: "Backend",
      techs: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
    {
      category: "Databases",
      techs: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      category: "ML and AI",
      techs: [
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Hugging Face",
          icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        },
        {
          name: "Google Gemini API",
          icon: "https://img.icons8.com/color/512/google-gemini.png",
        },
        {
          name: "Computer Vision",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
      ],
    },
    {
      category: "Tools & Others",
      techs: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-5 md:px-6 transition-colors duration-300"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p
            style={{ color: "var(--text-secondary)" }}
            className="max-w-2xl mx-auto"
          >
            Proficient in modern technologies for building scalable web
            applications
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-12">
          {techStackCategories.map((category) => (
            <div key={category.category}>
              <h3
                className="text-xl font-semibold mb-6 pl-4"
                style={{ borderLeft: "2px solid var(--border-hover)" }}
              >
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    style={{
                      border: "1px solid var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    <div className="text-center">
                      {tech.name === "Google Gemini API" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                        >
                          {/* Large Sparkle */}
                          <path
                            d="M 10 2 Q 10 10 2 10 Q 10 10 10 18 Q 10 10 18 10 Q 10 10 10 2"
                            fill="url(#gemini-inline-grad)"
                          />
                          {/* Small Sparkle */}
                          <path
                            d="M 18 3 Q 18 6 15 6 Q 18 6 18 9 Q 18 6 21 6 Q 18 6 18 3"
                            fill="url(#gemini-inline-grad)"
                          />
                          <defs>
                            <linearGradient id="gemini-inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#9b51e0" />
                              <stop offset="35%" stopColor="#3b82f6" />
                              <stop offset="70%" stopColor="#60a5fa" />
                              <stop offset="100%" stopColor="#f43f5e" />
                            </linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      )}
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {tech.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
