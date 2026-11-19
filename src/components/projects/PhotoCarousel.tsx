import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  closeTopLayer,
  isPointerOutsideRect,
  supportsClosedBy,
} from "../../utils/dialog";

interface PhotoCarouselProps {
  thumbnails: string[];
  isPriority?: boolean;
  title?: string;
}

// Helper to normalize and optimize Cloudinary URLs cleanly without duplicate transform segments
function getOptimizedImageUrl(url: string, width = 800): string {
  if (!url) return "";

  if (url.includes("res.cloudinary.com")) {
    const parts = url.split("/upload/");
    if (parts.length === 2) {
      // Strip any pre-existing q_auto / f_auto transform prefix before adding normalized params
      const cleanedRest = parts[1].replace(/^(?:(?:q_auto|f_auto|c_limit|w_\d+)[,/])+/, "");
      return `${parts[0]}/upload/f_auto,q_auto,w_${width},c_limit/${cleanedRest}`;
    }
  }
  return url;
}

function getCloudinarySrcSet(url: string): string | undefined {
  if (!url || !url.includes("res.cloudinary.com")) return undefined;
  return [480, 800, 1200]
    .map((w) => `${getOptimizedImageUrl(url, w)} ${w}w`)
    .join(", ");
}

export default function PhotoCarousel({
  thumbnails,
  isPriority = false,
  title = "Project",
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openFullscreen = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.removeAttribute("data-closing");
    setIsFullscreen(true);
    dialog.showModal();
  }, []);

  const closeFullscreen = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) {
      setIsFullscreen(false);
      return;
    }
    await closeTopLayer(dialog);
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      if (event.cancelable) {
        event.preventDefault();
        void closeFullscreen();
      }
    };

    const handleClose = () => {
      dialog.removeAttribute("data-closing");
      setIsFullscreen(false);
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);

    // Fallback light-dismiss for browsers without `closedby="any"` (e.g. Safari)
    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const targetEl = contentRef.current || dialog;
      return isPointerOutsideRect(e, targetEl);
    };

    const handlePointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        void closeFullscreen();
      }
      pressedOutside = false;
    };

    if (!supportsClosedBy()) {
      dialog.addEventListener("pointerdown", handlePointerDown);
      dialog.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
      if (!supportsClosedBy()) {
        dialog.removeEventListener("pointerdown", handlePointerDown);
        dialog.removeEventListener("pointerup", handlePointerUp);
      }
    };
  }, [closeFullscreen]);

  if (!thumbnails || thumbnails.length === 0) {
    return (
      <div
        className="w-full aspect-video sm:aspect-[16/10] rounded-lg overflow-hidden flex items-center justify-center"
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
            <span className="text-4xl" aria-hidden="true">📸</span>
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

  const currentThumb = thumbnails[currentIndex];
  const srcSet = getCloudinarySrcSet(currentThumb);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div
        className="relative w-full aspect-video rounded-lg overflow-hidden transition-colors"
        style={{
          border: "1px solid var(--border-color)",
          backgroundColor: "var(--bg-card)",
          maxHeight: "360px",
        }}
      >
        <button
          type="button"
          onClick={openFullscreen}
          className="w-full h-full block cursor-zoom-in p-0 border-0 bg-transparent"
          aria-label={`View ${title} screenshot ${currentIndex + 1} fullscreen`}
        >
          <img
            src={getOptimizedImageUrl(currentThumb, 800)}
            srcSet={srcSet}
            sizes="(max-width: 768px) 100vw, 896px"
            alt={`${title} screenshot ${currentIndex + 1}`}
            width={1600}
            height={900}
            loading={isPriority && currentIndex === 0 ? "eager" : "lazy"}
            fetchPriority={isPriority && currentIndex === 0 ? "high" : undefined}
            decoding="async"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Navigation Buttons */}
        {thumbnails.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-white" aria-hidden="true" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {thumbnails.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                    idx === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                  aria-current={idx === currentIndex ? "true" : undefined}
                />
              ))}
            </div>

            {/* Counter */}
            <div
              className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-medium z-20 pointer-events-none"
              aria-live="polite"
            >
              {currentIndex + 1} / {thumbnails.length}
            </div>
          </>
        )}
      </div>

      {/* Native Top-Layer Fullscreen Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        {...({ closedby: "any" } as any)}
        aria-label={`${title} screenshot viewer`}
        className="lightbox-dialog"
      >
        <div
          ref={contentRef}
          className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            type="button"
            autoFocus
            onClick={() => void closeFullscreen()}
            className="absolute top-6 right-6 z-20 p-3.5 bg-neutral-800/90 hover:bg-neutral-700 rounded-full transition-colors cursor-pointer"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" strokeWidth={2.5} aria-hidden="true" />
          </button>

          {/* Fullscreen Image (only loaded when dialog is opened) */}
          {isFullscreen && (
            <img
              src={getOptimizedImageUrl(currentThumb, 1920)}
              alt={`${title} screenshot ${currentIndex + 1}`}
              decoding="async"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-md"
            />
          )}

          {/* Navigation Buttons - Fullscreen */}
          {thumbnails.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800/90 hover:bg-neutral-700 rounded-full transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-8 h-8 text-white" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800/90 hover:bg-neutral-700 rounded-full transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-8 h-8 text-white" aria-hidden="true" />
              </button>

              {/* Dots Indicator - Fullscreen */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {thumbnails.map((_, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
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
      </dialog>
    </div>
  );
}
