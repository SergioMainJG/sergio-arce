import { Component, OnInit } from '@angular/core';
import { CallToAction } from '../../components/call-to-action/call-to-action';
import { MyHobbies } from '../../components/my-hobbies/my-hobbies';
import { MyPresentation } from '../../components/my-presentation/my-presentation';
import { MyTechnologies } from '../../components/my-technologies/my-technologies';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [MyPresentation, MyTechnologies, CallToAction, MyHobbies],
})
export class Home {
  ngOnInit() { }
}
