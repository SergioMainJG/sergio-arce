import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar, Footer, RouterOutlet],
})
export class App {
  protected readonly title = signal('sergioarweb');
}
