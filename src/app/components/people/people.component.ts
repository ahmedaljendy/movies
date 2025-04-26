import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { PeopleInterface } from '../../all-interface';
import { PersonCardComponent } from '../person-card/person-card.component';

@Component({
  selector: 'app-people',
  imports: [PersonCardComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  people!: PeopleInterface[];
  constructor(private _moviesService: MoviesService) {}
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this._moviesService.getPeople().subscribe({
      next: (data) => (this.people = data.results),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Movies loaded:', this.people),
    });
  }
}
