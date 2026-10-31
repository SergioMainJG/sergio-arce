import type { Localized } from '../i18n/ui';

export interface Project {
  name: string;
  description: Localized;
  stack: string[];
  repos: { label: string; href: string }[];
  demo?: string;
  team?: boolean;
}
