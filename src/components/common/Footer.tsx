import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "github", url: "https://github.com/FazrinNugraha" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
    },
    {
      label: "gmail",
      url: "/contact",
    },
  ];

  return (
    <footer
      className="transition-colors duration-300"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-8">
        {/* Footer Content */}
        <div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-12"
          style={{ borderTop: "2px solid var(--border-color)" }}
        >
          {/* Brand */}
          <div>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Let's Connect
            </h2>

            <p
              className=" text-md mb-6 text-justify leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              If you want to get in touch with me about something or just to say
              hi, reach out on social media or send me an email.
            </p>

            {/* Social Links */}
            <div
              className="flex flex-wrap items-center gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {socialLinks.map((social, index) => (
                <React.Fragment key={social.label}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("/") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="social-link transition-all duration-200 ease-out text-md hover:shadow-lg"
                    style={{
                      borderBottom: "1px solid var(--border-hover)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {social.label}
                  </a>

                  {index !== socialLinks.length - 1 && (
                    <span className="mx-1">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="space-y-6 pt-12"
          style={{ borderTop: "2px solid var(--border-color)" }}
        >
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              &copy; {currentYear} Fazrin Nugraha. All rights reserved.{" "}
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              className="transition-colors duration-300 mt-4 md:mt-0"
              style={{ color: "var(--text-secondary)" }}
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
