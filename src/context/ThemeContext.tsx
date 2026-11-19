import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function syncDocumentTheme(theme: Theme) {
  const root = document.documentElement;
  const isLight = theme === "light";

  if (isLight) {
    root.classList.add("light-theme");
    root.classList.remove("dark-theme");
  } else {
    root.classList.add("dark-theme");
    root.classList.remove("light-theme");
  }

  const schemeMeta = document.querySelector('meta[name="color-scheme"]');
  if (schemeMeta) {
    schemeMeta.setAttribute("content", theme);
  }

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", isLight ? "#f9fafb" : "#141414");
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Read initial theme from DOM class that Astro already set to avoid hydration mismatch
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (root.classList.contains("light-theme")) {
        return "light";
      }
      if (root.classList.contains("dark-theme")) {
        return "dark";
      }
      try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          return savedTheme;
        }
      } catch {
        // Ignore storage access failures
      }
    }
    return "dark";
  });

  useEffect(() => {
    syncDocumentTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage access failures
    }
  }, [theme]);

  // Keep theme in sync across browser tabs
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (
        event.key === "theme" &&
        (event.newValue === "light" || event.newValue === "dark")
      ) {
        setTheme(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
