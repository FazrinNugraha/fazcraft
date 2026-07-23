import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { highlights } from "./highlightsData";

export default function RecentActivities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const isDesktop = window.innerWidth >= 768;
      const scrollAmount = isDesktop
        ? scrollRef.current.clientWidth / 2 + 8
        : scrollRef.current.clientWidth;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="decisions"
      className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16 scroll-mt-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Top divider & Header */}
      <div
        className="pt-12 mb-8 flex justify-between items-center"
        style={{ borderTop: "2px solid var(--border-color)" }}
      >
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Latest Highlights
        </h2>

        {/* Arrow Navigation — right side */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous highlight"
            className={`p-1.5 rounded-lg border transition-all duration-200 ${
              canScrollLeft
                ? "hover:scale-105 active:scale-95 cursor-pointer opacity-100"
                : "opacity-30 cursor-not-allowed"
            }`}
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next highlight"
            className={`p-1.5 rounded-lg border transition-all duration-200 ${
              canScrollRight
                ? "hover:scale-105 active:scale-95 cursor-pointer opacity-100"
                : "opacity-30 cursor-not-allowed"
            }`}
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Overflow-hidden wrapper — hides cards beyond viewport until swiped */}
      <div className="overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pt-1 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {highlights.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="group block flex-shrink-0 w-full md:w-[calc(50%-8px)] snap-start"
            >
              <div
                className="p-5 sm:p-6 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg relative overflow-hidden flex h-full flex-col justify-between"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Date + Badge Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[10px] font-medium uppercase tracking-[0.2em]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.phase}
                      </span>
                      <div
                        className={`inline-flex items-center text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md border ${item.badgeColor} ${item.badgeBorder}`}
                        style={{ backgroundColor: item.badgeBg }}
                      >
                        {item.role}
                      </div>
                    </div>

                    {/* Highlight Title */}
                    <h3
                      className="text-xl font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-blue-400"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed text-justify"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div
                  className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] relative z-10"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="group-hover:text-white transition-colors duration-300 font-semibold">
                    View Case Study
                  </span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full border bg-transparent transition-colors duration-300 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)]"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}