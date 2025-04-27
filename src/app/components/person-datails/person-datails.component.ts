import { Component, signal } from '@angular/core';
import { PeopleDetailsInterface } from '../../all-interface';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-person-datails',
  imports: [],
  templateUrl: './person-datails.component.html',
  styleUrl: './person-datails.component.css',
})
export class PersonDatailsComponent {
  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  person = signal<PeopleDetailsInterface | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPeople(Number(id));
    }
    // console.log(Number(id));
  }
  loadPeople(id: number) {
    this._moviesService.getPeopleDetails(id).subscribe({
      next: (data) => this.person.set(data as PeopleDetailsInterface),
      complete: () => console.log('Details loaded:', this.person),
    });
  }
}
