import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../movies.service';
import { AllInterface } from './../../all-interface';
import { GeneralCardComponent } from '../general-card/general-card.component';

@Component({
  selector: 'app-all',
  imports: [GeneralCardComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  movies!: AllInterface[];
  constructor(private _moviesServies: MoviesService) {}
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this._moviesServies.getAll().subscribe({
      next: (data) => (this.movies = data.results),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Movies loaded:', this.movies),
    });
  }
}
