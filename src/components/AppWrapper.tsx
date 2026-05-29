import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./common/Header";
import Footer from "./common/Footer";

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import("./pages/HomePage"));
const Projects = lazy(() => import("./projects"));
const JourneyPage = lazy(() => import("./pages/JourneyPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

//Lazy load for markdown layouts
const BlogMarkdownLayout = lazy(() => import("./pages/blog/BlogMarkdownLayout"));
const JourneyMarkdownLayout = lazy(() => import("./pages/journey/JourneyMarkdownLayout"));
const CaseStudyMarkdownLayout = lazy(() => import("./pages/case-study/CaseStudyMarkdownLayout"));

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
          <Suspense fallback={<div className="min-h-screen"></div>}>
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
          </Suspense>
        </main>
        {page === "home" && <Footer />}
      </div>
    </ThemeProvider>
  );
}
