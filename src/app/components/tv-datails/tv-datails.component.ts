import { Component, signal } from '@angular/core';
import { TVDetailsInterface } from '../../all-interface';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-datails',
  imports: [],
  templateUrl: './tv-datails.component.html',
  styleUrl: './tv-datails.component.css',
})
export class TvDatailsComponent {
  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  show = signal<TVDetailsInterface | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadTV(Number(id));
    }
    // console.log(Number(id));
  }
  loadTV(id: number) {
    this._moviesService.getTVDetails(id).subscribe({
      next: (data) => this.show.set(data as TVDetailsInterface),
      complete: () => console.log('Details loaded:', this.show),
    });
  }
}
