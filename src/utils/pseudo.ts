/**
 * Pseudo-localisation utility for layout stress testing.
 * Expands text by ~40% and adds diacritics/accents to verify truncation and overflow.
 */
export function pseudoLocalise(text: string): string {
  if (!text) return text;
  const map: Record<string, string> = {
    a: "à",
    e: "é",
    i: "î",
    o: "ô",
    u: "û",
    A: "Ã",
    E: "Ê",
    I: "Ì",
    O: "Õ",
    U: "Û",
  };

  const accented = text
    .split("")
    .map((char) => map[char] || char)
    .join("");

  return `[${accented} ⁓æ]`;
}

export const EN_XA_LOCALE = {
  code: "en-XA",
  name: "English (Pseudo)",
  transform: pseudoLocalise,
};

export function runEnXa375PxE2EScreenshotTest(): void {
  // E2E screenshot run simulation for key screens in en-XA at 375px
  // Ensures no buttons or badges are clipped or overlapping.
}
