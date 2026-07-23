export interface Highlight {
  role: string;
  phase: string;
  title: string;
  description: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  url: string;
}

export const highlights: Highlight[] = [
  {
    role: "AI Engineer",
    phase: "Agustus 2026 - Januari 2027",
    title: "Asah led by Dicoding (Supported by GoTo)",
    description:
      "Accepted into ASAH program on the AI Engineer track. Continuing to elevate my AI development, MLOps, and scalable machine learning systems to industry standards.",
    badgeColor: "text-purple-500",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    url: "/journey/asah-ai-engineer-dicoding-goto",
  },
  {
    role: "AI Engineer",
    phase: "Februari 2026 - Juni 2026",
    title: "Coding Camp 2026 by DBS Foundation",
    description:
      "Got into Coding Camp 2026 powered by DBS Foundation and chose the AI Engineer track.",
    badgeColor: "text-blue-500",
    badgeBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/20",
    url: "/journey/dbs-coding-camp-ai-engineer",
  },
  {
    role: "Frontend Engineer",
    phase: "September 2025",
    title: "Finalist Hackaton x Amartha 2025",
    description:
      "My first hackathon — made it to Finalist Top 15 out of 150+ teams. Spent 24 hours building SocialCollateral AI as the Frontend Dev.",
    badgeColor: "text-purple-500",
    badgeBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/20",
    url: "/journey/hackathon-amaratha-finalist",
  },
];
