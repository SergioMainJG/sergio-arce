import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export const getLang = (locale: string | undefined): Lang =>
  locale && locale in languages ? (locale as Lang) : defaultLang;

export const useTranslations = (lang: Lang) => (key: UiKey) => ui[lang][key];

// Builds a URL for `path` (without locale prefix) in the given language.
export const localizePath = (lang: Lang, path = '') => getRelativeLocaleUrl(lang, path);

// Strips the locale prefix from a pathname: `/en/story/` -> `story`.
export const getPathWithoutLocale = (pathname: string) => {
  const [first, ...rest] = pathname.split('/').filter(Boolean);
  const segments = first && first in languages ? rest : [first, ...rest].filter(Boolean);
  return segments.join('/');
};
