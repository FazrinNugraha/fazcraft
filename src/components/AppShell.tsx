import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./common/Header";
import Footer from "./common/Footer";

interface AppShellProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function AppShell({
  children,
  showFooter = false,
}: AppShellProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="grow" tabIndex={-1}>
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </ThemeProvider>
  );
}
