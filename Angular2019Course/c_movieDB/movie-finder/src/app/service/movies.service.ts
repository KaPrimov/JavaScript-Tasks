import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/Movie';
import { Observable } from 'rxjs';


const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=9fee6f959bf651cbfbe6cdf35414edc1';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

popularEndpoint = 'discover/movie?sort_by=popularity.desc';
theaterEndpoint = 'discover/movie?primary_release_date.gte=2019-02-01&primary_release_date.lte=2020-09-21';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL+ this.popularEndpoint + API_KEY);
  }

  getTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + this.theaterEndpoint + API_KEY);
  }
}
