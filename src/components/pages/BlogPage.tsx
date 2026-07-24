import React from "react";
import BlogSection from "../home/BlogSection";
import { useTheme } from "../../context/ThemeContext";

interface BlogPageProps {
  blogPosts?: any[];
}

export default function BlogPage({ blogPosts }: BlogPageProps) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          Articles
        </h2>
        <p
          className="mb-4 max-w-3xl mx-auto text-center text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Thoughts on software development, AI, and lessons from building
          real-world projects. Just a developer writing about what he builds.
          And the lessons that come with it.
        </p>
      </div>
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}
