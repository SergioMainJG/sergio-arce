import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Tech, TechGroup } from '../my-technologies';

@Component({
  selector: 'technologies-table',
  imports: [NgOptimizedImage, TitleCasePipe],
  templateUrl: './technologies-table.html',
})
export class TechnologiesTable {
  technologiesGroups = input.required<TechGroup[]>();
}
