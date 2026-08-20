/**
 * FILE DATA: Halaman Tech Stack / Skills
 * --------------------------------------------------------------------------
 * Tempat untuk menambah, mengubah, atau menghapus teknologi/skill yang Anda kuasai.
 * Terbagi per kategori (Frontend, Backend, Databases, ML & AI, Tools).
 */

export interface TechItem {
  name: string;
  icon?: string;
  isGeminiIcon?: boolean;
}

export interface TechCategory {
  category: string;
  techs: TechItem[];
}

// 1. Teks Judul & Sub-judul Halaman Skills
export const skillsHeader = {
  title: "Tech Stack",
  subtitle: "Proficient in modern technologies for building scalable web applications",
};

// 2. Daftar Kategori & Item Teknologi
export const getTechStackCategories = (isDark: boolean): TechCategory[] => [
  {
    category: "Frontend",
    techs: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Astro.js",
        icon: isDark
          ? "https://astro.build/assets/press/astro-icon-light.svg"
          : "https://astro.build/assets/press/astro-icon-dark.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "shadcn/ui",
        icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      },
    ],
  },
  {
    category: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },
  {
    category: "Databases",
    techs: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    category: "ML and AI",
    techs: [
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Hugging Face",
        icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
      {
        name: "Google Gemini API",
        isGeminiIcon: true,
      },
      {
        name: "Computer Vision",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
    ],
  },
  {
    category: "Tools & Others",
    techs: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
];
