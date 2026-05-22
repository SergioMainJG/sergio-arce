import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { MyPresentation } from './home/components/my-presentation/my-presentation';
import { CallToAction } from './home/components/call-to-action/call-to-action';
import { MyHobbies } from './home/components/my-hobbies/my-hobbies';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar, MyPresentation, CallToAction, MyHobbies, Footer],
})
export class App {
  protected readonly title = signal('sergioarweb');
}
