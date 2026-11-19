import React from "react";
import AppShell from "../AppShell";
import BlogMarkdownLayout from "../pages/blog/BlogMarkdownLayout";

export default function BlogDetailIsland({
  frontmatter,
  children,
}: {
  frontmatter: any;
  children?: React.ReactNode;
}) {
  return (
    <AppShell>
      {frontmatter ? (
        <BlogMarkdownLayout frontmatter={frontmatter}>
          {children}
        </BlogMarkdownLayout>
      ) : null}
    </AppShell>
  );
}
