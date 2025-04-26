import { Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent, title: 'All' },
  { path: 'movies', component: MoviesComponent, title: 'Movies' },
  { path: 'tv', component: TvComponent, title: 'TV' },
  { path: 'people', component: PeopleComponent, title: 'People' },
];
