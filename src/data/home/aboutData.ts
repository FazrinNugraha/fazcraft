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
  "Hi, I'm Fazrin. A **Full-Stack Developer** transitioning into **AI & Machine Learning Engineer**.",
  "I'm a 6th-semester Informatics student passionate about bridging the gap between functional web interfaces and intelligent systems. From building **MERN-stack applications** to developing AI-driven solutions like **GlucoCheck**, I focus on how systems process data to solve complex problems. Currently specializing in **Deep Learning and MLOps** at the **DBS Foundation Coding Camp** to build scalable, production-ready AI.",
  "Today, as part of the **DBS Foundation Coding Camp (AI Engineer Path)**, I leverage my web development background to specialize in **Deep Learning and MLOps**, aiming to build systems that are both scalable and smart.",
];

// 2. Bio Versi Lengkap (Tampilan Full Version saat tombol diklik)
export const fullBio = {
  title: "My Journey into Tech",
  paragraphs: [
    "My journey into tech started with a leap of faith: a two-week bootcamp at **RevoU**. I came in with zero coding experience, but after learning the basics of web development, I was hooked—I didn't just want to consume technology, I wanted to build it. To escape \"tutorial hell,\" I dove straight into **full-stack development**. I built a complete **Learning Management System** from scratch using the **MERN stack**, which taught me that the fastest way to grow is by tackling the \"unknowns\" head-on.",
    "As I got more comfortable with web development, I started wondering how AI could solve real-world problems. This curiosity led me to build **GlucoCheck**, an AI-powered web app for personalized diabetes risk assessments in Bahasa Indonesia. This project was a major turning point; it showed me that AI is incredibly powerful, but only when it is wrapped in an intuitive, user-friendly experience.",
    "To push my limits, I joined a **24-hour national hackathon**, where my team built **SocialCollateral AI** and proudly made it to the **Top 15 out of 150+ teams**. Translating complex AI data into simple dashboards under extreme pressure completely changed my trajectory. I realized my true passion lies in building intelligent systems, which led me to the AI path at **Coding Camp 2026 by DBS Foundation**, where I'm now learning to train and deploy production-ready AI models.",
    "Through all of this, I've learned that good engineering is about more than just shipping features—it demands clarity. I carefully document my work because context matters, whether for a teammate or for myself six months down the line. I'm early in my career, but my focus is clear: I want to build things that matter and share the lessons I learn along the way.",
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
