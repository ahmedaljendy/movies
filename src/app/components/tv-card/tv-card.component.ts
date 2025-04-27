import { Component, input } from '@angular/core';
import { TvInterface } from '../../all-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-card',
  imports: [RouterLink],
  templateUrl: './tv-card.component.html',
  styleUrl: './tv-card.component.css',
})
export class TvCardComponent {
  tv = input<TvInterface>();
  get t() {
    return this.tv();
  }
}
