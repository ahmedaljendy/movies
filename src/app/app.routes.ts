import { Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { PeopleComponent } from './components/people/people.component';
import { AllDatailsComponent } from './components/all-datails/all-datails.component';
import { TvDatailsComponent } from './components/tv-datails/tv-datails.component';
import { PersonDatailsComponent } from './components/person-datails/person-datails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent, title: 'All' },
  { path: 'all/:id', component: AllDatailsComponent },
  { path: 'movies', component: MoviesComponent, title: 'Movies' },
  { path: 'movie/:id', component: AllDatailsComponent },
  { path: 'tv', component: TvComponent, title: 'TV' },
  { path: 'tv/:id', component: TvDatailsComponent },
  { path: 'people', component: PeopleComponent, title: 'People' },
  { path: 'person/:id', component: PersonDatailsComponent },
];
