import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface PhotoCarouselProps {
  thumbnails: string[];
}

export default function PhotoCarousel({ thumbnails }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";



  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isFullscreen]);

  if (!thumbnails || thumbnails.length === 0) {
    return (
      <div
        className="h-[200px] sm:h-[250px] md:h-[320px] rounded-lg overflow-hidden flex items-center justify-center "
        style={{
          border: "1px solid var(--border-color)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="text-center">
          <div
            className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--border-color)" }}
          >
            <span className="text-4xl">📸</span>
          </div>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Project Screenshot
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            Coming soon
          </p>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
  };

  // Helper to dynamically optimize Cloudinary URLs
  const getOptimizedImageUrl = (url: string, width = 800) => {
    if (!url) return "";
    
    // Check if the URL is hosted on Cloudinary
    if (url.includes("res.cloudinary.com")) {
      // Split URL at '/upload/' to insert dynamic optimization parameters
      const parts = url.split("/upload/");
      if (parts.length === 2) {
        // Insert auto-format (f_auto), auto-quality (q_auto), and max width (w_800)
        return `${parts[0]}/upload/f_auto,q_auto,w_${width},c_limit/${parts[1]}`;
      }
    }
    return url;
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div
        className="relative h-[200px] sm:h-[250px] md:h-[320px] rounded-lg overflow-hidden cursor-pointer transition-colors"
        style={{
          border: "1px solid var(--border-color)",
          backgroundColor: "var(--bg-card)",
        }}
        onClick={() => setIsFullscreen(true)}
      >
        <img
          src={getOptimizedImageUrl(thumbnails[currentIndex], 800)}
          alt={`Project screenshot ${currentIndex + 1}`}
          decoding="async"
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        {thumbnails.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {thumbnails.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-medium z-20">
              {currentIndex + 1} / {thumbnails.length}
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-[60] p-4 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              aria-label="Close fullscreen"
            >
              <X className="w-7 h-7 text-white" strokeWidth={3} />
            </button>

            {/* Fullscreen Image */}
            <img
              src={getOptimizedImageUrl(thumbnails[currentIndex], 1920)}
              alt={`Project screenshot ${currentIndex + 1}`}
              className="max-w-95vw max-h-95vh object-contain"
            />

            {/* Navigation Buttons - Fullscreen */}
            {thumbnails.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                {/* Dots Indicator - Fullscreen */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {thumbnails.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentIndex ? "bg-white" : "bg-white/40"
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Counter - Fullscreen */}
                <div className="absolute bottom-6 right-6 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium">
                  {currentIndex + 1} / {thumbnails.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
