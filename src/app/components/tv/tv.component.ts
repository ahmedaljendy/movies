import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { TvInterface } from '../../all-interface';
import { TvCardComponent } from '../tv-card/tv-card.component';

@Component({
  selector: 'app-tv',
  imports: [TvCardComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css',
})
export class TvComponent {
  tvs!: TvInterface[];
  constructor(private _moviesService: MoviesService) {}
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this._moviesService.getTV().subscribe({
      next: (data) => (this.tvs = data.results),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Movies loaded:', this.tvs),
    });
  }
}
