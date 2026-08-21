import React from "react";
import { Github, Instagram, Linkedin, Mail, Rss } from "lucide-react";
import { footerData } from "../../data/common/footerData";

// Custom Icon X (Twitter)
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Icon WhatsApp
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper render ikon sosial media
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "instagram":
        return <Instagram size={16} />;
      case "whatsapp":
        return <WhatsAppIcon size={16} />;
      case "mail":
        return <Mail size={16} />;
      case "x":
        return <XIcon size={16} />;
      case "rss":
        return <Rss size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="transition-colors duration-300 pb-8 sm:pb-12"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        {/* Garis Pemisah Atas */}
        <div
          className="pt-12 sm:pt-16"
          style={{ borderTop: "2px solid var(--border-color)" }}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-8">
            {/* Kolom Kiri: Brand & Deskripsi */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
              <div>
                <h2
                  className="text-base font-bold tracking-tight mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {footerData.brandName}
                </h2>
                <p
                  className="text-xs sm:text-sm max-w-md leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {footerData.description}
                </p>
              </div>

              {/* Deretan Ikon Sosial Media & Judul ELSEWHERE */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {footerData.socialTitle || "Elsewhere"}
                </p>
                <div className="flex items-center gap-2">
                  {footerData.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target={social.url.startsWith("http") || social.url.startsWith("https") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        color: "var(--text-secondary)",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {renderSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Tautan Navigasi (Pages & More) */}
            <div className="md:col-span-5 lg:col-span-4 grid grid-cols-2 gap-6">
              {footerData.navSections.map((section) => (
                <div key={section.title}>
                  <h3
                    className="text-xs sm:text-sm font-semibold mb-2 tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          target={link.isExternal ? "_blank" : "_self"}
                          rel={link.isExternal ? "noopener noreferrer" : undefined}
                          className="transition-colors duration-200 inline-flex items-center hover:translate-x-0.5 py-2 px-1 -mx-1 min-h-[44px]"
                          style={{ color: "var(--text-secondary)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--text-primary)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--text-secondary)";
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Garis Pembatas Bawah & Copyright */}
          <div
            className="pt-6 text-xs"
            style={{
              borderTop: "1px solid var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            {/* Hak Cipta */}
            <p>© {currentYear} {footerData.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
