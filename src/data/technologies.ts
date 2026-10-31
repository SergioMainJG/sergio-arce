import type { TechGroup } from '~interfaces/tech';
import java from '~assets/icons/java.svg';
import javascript from '~assets/icons/javascript.svg';
import typescript from '~assets/icons/typescript.svg';
import astro from '~assets/icons/astro.svg';
import angular from '~assets/icons/angular.svg';
import encore from '~assets/icons/encore.svg';
import nestjs from '~assets/icons/nestjs.svg';
import solidjs from '~assets/icons/solidjs.svg';
import springboot from '~assets/icons/springboot.svg';
import mysql from '~assets/icons/mysql.svg';
import mongo from '~assets/icons/mongo.svg';
import postgresql from '~assets/icons/postgresql.svg';
import sqlite from '~assets/icons/sqlite.svg';
import docker from '~assets/icons/docker.svg';
import n8n from '~assets/icons/n8n.svg';
import digitalocean from '~assets/icons/digitalocean.svg';
import cloudflare from '~assets/icons/cloudflare.svg';
import gitlab from '~assets/icons/gitlab.svg';
import github from '~assets/icons/github.svg';

export const technologies: TechGroup[] = [
  {
    title: 'technologies.languages',
    techs: [
      { src: java, name: 'Java' },
      { src: javascript, name: 'JavaScript' },
      { src: typescript, name: 'TypeScript' },
    ],
  },
  {
    title: 'technologies.frameworks',
    techs: [
      { src: astro, name: 'Astro' },
      { src: angular, name: 'Angular' },
      { src: encore, name: 'Encore' },
      { src: nestjs, name: 'NestJS' },
      { src: solidjs, name: 'SolidJS' },
      { src: springboot, name: 'Spring Boot' },
    ],
  },
  {
    title: 'technologies.databases',
    techs: [
      { src: mysql, name: 'MySQL' },
      { src: mongo, name: 'MongoDB' },
      { src: postgresql, name: 'PostgreSQL' },
      { src: sqlite, name: 'SQLite' },
    ],
  },
  {
    title: 'technologies.platforms',
    techs: [
      { src: docker, name: 'Docker' },
      { src: n8n, name: 'n8n' },
      { src: digitalocean, name: 'DigitalOcean' },
      { src: cloudflare, name: 'Cloudflare' },
      { src: gitlab, name: 'GitLab' },
      { src: github, name: 'GitHub' },
    ],
  },
];
