/**
 * FILE DATA: Hero Section (Tampilan Paling Atas Halaman Home)
 * --------------------------------------------------------------------------
 * File ini menampung seluruh teks, status, kuot, dan tautan tombol pada Hero Section.
 * Jika Anda ingin mengubah teks judul, sub-judul, atau tombol, edit di file ini.
 */

export interface SocialLink {
  label: string;
  highlight: string;
  url: string;
  type: "github" | "linkedin" | "email";
}

export interface StatItem {
  label: string;
  value: string;
  isBadge?: boolean;
}

// 1. Data utama identitas & judul pada Hero Section
export const heroInfo = {
  headline: "I like building things that work",
  subHeadline:
    "Building practical solutions that blend engineering, design, and innovation. Transforming ideas into products that people actually use.",
  name: "Muhamad Fazrin Nugraha",
  shortName: "Fazrin Nugraha",
  tagline: "Exploring, Building, Scaling...",
  roleSubtitle: "Fullstack Developer × Applied AI",
  location: "Indonesia",
  statusBanner: "Available for remote, hybrid, or on-site roles",
  avatarUrl: "/pp6.webp", // WebP 3KB (sebelumnya pp6.png = 6MB!)
};

// 2. Tag keahlian utama (Badge yang muncul di desktop)
export const heroRoleTags: string[] = [
  "FULLSTACK ENGINEER",
  "AI & ML ENGINEER",
];

// 3. Tautan kontak & sosial media khusus tampilan mobile (Let's Connect)
export const mobileConnectData = {
  title: "Let's Connect",
  description:
    "I'm always open to discussing new opportunities, collaborating on innovative projects, or sharing thoughts on engineering and AI. Let's start a conversation!",
  links: [
    {
      label: "I ship code on",
      highlight: "GitHub",
      url: "https://github.com/FazrinNugraha",
      type: "github",
    },
    {
      label: "Let's connect on",
      highlight: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
      type: "linkedin",
    },
    {
      label: "Drop me a message on",
      highlight: "Email",
      url: "/contact",
      type: "email",
    },
  ] as SocialLink[],
};

// 4. Tautan tombol aksi (CTA Buttons)
export const ctaButtonsData = {
  projects: {
    label: "View Selected Projects",
    url: "/projects",
  },
  resume: {
    label: "View Resume",
    url: "/files/CV%20MUHAMAD%20FAZRIN%20NUGRAHA%20WORD.pdf",
    filename: "CV MUHAMAD FAZRIN NUGRAHA.pdf",
  },
};

// 5. Data kartu profil sebelah kanan (Khusus tampilan Desktop)
export const profileCardData = {
  quote:
    '"I build AI-powered software that solves real problems - taking ideas all the way to production, with systems that ship reliably and work for actual users."',
  stats: [
    { label: "Role", value: "Engineer" },
    { label: "Status", value: "Open to Work", isBadge: true },
    { label: "Focus", value: "Applied AI" },
  ] as StatItem[],
};
