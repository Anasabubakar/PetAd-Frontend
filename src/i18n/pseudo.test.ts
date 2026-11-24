import { describe, expect, it } from 'vitest';
import { resolveLocale } from './locale';
import { pseudoLocalize } from './pseudo';

describe('development pseudo locale', () => {
  it('accents and expands visible text by approximately 40 percent', () => {
    const message = '404 - Page Not Found';
    const translated = pseudoLocalize(message);
    expect(translated).toContain('404 -');
    expect(translated).not.toContain('Page Not Found');
    expect(translated.length).toBe(Math.ceil(message.length * 1.4));
  });

  it('leaves whitespace intact and permits en-XA only in development', () => {
    expect(pseudoLocalize(' ')).toBe(' ');
    expect(resolveLocale('?locale=en-XA', true)).toBe('en-XA');
    expect(resolveLocale('?locale=en-XA', false)).toBe('en');
    expect(resolveLocale('', true)).toBe('en');
  });
});
