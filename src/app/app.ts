import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar, Footer, RouterOutlet],
})
export class App {
  protected readonly title = signal('sergioarweb');
}
