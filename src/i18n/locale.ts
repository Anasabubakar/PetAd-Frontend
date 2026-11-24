import { pseudoLocalize } from './pseudo';

export function resolveLocale(search: string, development: boolean): 'en' | 'en-XA' {
  return development && new URLSearchParams(search).get('locale') === 'en-XA' ? 'en-XA' : 'en';
}

export const locale = resolveLocale(
  typeof window === 'undefined' ? '' : window.location.search,
  import.meta.env.DEV,
);

export function localize(message: string): string {
  return locale === 'en-XA' ? pseudoLocalize(message) : message;
}
