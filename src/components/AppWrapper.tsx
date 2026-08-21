import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./common/Header";
import Footer from "./common/Footer";

// Direct component imports to allow full static HTML pre-rendering (SSG) in Astro
import HomePage from "./pages/HomePage";
import Projects from "./projects";
import JourneyPage from "./pages/JourneyPage";
import BlogPage from "./pages/BlogPage";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Markdown layouts
import BlogMarkdownLayout from "./pages/blog/BlogMarkdownLayout";
import JourneyMarkdownLayout from "./pages/journey/JourneyMarkdownLayout";
import CaseStudyMarkdownLayout from "./pages/case-study/CaseStudyMarkdownLayout";

type PageType =
  | "home"
  | "projects"
  | "journey"
  | "journey_detail"
  | "case_study_detail"
  | "skills"
  | "contact"
  | "blog"
  | "blog_detail";

interface AppWrapperProps {
  page: PageType;
  blogSlug?: string;
  journeySlug?: string;
  children?: React.ReactNode;
  blogPosts?: any[];
  blogFrontmatter?: any;
  journeyFrontmatter?: any;
  caseStudyFrontmatter?: any;
  journeyPosts?: any[];
}

export default function AppWrapper({
  page,
  blogSlug,
  journeySlug,
  children,
  blogPosts,
  blogFrontmatter,
  journeyFrontmatter,
  caseStudyFrontmatter,
  journeyPosts,
}: AppWrapperProps) {
  return (
    <ThemeProvider>
      {/* Background color handled by global.css (body/html) to prevent flash */}
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main className="grow">
          {page === "home" && <HomePage blogPosts={blogPosts} />}
          {page === "projects" && <Projects />}
          {page === "blog" && <BlogPage blogPosts={blogPosts} />}
          {page === "blog_detail" &&
            (blogFrontmatter ? (
              <BlogMarkdownLayout frontmatter={blogFrontmatter}>
                {children}
              </BlogMarkdownLayout>
            ) : null)}
          {page === "journey" && <JourneyPage journeyPosts={journeyPosts} />}
          {page === "journey_detail" &&
            (journeyFrontmatter ? (
              <JourneyMarkdownLayout frontmatter={journeyFrontmatter}>
                {children}
              </JourneyMarkdownLayout>
            ) : null)}
          {page === "case_study_detail" &&
            (caseStudyFrontmatter ? (
              <CaseStudyMarkdownLayout frontmatter={caseStudyFrontmatter}>
                {children}
              </CaseStudyMarkdownLayout>
            ) : null)}
          {page === "skills" && <Skills />}
          {page === "contact" && <Contact />}
        </main>
        {page === "home" && <Footer />}
      </div>
    </ThemeProvider>
  );
}
