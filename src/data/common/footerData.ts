/**
 * FILE DATA: Footer (Konten & Tautan Navigasi Footer)
 * --------------------------------------------------------------------------
 * File ini menampung data judul brand, deskripsi singkat, ikon sosial media,
 * kategori tautan navigasi (Pages & More), serta teks hak cipta.
 */

export interface FooterLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface FooterSocial {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "whatsapp" | "mail";
}

export const footerData = {
  // 1. Identitas Brand & Deskripsi
  brandName: "Let's Work Together",
  description:
    "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",

  // 2. Judul & Daftar Ikon Sosial Media
  socialTitle: "Elsewhere",
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/FazrinNugraha",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/nugrahafazrinn?igsh=MXdkeXluZHM0cnN6dA",
      icon: "instagram",
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/6289636507448",
      icon: "whatsapp",
    },
    {
      label: "Email",
      url: "/contact",
      icon: "mail",
    },
  ] as FooterSocial[],

  // 3. Kolom Navigasi
  navSections: [
    {
      title: "Pages",
      links: [
        { label: "Home", url: "/" },
        { label: "Skills", url: "/skills" },
        { label: "Projects", url: "/projects" },
        { label: "Journey", url: "/journey" },
        { label: "Blog", url: "/blog" },
      ] as FooterLink[],
    },
    {
      title: "More",
      links: [
        {
          label: "Resume",
          url: "/files/CV%20MUHAMAD%20FAZRIN%20NUGRAHA%20WORD.pdf",
          isExternal: true,
        },
        { label: "Contact", url: "/contact" },
        {
          label: "GitHub",
          url: "https://github.com/FazrinNugraha",
          isExternal: true,
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/muhamad-fazrin-nugraha-968733333/",
          isExternal: true,
        },
      ] as FooterLink[],
    },
  ],

  // 4. Baris Bawah (Copyright)
  copyrightText: "Fazrin Nugraha. All rights reserved.",
};
