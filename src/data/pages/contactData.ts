/**
 * FILE DATA: Halaman Contact
 * --------------------------------------------------------------------------
 * Tempat untuk mengubah email utama, pesan ajakan kontak, dan link sosial media.
 */

export interface ContactSocialLink {
  name: string;
  url: string;
  type: "github" | "instagram" | "linkedin";
}

// 1. Header Teks Utama & Email
export const contactHeaderData = {
  tagline: "Let's Talk",
  email: "nugrahafadzrin@gmail.com",
  subText: "Send me a message and I'll reply within a few days",
};

// 2. Daftar Tautan Sosial Media
export const socialMediaSectionData = {
  title: "Social Media",
  links: [
    {
      name: "Github",
      url: "https://github.com/FazrinNugraha",
      type: "github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nugrahafazrinn?igsh=MXdkeXluZHM0cnN6dA",
      type: "instagram",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
      type: "linkedin",
    },
  ] as ContactSocialLink[],
};
