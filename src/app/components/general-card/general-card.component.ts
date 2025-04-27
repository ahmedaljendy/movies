import { Component, input } from '@angular/core';
import { AllInterface } from '../../all-interface';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-general-card',
  imports: [RouterLink],
  templateUrl: './general-card.component.html',
  styleUrl: './general-card.component.css',
})
export class GeneralCardComponent {
  movie = input<AllInterface>();
  constructor(private router: Router) {}

  get all() {
    return this.movie();
  }
  goToDetails(id: any) {
    this.router.navigate(['/all', Number(id)]);
  }
}
