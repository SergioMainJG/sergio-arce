import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

export const getPostLang = (post: Post): Lang => {
  const lang = post.id.split('/')[0];
  if (!lang || !(lang in languages)) throw new Error(`Post "${post.id}" is not inside a language folder`);
  return lang as Lang;
};

export const getPostSlug = (post: Post) => post.id.split('/').slice(1).join('/');

export const getPostPath = (post: Post) => `blog/${getPostSlug(post)}`;

const isPublished = (post: Post) => import.meta.env.DEV || !post.data.draft;

export const getPosts = async (lang: Lang) =>
  (await getCollection('blog', (post) => getPostLang(post) === lang && isPublished(post))).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

export const getBlogStaticPaths = async (lang: Lang) =>
  (await getPosts(lang)).map((post) => ({ params: { slug: getPostSlug(post) }, props: { post } }));

export const getPostTranslations = async (post: Post) => {
  const translations: Partial<Record<Lang, string>> = { [getPostLang(post)]: getPostPath(post) };
  const { translationKey } = post.data;
  if (!translationKey) return translations;

  const siblings = await getCollection(
    'blog',
    (other) => other.data.translationKey === translationKey && isPublished(other),
  );
  for (const sibling of siblings) translations[getPostLang(sibling)] = getPostPath(sibling);
  return translations;
};

const WORDS_PER_MINUTE = 200;

export const getReadingTime = (post: Post) =>
  Math.max(1, Math.round((post.body ?? '').split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));

const dateLocales: Record<Lang, string> = { es: 'es-MX', en: 'en-US' };

export const formatDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(dateLocales[lang], { dateStyle: 'long', timeZone: 'UTC' }).format(date);
