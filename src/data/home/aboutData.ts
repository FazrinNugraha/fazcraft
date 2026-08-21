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
  "Hi, I'm Fazrin. My journey into technology began during my **university studies**, driven by a genuine curiosity about how **software systems** operate behind the screen. Progressing from basic **frontend interfaces** to structured **backend database architectures** and **full-stack web development**, I developed a passion for building **complete, functional applications**.",
  "To formalize my transition into **AI engineering**, I focus on building **automated data preprocessing pipelines**, training **deep learning architectures**, and deploying **machine learning API services** using **Docker**. Grounded in **clear communication** and solid **technical documentation**, my goal is to steadily build **dependable, practical applications** for everyday real-world use.",
];

// 2. Bio Versi Lengkap (Tampilan Full Version saat tombol diklik)
export const fullBio = {
  paragraphs: [
    "My journey into technology began during my **university studies**, driven by a genuine curiosity about how **software systems** operate behind the screen. Instead of limiting myself to classroom theory, I started building **hands-on web projects** to understand core programming logic, steadily progressing from basic **frontend interfaces** to structured **backend database architectures** and **full-stack development** workflows.",
    "As I gained more confidence, I focused on developing **complete web applications** to address everyday user requirements. Working on practical software solutions taught me how to connect intuitive user interfaces with functional **REST APIs** and manage data effectively. Throughout this process, I became interested in how **intelligent algorithms** could make standard web applications significantly more capable and practical.",
    "This curiosity motivated me to explore **applied machine learning** and test my abilities in team environments like **hackathons**. Collaborating with other developers under tight deadlines helped me learn how to turn complex model outputs into clean, **responsive dashboard components**. It showed me that intelligent models are most valuable when integrated seamlessly into **well-engineered, user-focused software applications**.",
    "To formalize my transition into **AI engineering**, I focused on learning **end-to-end machine learning workflows** more deeply. I practiced building **automated data preprocessing pipelines**, training **deep learning architectures**, and deploying models as containerized API services using **Docker**. This step enabled me to connect my existing software engineering background directly with practical, modern **artificial intelligence implementations**.",
    "Throughout my journey, I have learned the value of patience, **clear communication**, and solid **technical documentation**. I enjoy learning by doing, exploring new technologies, and solving technical problems step by step. While I am still early in my professional career, my focus remains steady: writing straightforward code, collaborating with supportive teams, and steadily building **dependable, practical applications** for everyday real-world use today.",
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
