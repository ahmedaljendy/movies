import { Component, inject, input, OnInit, signal } from '@angular/core';
import { DetailsInterface, MoviesInterface } from '../../all-interface';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-datails',
  imports: [],
  templateUrl: './all-datails.component.html',
  styleUrl: './all-datails.component.css',
})
export class AllDatailsComponent implements OnInit {
  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  movie = signal<DetailsInterface | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMovies(Number(id));
    }
    // console.log(Number(id));
  }
  loadMovies(id: number) {
    this._moviesService.getMovieDetails(id).subscribe({
      next: (data) => this.movie.set(data as DetailsInterface),
      complete: () => console.log('Movies loaded:', this.movie),
    });
  }
}
