/**
 * FILE DATA: About Section (Bio Singkat, Bio Lengkap, & Featured Articles)
 * --------------------------------------------------------------------------
 * Tempat untuk mengubah teks biografi dan artikel pilihan pada Halaman Home.
 * Tanda **kata tebal** otomatis akan dirender tebal pada tampilan.
 */

export interface Article {
  title: string;
  date: string;
  description: string;
  url: string;
}

// 1. Bio Versi Awal (Tampilan Ringkas / Short Version)
export const shortBio: string[] = [
  "Hi, I'm Fazrin. I got into tech during **college**, mostly out of curiosity about what's actually going on behind the screen when you use an app. Starting from basic **frontend interfaces**, I moved into **backend and database architecture**, then into **full-stack development**. Along the way, I picked up a habit of thinking in terms of the **full software lifecycle**: understanding the problem first, designing around it, building it, then making sure it actually works before calling it done.",
  "That mindset carried over when I shifted my focus to **AI engineering**. I approach it stage by stage, starting with **data preprocessing pipelines** to get things analysis-ready, moving into training and refining **deep learning models**, then testing and finally deploying them as **machine learning API services** with **Docker** so they actually run outside a notebook. I try to stay clear in how I communicate and document each stage along the way, because at the end of the day, what I want to build is something **dependable** that holds up in everyday, real-world use.",
];

// 2. Bio Versi Lengkap (Tampilan Full Version saat tombol diklik)
export const fullBio = {
  paragraphs: [
    "My journey into technology began during my **university studies**, driven by genuine curiosity about how **software systems** actually work behind the screen. Instead of sticking to classroom theory, I started building **hands-on web projects** to understand core programming logic — and along the way, I picked up a habit of thinking in terms of the **full development lifecycle**: understanding the problem, designing around it, building it, then testing before calling it done. That mindset is what carried me from basic **frontend interfaces** into structured **backend database architecture** and **full-stack development workflows**.",
    "As I gained more confidence, I focused on building **complete web applications** to solve everyday user problems, following that same cycle from requirements to deployment. Working on practical projects taught me how to connect intuitive interfaces with functional **REST APIs** and manage data properly throughout each stage. Somewhere in that process, I got interested in how **intelligent algorithms** could make a standard, well-built web application significantly more capable.",
    "That curiosity pushed me to explore **applied machine learning** and test myself in team settings like **hackathons**, where the development cycle gets compressed into just a few days. Working with other developers under tight deadlines taught me how to take messy model outputs and turn them into clean, **responsive dashboard components** people could actually use. It also showed me that intelligent models only matter if they're properly integrated — designed, tested, and shipped — into software people can rely on.",
    "To formalize my shift into **AI engineering**, I went deeper into **end-to-end machine learning workflows**, treating each stage with the same rigor: building **automated data preprocessing pipelines**, training **deep learning architectures**, testing them properly, then deploying as containerized API services using **Docker**. That process is what let me connect my existing software engineering background directly to real, modern **AI implementation** instead of treating it as something separate.",
    "Through all of this, I've learned the value of patience, **clear communication**, and solid **technical documentation** at every stage of a project. I like learning by doing, trying new tools, and working through problems step by step rather than all at once. I'm still early in my career, but my focus stays the same: write straightforward code, work well with the people around me, and keep building **dependable, practical applications** people can actually use in everyday, real-world situations.",
  ],
};

// 3. Daftar Kartu Artikel Pilihan (Featured Articles)
export const featuredArticles: Article[] = [
  {
    title: "MERN Stack LMS Backend Architecture Breakdown",
    date: "Feb 23, 2026",
    description: "What I learned while building fullstack applications with MERN stack.",
    url: "/blog/building-real-world-projects",
  },
  {
    title: "Integration Payment Gateway Midtrans",
    date: "Mar 28, 2026",
    description: "A simple guide to integrating Midtrans payment gateway into your web application.",
    url: "/blog/integration-payment-gateway-midtrans",
  },
];
