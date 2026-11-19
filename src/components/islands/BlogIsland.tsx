import React from "react";
import AppShell from "../AppShell";
import BlogPage from "../pages/BlogPage";

export default function BlogIsland({ blogPosts }: { blogPosts?: any[] }) {
  return (
    <AppShell>
      <BlogPage blogPosts={blogPosts} />
    </AppShell>
  );
}
