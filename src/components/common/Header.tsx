import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Set active item based on current path
    if (typeof window !== "undefined") {
      setActiveItem(window.location.pathname);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/projects" },
    { label: "BLOG", href: "/blog" },
    { label: "JOURNEY", href: "/journey" },
    { label: "SKILLS", href: "/skills" },
    { label: "CONTACT", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    setIsMobileMenuOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? "shadow-lg" : ""}`}
      style={{
        backgroundColor: isScrolled
          ? "var(--header-scrolled-bg)"
          : "var(--header-bg)",
        borderBottom: isScrolled
          ? "1px solid var(--header-scrolled-border)"
          : "none",
      }}
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium tracking-wide transition-colors duration-300"
                  style={{
                    color:
                      activeItem === item.href
                        ? "var(--nav-text-active)"
                        : "var(--nav-text)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeItem !== item.href) {
                      e.currentTarget.style.color = "var(--nav-text-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== item.href) {
                      e.currentTarget.style.color = "var(--nav-text)";
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle (Desktop) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="transition-colors p-1"
              style={{ color: "var(--toggle-text)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--toggle-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--toggle-text)";
              }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Clean Burger Menu */}
      <nav className="md:hidden">
        {/* Top Bar */}
        <div
          className="flex items-center justify-between h-14 px-4"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          {/* Brand Logo - Left */}
          <a
            href="/"
            className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-75"
            style={{ textDecoration: "none", gap: "10px" }}
          >
            <img
              src="/pp6.png"
              alt="Fazrin Nugraha"
              className="rounded-full object-cover flex-shrink-0"
              style={{
                width: "32px",
                height: "32px",
                border: "1.5px solid var(--border-color)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: "4px" }}>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                }}
              >
                FAZRIN
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                }}
              >
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Right: Theme Toggle + Burger */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="transition-colors p-2 shrink-0"
              style={{ color: "var(--toggle-text)" }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors p-2 shrink-0"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Side Drawer - slides from right */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100dvh",
            width: "72vw",
            maxWidth: "300px",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--bg-primary)",
            borderLeft: "1px solid var(--border-color)",
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Drawer Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              height: "56px",
              borderBottom: "1px solid var(--border-color)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "var(--text-secondary)",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: "var(--text-secondary)",
                padding: "6px",
                borderRadius: "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Items */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "8px 0",
              overflowY: "auto",
            }}
          >
            {menuItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: activeItem === item.href ? 700 : 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeItem === item.href
                    ? "var(--nav-text-active)"
                    : "var(--nav-text)",
                  borderBottom: idx < menuItems.length - 1
                    ? "1px solid var(--border-color)"
                    : "none",
                  transition: "padding-left 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "28px";
                  if (activeItem !== item.href) {
                    e.currentTarget.style.color = "var(--nav-text-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "20px";
                  if (activeItem !== item.href) {
                    e.currentTarget.style.color = "var(--nav-text)";
                  }
                }}
              >
                {item.label}
                {activeItem === item.href && (
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "var(--nav-text-active)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div
            style={{
              padding: "16px 20px",
              borderTop: "1px solid var(--border-color)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "var(--text-secondary)",
                letterSpacing: "0.1em",
              }}
            >
              © 2025 Fazrin Portfolio
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
