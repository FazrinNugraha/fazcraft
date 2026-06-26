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
    phase: "PHASE : JUNE 2026",
    phaseColor: "text-purple-500",
    title: "Emigria",
    role: "AI ENGINEER ",
    status: "FEATURED",
    statusColor: "bg-purple-500",
    description:
      "Emigria is a multimodal AI platform that detects overseas job fraud, helping Indonesian migrant worker candidates quickly check job offers before trusting recruitment claims. As job opportunities spread through social media, chat apps, posters, and informal agents, candidates face an information gap - promises sound convincing, but official signals, real salary data, recruiter legitimacy, and safety indicators stay hard to verify.",
    tech: [
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Express.js",
      "TensorFlow",
      "Google Gemini",
      "Streamlit",
      "Neon Database",
      "Docker",
    ],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051484/EMI1_as3hwa.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051482/EMI2_cwotxu.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051482/EMI3_xitfvh.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051481/EMI4_onhgnk.png",
    ],
    sourceCode: "https://github.com/EMIGRIA",
    liveDemo: "https://www.emigria.my.id/",
    link: "#project-4",
    side: "left",
  },
  {
    id: 1,
    phase: "PHASE : AUGUST 2026",
    phaseColor: "text-emerald-500",
    title: "HireVision",
    role: "AI FULLSTACK ENGINEER",
    status: "COMPLETED",
    statusColor: "bg-emerald-500",
    description:
      "HireVision is a web based career decision support system designed to navigate the complex Jabodetabek job market. Powered by dual Random Forest Regressor models , it accurately predicts market salaries and rental housing costs. The platform integrates a Multiplicative Adjustment Factor for dynamic user profiling and leverages the Gemini API for personalized AI career consulting , seamlessly balancing personal financial planning with regional spatial job opportunities.",
    tech: [
      "TypeScript",
      "Python",
      "Tailwind",
      "FastAPI",
      "Google Gemini API",
      "Leaflet js",
      "Chart js",
      "OSRM (Open Source Routing Machine)",
      "Machine Learning",
      "Random Forest",
    ],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475382/hr1_qgx5cb.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475381/hr2_mrc4et.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475381/hr3_yl06tf.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475380/hr4_natprs.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475380/hr5_xt6zw6.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/v1782475380/hr6_xqxfjz.png",
    ],
    sourceCode: "https://github.com/FazrinNugraha/HireMapV2-fe",
    liveDemo: "https://www.emigria.my.id/",
    link: "#project-4",
    side: "left",
  },
  {
    id: 2,
    phase: "PHASE 4: MARCH 2026",
    phaseColor: "text-emerald-500",
    title: "SmartWealth",
    role: "AI FULLSTACK ENGINEER",
    status: "COMPLETED",
    statusColor: "bg-emerald-500",
    description:
      "A multi-asset investment portfolio tracker that brings stocks, crypto, mutual funds, and gold into one clean, unified dashboard, replacing the need to juggle multiple apps with a single real-time view of portfolio performance. Beyond tracking, the platform leverages AI to deliver personalized insights and stock price predictions, turning scattered financial data into clear, actionable investment guidance.",
    tech: [
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Google Gemini",
      "Google OAUTH 2.0",
      "Neon Database",
      "LightGBM",
      "Yahoo Finance API",
      "CoinGecko API",
    ],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051481/welt1_koyaiv.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051484/welt2_uxd3rw.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051483/welt3_zxuelb.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051483/welt4_asfrlb.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051483/wel5_bmsj5j.png",
    ],
    sourceCode: "https://github.com/FazrinNugraha/be-smartwealth",
    liveDemo: "https://fe-smartwealth.vercel.app/",
    link: "#project5",
    side: "right",
  },
  {
    id: 3,
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
    side: "left",
  },
  {
    id: 4,
    phase: "PHASE : OCT 2025",
    phaseColor: "text-emerald-500",
    title: "Learning Management System ",
    role: "FULLSTACK ENGINEER ",
    status: "COMPLETED",
    statusColor: "bg-emerald-500",
    description:
      "A modern web-based learning management platform that streamlines course management, learning materials, and student progress tracking through a secure multi-role architecture for Managers and Students. Managers can create, update, and preview courses and materials, supporting video and text content, organize courses into categories, and manage student enrollment—all backed by secure authentication and route protection for a clean, responsive experience.",
    tech: ["React", "Express js", "Mongo DB", "Node js"],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051485/LMS1_yutst9.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051485/LMS2_oekvkr.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051486/LMS3_dddqq3.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782051484/LMS4_rffldl.png",
    ],
    sourceCode:
      "https://github.com/FazrinNugraha/Learning-Management-System-Fe",
    liveDemo: "https://lms-mern-fe.vercel.app/",
    link: "#project-3",
    side: "right",
  },
  {
    id: 3,
    phase: "PHASE : DES 2025",
    phaseColor: "text-emerald-500",
    title: "Gluco Check",
    role: "FULLSTACK ENGINEER",
    status: "COMPLETED",
    statusColor: "bg-emerald-500",
    description:
      "GlucoCheck is an AI-powered web platform that provides personalized diabetes risk analysis through an accessible digital interface. Users complete a simple biodata form and health questionnaire covering lifestyle patterns, dietary habits, and physical activities. The AI engine then generates comprehensive risk assessments with detailed explanations in Bahasa Indonesia, categorizing users into risk levels while delivering personalized care recommendations.",
    tech: ["React", "Tailwind", "React-Query", "Groq-AI"],
    thumbnails: [
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782049835/glco1_nfrk6a.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782049834/glco2_g0e3xo.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782049834/glco4_iszih1.png",
      "https://res.cloudinary.com/dopoy3rcs/image/upload/q_auto/f_auto/v1782049835/glco3_whoo4v.png",
    ],
    sourceCode: "https://github.com/FazrinNugraha/GlucoCheck",
    liveDemo: "https://gluco-blue.vercel.app/",
    link: "#project-2",
    side: "left",
  },
];
