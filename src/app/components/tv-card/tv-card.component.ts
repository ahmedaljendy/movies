import { Component, input } from '@angular/core';
import { TvInterface } from '../../all-interface';

@Component({
  selector: 'app-tv-card',
  imports: [],
  templateUrl: './tv-card.component.html',
  styleUrl: './tv-card.component.css',
})
export class TvCardComponent {
  tv = input<TvInterface>();
  get t() {
    return this.tv();
  }
}
