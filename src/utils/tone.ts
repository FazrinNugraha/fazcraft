/**
 * Accent tones — the single mapping between content data and the
 * `.tone-*` utilities in global.css.
 *
 * Components never hardcode accent hex values: a tone resolves to
 * `--tone-*` variables that already differ per theme, so contrast stays
 * AA in both dark and light mode.
 */
export type Tone = "purple" | "blue" | "emerald" | "orange";

/** Legacy frontmatter accentColor hex → tone. */
const HEX_TO_TONE: Record<string, Tone> = {
  "#10b981": "emerald",
  "#a855f7": "purple",
  "#3b82f6": "blue",
  "#f97316": "orange",
};

/** Journey post `type` → tone. */
const JOURNEY_TYPE_TO_TONE: Record<string, Tone> = {
  LEARNING: "emerald",
  MILESTONE: "purple",
  ACHIEVEMENT: "blue",
};

export function resolveTone(accentColor?: string, fallback: Tone = "blue"): Tone {
  if (!accentColor) return fallback;
  return HEX_TO_TONE[accentColor.trim().toLowerCase()] ?? fallback;
}

export function toneFromJourneyType(type?: string): Tone {
  return JOURNEY_TYPE_TO_TONE[type?.toUpperCase() ?? ""] ?? "blue";
}

/** Class list for a tone, e.g. `toneClass("purple")` → "tone-purple". */
export function toneClass(tone: Tone): string {
  return `tone-${tone}`;
}

/**
 * Literal hex per tone, for third-party assets that cannot read CSS
 * variables (e.g. shields.io badge URLs). Never use for text contrast —
 * use the `.tone-*` utilities instead.
 */
const TONE_HEX: Record<Tone, string> = {
  purple: "A855F7",
  blue: "3B82F6",
  emerald: "10B981",
  orange: "F97316",
};

export function toneHex(tone: Tone): string {
  return TONE_HEX[tone];
}
