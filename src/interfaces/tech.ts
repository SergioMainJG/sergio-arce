import type { UiKey } from '../i18n/ui';

export interface Tech {
  src: ImageMetadata;
  name: string;
}

export interface TechGroup {
  title: UiKey;
  techs: Tech[];
}
