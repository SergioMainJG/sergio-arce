import { Component } from '@angular/core';
import { TechonologiesSection } from './techonologies-section/techonologies-section';
import { TechnologiesTable } from './technologies-table/technologies-table';

export interface Tech {
  src: string;
  alt: string;
  name: string;
}

export interface TechGroup {
  title: string;
  techs: Tech[];
}

const iconPath = '/assets/icons';

@Component({
  selector: 'my-technologies',
  imports: [TechonologiesSection, TechnologiesTable],
  templateUrl: './my-technologies.html',
})
export class MyTechnologies {
  languages: Tech[] = [
    { src: `${iconPath}/java.svg`, alt: 'Java', name: 'java' },
    { src: `${iconPath}/javascript.svg`, alt: 'javascript', name: 'javascript' },
    { src: `${iconPath}/typescript.svg`, alt: 'typescript', name: 'typescript' },
  ];

  frameworks: Tech[] = [
    { src: `${iconPath}/astro.svg`, alt: 'Astro', name: 'astro' },
    { src: `${iconPath}/angular.svg`, alt: 'Angular', name: 'angular' },
    { src: `${iconPath}/encore.svg`, alt: 'Encore', name: 'encore' },
    { src: `${iconPath}/nestjs.svg`, alt: 'NestJS', name: 'nestjs' },
    { src: `${iconPath}/solidjs.svg`, alt: 'SolidJS', name: 'solidjs' },
    { src: `${iconPath}/springboot.svg`, alt: 'SpringBoot', name: 'springboot' },
  ];

  databases: Tech[] = [
    { src: `${iconPath}/mysql.svg`, alt: 'MySQL', name: 'mysql' },
    { src: `${iconPath}/mongo.svg`, alt: 'Mongo', name: 'mongo' },
    { src: `${iconPath}/postgresql.svg`, alt: 'PostgreSQL', name: 'postgresql' },
    { src: `${iconPath}/sqlite.svg`, alt: 'SQLite', name: 'sqlite' },
  ];

  platforms: Tech[] = [
    { src: `${iconPath}/docker.svg`, alt: 'Docker', name: 'docker' },
    { src: `${iconPath}/n8n.svg`, alt: 'n8n', name: 'n8n' },
    { src: `${iconPath}/digitalocean.svg`, alt: 'digitalocean', name: 'digitalocean' },
    { src: `${iconPath}/cloudflare.svg`, alt: 'cloudflare', name: 'cloudflare' },
    { src: `${iconPath}/gitlab.svg`, alt: 'gitlab', name: 'gitlab' },
    { src: `${iconPath}/github.svg`, alt: 'github', name: 'github' },
  ];
  technologies: TechGroup[] = [
    { title: 'lenguajes', techs: this.languages },
    { title: 'frameworks', techs: this.frameworks },
    { title: 'bases de datos ', techs: this.databases },
    { title: 'plataformas ', techs: this.platforms },
  ];
}
