import React from "react";
import AppShell from "../AppShell";
import JourneyPage from "../pages/JourneyPage";

export default function JourneyIsland({ journeyPosts }: { journeyPosts?: any[] }) {
  return (
    <AppShell>
      <JourneyPage journeyPosts={journeyPosts} />
    </AppShell>
  );
}
