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

// 1. Data utama identitas & judul pada Hero Section
export const heroInfo = {
  subHeadline:
    "Building software I’d actually want to use, from the **engineering to the product side**. Turning ideas into products that **people actually use**.",
  name: "Muhamad Fazrin Nugraha",
  tagline: "Exploring, Building, Scaling...",
  roleSubtitle: "Software Developer × Product Development",
  location: "Indonesia",
  avatarUrl: "/profilebrwn.png",
};

// 2. Tautan kontak & sosial media khusus tampilan mobile (Let's Connect)
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

// 3. Tautan tombol aksi (CTA Buttons)
export const ctaButtonsData = {
  projects: {
    label: "View Selected Projects",
    url: "/projects",
  },
  resume: {
    label: "View Resume",
    url: "/files/CV_MUHAMAD_FAZRIN_NUGRAHA.pdf",
    filename: "CV MUHAMAD FAZRIN NUGRAHA.pdf",
  },
};
