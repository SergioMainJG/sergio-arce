import { Component, input } from '@angular/core';
import { Tech } from '../my-technologies';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'techonologies-section',
  imports: [NgOptimizedImage, TitleCasePipe],
  templateUrl: './techonologies-section.html',
})
export class TechonologiesSection {
  title = input.required<string>();
  technologies = input.required<Tech[]>();
}
