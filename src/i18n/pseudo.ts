const accents: Record<string, string> = {
  a: 'á', b: 'ƀ', c: 'ç', d: 'ď', e: 'ë', f: 'ƒ', g: 'ğ', h: 'ĥ',
  i: 'ï', j: 'ĵ', k: 'ķ', l: 'ľ', m: 'ɱ', n: 'ñ', o: 'ö', p: 'þ',
  q: 'ɋ', r: 'ř', s: 'š', t: 'ţ', u: 'ü', v: 'ṽ', w: 'ŵ', x: 'ẋ',
  y: 'ý', z: 'ž',
};

/** Expand a static message to expose cramped layouts during development. */
export function pseudoLocalize(message: string): string {
  if (!message.trim()) return message;
  const accented = message.replace(/[a-z]/gi, (letter) => {
    const lower = letter.toLowerCase();
    return letter === lower ? accents[lower] : accents[lower].toUpperCase();
  });
  const expansion = Math.max(0, Math.ceil(message.length * 0.4) - 2);
  return `［${accented}${'·'.repeat(expansion)}］`;
}
