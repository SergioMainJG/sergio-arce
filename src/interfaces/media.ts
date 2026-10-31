import type { Localized } from '../i18n/ui';

export interface Media {
  title: string;
  description: Localized;
  src: ImageMetadata;
  alt?: string;
  link: string;
}
