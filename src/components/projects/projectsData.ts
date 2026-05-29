export interface Project {
  id: number;
  phase: string;
  phaseColor: string;
  title: string;
  role: string;
  status: "FEATURED" | "ONGOING" | "COMPLETED";
  statusColor: string;
  description: string;
  problem?: string;
  solution?: string;
  tech: string[];
  thumbnails: string[];
  sourceCode: string;
  liveDemo: string;
  link: string;
  side: "left" | "right";
}

export const projects: Project[] = [
  {
    id: 1,
    phase: "PHASE : SEPT 2025",
    phaseColor: "text-purple-500",
    title: "SocialCollateral AI",
    role: "FRONTEND ENGINEER",
    status: "FEATURED",
    statusColor: "bg-purple-500",
    description:
      'We introducing the Hackathon x Amartha 2025 team project called "Jaringan Amanah" is a system specialized to transforms qualitative social assets into quantitative Group Trust Scores using Social Graph Engine. This solution integrates advanced graph analysis, NLP powered by Google Gemini, and Computer Vision to calculate comprehensive trust metrics.',
    tech: [
      "TypeScript",
      "Tailwind",
      "React",
      "Sigma js",
      "Chart js",
      "Python",
      "FastAPI",
      "Google Cloud",
      "Google Gemini",
    ],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1780028582/amarta_czia87.jpg",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1780028582/amarta2_gajjee.jpg",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1780028582/amarta3_glzfaq.jpg",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1780028585/mvp1_ni1v15.jpg",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1780028585/mvp_2_cdrku0.jpg",
    ],
    sourceCode: "https://github.com/SocialCollateralAI",
    liveDemo: "https://socialcollateral-landingpage.vercel.app/",
    link: "#project-1",
    side: "right",
  },
  {
    id: 3,
    phase: "PHASE : DES 2025",
    phaseColor: "text-emerald-500",
    title: "Gluco Check",
    role: "FULL-STACK DEVELOPER",
    status: "COMPLETED",
    statusColor: "bg-emerald-500",
    description:
      "GlucoCheck is an AI-powered web platform that provides personalized diabetes risk analysis through an accessible digital interface. Users complete a simple biodata form and health questionnaire covering lifestyle patterns, dietary habits, and physical activities. The AI engine then generates comprehensive risk assessments with detailed explanations in Bahasa Indonesia, categorizing users into risk levels while delivering personalized care recommendations.",
    tech: ["React", "Tailwind", "React-Query", "Groq-AI"],
    thumbnails: [
      "/project 2/glu1.jpg",
      "/project 2/glu2.jpg",
      "/project 2/glu3.jpg",
      "/project 2/glu5.jpg",
      "/project 2/glu6.jpg",
    ],
    sourceCode: "https://github.com/FazrinNugraha/GlucoCheck",
    liveDemo: "https://gluco-blue.vercel.app/",
    link: "#project-2",
    side: "left",
  },
  {
    id: 2,
    phase: "PHASE : AUG 2025",
    phaseColor: "text-orange-500",
    title: "Learning Management System ",
    role: "SENIOR ENGINEER · 2025",
    status: "ONGOING",
    statusColor: "bg-orange-500",
    description:
      "Led migration from monolith to microservices architecture, reducing deployment time by 75%",
    problem:
      "Monolithic architecture membuat deployment lambat (2 jam per release) dan team dependencies tinggi. Satu bug bisa down seluruh sistem.",
    solution:
      "Gradual migration ke microservices dengan strangler pattern. Implement service mesh untuk observability. Deployment time turun ke 30 menit, zero-downtime deployments achieved.",
    tech: ["React", "Express js", "Mongo DB", "Node js"],
    thumbnails: [],
    sourceCode:
      "https://github.com/FazrinNugraha/Learning-Management-System-Fe",
    liveDemo: "#",
    link: "#project-3",
    side: "right",
  },
  {
    id: 4,
    phase: "PHASE 4: MAY 2024",
    phaseColor: "text-orange-500",
    title: "API Gateway Redesign",
    role: "BACKEND ENGINEER · 2024",
    status: "ONGOING",
    statusColor: "bg-orange-500",
    description:
      "Redesigned API gateway to handle 10M+ requests daily with improved caching and rate limiting",
    problem:
      "API gateway menjadi bottleneck dengan response time >500ms pada peak hours. Rate limiting tidak efektif dan caching strategy buruk.",
    solution:
      "Redesign dengan Redis cluster untuk distributed caching, implement token bucket algorithm untuk rate limiting, dan optimize routing logic. Response time turun ke <100ms.",
    tech: ["Node.js", "Redis", "AWS", "Nginx"],
    thumbnails: [],
    sourceCode: "#",
    liveDemo: "#",
    link: "#project-4",
    side: "left",
  },
];
