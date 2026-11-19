import React from "react";
import AppShell from "../AppShell";
import JourneyMarkdownLayout from "../pages/journey/JourneyMarkdownLayout";

export default function JourneyDetailIsland({
  frontmatter,
  children,
}: {
  frontmatter: any;
  children?: React.ReactNode;
}) {
  return (
    <AppShell>
      {frontmatter ? (
        <JourneyMarkdownLayout frontmatter={frontmatter}>
          {children}
        </JourneyMarkdownLayout>
      ) : null}
    </AppShell>
  );
}
