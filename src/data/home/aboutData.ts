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
  "Hi, I'm Muhamad Fazrin Nugraha, an **Informatics graduate** focused on **software engineering** and **product development**. I got into tech because I was curious about **how apps actually work behind the scenes**, and I learned best by **building projects from start to finish**. Whether creating **simple operational tools** for non-technical users or building under a **24-hour hackathon clock**, I've learned that good engineering only works when the product is **easy to use** and **fits naturally into people's routines**.",
  "As I explored **AI engineering** through my **independent study**, my view of software development grew even broader. Instead of treating AI as a separate field, I focus on building **custom models** and **integrating them directly into practical applications**, making sure they are **tested**, **clear**, and **ready for real users**. At the end of the day, I bring together **solid engineering** and **practical product thinking** to ship **reliable software people can actually depend on**.",
];

// 2. Bio Versi Lengkap (Tampilan Full Version saat tombol diklik)
export const fullBio = {
  paragraphs: [
    "Hi, I'm Muhamad Fazrin Nugraha, an **Informatics graduate** focused on **software engineering** and **product development**. I got into tech because I was curious about **how apps actually work behind the scenes**, and I learned best by **building projects from start to finish**. Some of my earliest real-world experience came from creating **internal tools** for a family-run aluminum and glass business and a local tutoring center. The people using them weren't technical — they just needed a simple way to handle **invoices, track finances, and manage schedules**. Seeing them use those tools daily taught me something important: good engineering only works when the product is **easy to use** and **fits naturally into people's routines**.",
    "I carried that approach into a **24-hour national hackathon**, where my team built **SocialCollateral AI**, a **microfinance trust-scoring platform**, and finished in the **Top 15 out of more than 150 teams**. With only a day to build, we had to be **selective about every feature** and focus strictly on what mattered most to the user. Turning complex scoring logic into a **clear, straightforward interface** showed me how much **good product flow and usability** matter — especially when time is tight.",
    "As I explored **AI engineering** through my **independent study**, my view of software development grew even broader. Instead of treating AI as a separate field, I focused on building **custom models** and **integrating them directly into practical applications**. Working on an **overseas job fraud detection app** made one thing clear: **an accurate model is only half the job**. What truly makes a product valuable is designing it for **trust, clarity, and reliability** — making sure everything is **properly tested, integrated, and ready for real users**.",
    "Lately, I've been working on **HireVision**, a **career and living-cost navigator** built for the **Jabodetabek job market**. Many job seekers struggle to judge a salary offer once rent, location, and everyday expenses come into play. Building HireVision brings together both sides of what I enjoy: **solid engineering behind the scenes** and **practical product thinking** that turns scattered data and custom models into **clear insights** people can use to make better decisions.",
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
