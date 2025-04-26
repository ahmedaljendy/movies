import { Component, input } from '@angular/core';
import { AllInterface } from '../../all-interface';

@Component({
  selector: 'app-general-card',
  imports: [],
  templateUrl: './general-card.component.html',
  styleUrl: './general-card.component.css',
})
export class GeneralCardComponent {
  movie = input<AllInterface>();

  get all() {
    return this.movie();
  }
}
