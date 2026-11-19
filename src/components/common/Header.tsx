import React, { useState, useEffect, useRef, useCallback } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import {
  closeTopLayer,
  supportsClosedBy,
} from "../../utils/dialog";

const MENU_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ARTICLES", href: "/blog" },
  { label: "JOURNEY", href: "/journey" },
  { label: "TECH STACK", href: "/skills" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const drawerRef = useRef<HTMLDialogElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrolled = () => {
      const next = window.scrollY > 10;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    const syncPath = () => {
      setActiveItem(window.location.pathname);
    };

    updateScrolled();
    syncPath();

    window.addEventListener("scroll", updateScrolled, { passive: true });
    document.addEventListener("astro:page-load", syncPath);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      document.removeEventListener("astro:page-load", syncPath);
    };
  }, []);

  const openDrawer = useCallback(() => {
    const dialog = drawerRef.current;
    if (!dialog || dialog.open) return;
    dialog.removeAttribute("data-closing");
    dialog.showModal();
    setIsMobileMenuOpen(true);
  }, []);

  const closeDrawer = useCallback(async () => {
    const dialog = drawerRef.current;
    if (!dialog || !dialog.open) {
      setIsMobileMenuOpen(false);
      return;
    }
    await closeTopLayer(dialog);
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      if (event.cancelable) {
        event.preventDefault();
        void closeDrawer();
      }
    };

    const handleClose = () => {
      dialog.removeAttribute("data-closing");
      setIsMobileMenuOpen(false);
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);

    // Fallback light-dismiss when clicking backdrop outside the drawer sheet
    let pressedOutside = false;
    const isOutsideSheet = (target: EventTarget | null) =>
      Boolean(sheetRef.current && target instanceof Node && !sheetRef.current.contains(target));

    const handlePointerDown = (e: PointerEvent) => {
      pressedOutside = isOutsideSheet(e.target);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutsideSheet(e.target)) {
        void closeDrawer();
      }
      pressedOutside = false;
    };

    if (!supportsClosedBy()) {
      dialog.addEventListener("pointerdown", handlePointerDown);
      dialog.addEventListener("pointerup", handlePointerUp);
    } else {
      // Even with closedby="any", clicking inside the full-bleed dialog outside the sheet
      // lands on the dialog itself rather than ::backdrop, so handle outside sheet clicks cleanly.
      dialog.addEventListener("pointerdown", handlePointerDown);
      dialog.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("pointerdown", handlePointerDown);
      dialog.removeEventListener("pointerup", handlePointerUp);
    };
  }, [closeDrawer]);

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    void closeDrawer();
  };

  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-sm ${isScrolled ? "shadow-lg" : ""}`}
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
      <nav aria-label="Primary" className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {MENU_ITEMS.map((item) => {
                const isActive = activeItem === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className="nav-link text-sm font-medium tracking-wide transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Dark Mode Toggle (Desktop) */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn transition-colors p-1 cursor-pointer"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={!isDark}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Clean Burger Menu */}
      <nav aria-label="Mobile" className="md:hidden">
        {/* Top Bar */}
        <div
          className="flex items-center justify-between h-14 px-4"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          {/* Brand Logo - Left */}
          <a
            href="/"
            className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-75"
            style={{ textDecoration: "none" }}
          >
            <div className="flex flex-col leading-none gap-1">
              <span
                className="text-[9px] font-normal tracking-[0.18em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                FAZRIN
              </span>
              <span
                className="text-[10px] font-bold tracking-[0.06em] uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Right: Theme Toggle + Burger */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn transition-colors p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center shrink-0 cursor-pointer"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={!isDark}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              onClick={() => (isMobileMenuOpen ? void closeDrawer() : openDrawer())}
              className="transition-colors p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center shrink-0 cursor-pointer"
              style={{ color: "var(--text-primary)" }}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Native Top-Layer Modal Navigation Drawer */}
        <dialog
          ref={drawerRef}
          id="mobile-nav-drawer"
          aria-label="Navigation menu"
          className="nav-drawer-dialog"
        >
          <div ref={sheetRef} className="nav-drawer-sheet">
            {/* Drawer Header */}
            <div
              className="flex items-center justify-between px-5 h-14 shrink-0"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                Navigation
              </span>
              <button
                type="button"
                autoFocus
                onClick={() => void closeDrawer()}
                className="p-2 rounded-md cursor-pointer inline-flex items-center justify-center min-w-[40px] min-h-[40px]"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 flex flex-col py-2 overflow-y-auto">
              {MENU_ITEMS.map((item, idx) => {
                const isActive = activeItem === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className="drawer-nav-link flex items-center justify-between px-5 py-4 text-[13px] tracking-[0.12em] uppercase no-underline"
                    style={{
                      fontWeight: isActive ? 700 : 500,
                      borderBottom:
                        idx < MENU_ITEMS.length - 1
                          ? "1px solid var(--border-color)"
                          : "none",
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="w-[5px] h-[5px] rounded-full shrink-0"
                        style={{ backgroundColor: "var(--nav-text-active)" }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div
              className="px-5 py-4 shrink-0"
              style={{ borderTop: "1px solid var(--border-color)" }}
            >
              <span
                className="text-[10px] tracking-[0.1em]"
                style={{ color: "var(--text-secondary)" }}
              >
                © {currentYear} Fazrin Portfolio
              </span>
            </div>
          </div>
        </dialog>
      </nav>
    </header>
  );
}
