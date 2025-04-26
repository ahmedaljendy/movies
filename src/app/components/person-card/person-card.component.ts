import { Component, input } from '@angular/core';
import { PeopleInterface } from '../../all-interface';

@Component({
  selector: 'app-person-card',
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
})
export class PersonCardComponent {
  person = input<PeopleInterface>();
  get p() {
    return this.person();
  }
}
