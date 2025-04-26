import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjQwOGUwYWI5ZDM1NGE1NzI0ODg0MTc2NGMwMGQ5NCIsIm5iZiI6MTc0NTY3MDE0My41OCwic3ViIjoiNjgwY2NmZmYxNjM1ZDI5MThjODBjYzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yoF2sl7vVT-N3XbfpOmd3v8fe7rZrxbhRLHLsip19SI',
    });

    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      { headers }
    );
  }
  getMovies(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjQwOGUwYWI5ZDM1NGE1NzI0ODg0MTc2NGMwMGQ5NCIsIm5iZiI6MTc0NTY3MDE0My41OCwic3ViIjoiNjgwY2NmZmYxNjM1ZDI5MThjODBjYzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yoF2sl7vVT-N3XbfpOmd3v8fe7rZrxbhRLHLsip19SI',
    });

    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      { headers }
    );
  }
  getTV(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjQwOGUwYWI5ZDM1NGE1NzI0ODg0MTc2NGMwMGQ5NCIsIm5iZiI6MTc0NTY3MDE0My41OCwic3ViIjoiNjgwY2NmZmYxNjM1ZDI5MThjODBjYzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yoF2sl7vVT-N3XbfpOmd3v8fe7rZrxbhRLHLsip19SI',
    });

    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
      { headers }
    );
  }
  getPeople(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjQwOGUwYWI5ZDM1NGE1NzI0ODg0MTc2NGMwMGQ5NCIsIm5iZiI6MTc0NTY3MDE0My41OCwic3ViIjoiNjgwY2NmZmYxNjM1ZDI5MThjODBjYzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yoF2sl7vVT-N3XbfpOmd3v8fe7rZrxbhRLHLsip19SI',
    });

    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/person/day?language=en-US',
      { headers }
    );
  }
}
