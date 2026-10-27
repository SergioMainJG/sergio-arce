import type { Localized } from '../i18n/ui';

export interface Podcast {
  title: string;
  description: Localized;
  src: ImageMetadata;
  link: string;
}
