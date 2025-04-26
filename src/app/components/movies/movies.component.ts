import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { MoviesInterface } from './../../all-interface';
import { GeneralCardComponent } from '../general-card/general-card.component';

@Component({
  selector: 'app-movies',
  imports: [GeneralCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies!: MoviesInterface[];
  constructor(private _moviesService: MoviesService) {}
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this._moviesService.getMovies().subscribe({
      next: (data) => (this.movies = data.results),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Movies loaded:', this.movies),
    });
  }
}
