import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators/'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Movie from '../models/Movie';


const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=9fee6f959bf651cbfbe6cdf35414edc1';
const API_KEY_ALT = '?api_key=9fee6f959bf651cbfbe6cdf35414edc1';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  popularEndpoint = 'discover/movie?sort_by=popularity.desc';
  theaterEndpoint = 'discover/movie?primary_release_date.gte=2019-02-01&primary_release_date.lte=2020-09-21';
  dramasEndpoint = 'discover/movie?with_genres=18&sort_by=popularity.desc';
  kidsEndpoint = 'discover/movie?certification_country=US&certification.lte=G&with_genres=16&sort_by=popularity.desc';
  
  constructor(private http: HttpClient) { }
  
  getPopular(): Observable<any> {
    return this.mapResponse(this.http.get<any>(BASE_URL+ this.popularEndpoint + API_KEY));
  }
  
  getTheaters(): Observable<any> {
    return this.mapResponse(this.http.get<any>(BASE_URL + this.theaterEndpoint + API_KEY));
  }
  
  getDramas(): Observable<any> {
    return this.mapResponse(this.http.get<any>(BASE_URL + this.dramasEndpoint + API_KEY));
  }
  
  getKids(): Observable<any> {
    return this.mapResponse(this.http.get<any>(BASE_URL + this.kidsEndpoint + API_KEY));
  }
  
  private mapResponse(response: Observable<any>) : Observable<any> {
    return response.pipe(map(r => r.results))
  }
  
  getMovie(id: string): Observable<any> {
    console.log(id)
    return this.http.get<any>(BASE_URL + `movie/${id}` + API_KEY_ALT).pipe(map(data => {
      data.genres = data.genres.map(g => g.name)
      return data;
    }))
  }

  searchMovies(query: string) {
    return this.http.get<any>(BASE_URL + 'search/movie' + API_KEY_ALT + `&query=${query}`);
  }
  
}
