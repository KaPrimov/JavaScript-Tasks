import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../service/movies.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular$: Observable<Movie[]>;
  theater$: Observable<Movie[]>;
  popularMovies: Movie[] = [];
  inTheater:Movie[] = [];
  dramaMovies:Movie[] = [];
  kidsMovies:Movie[] = [];
  searchResult: Movie[];

  constructor(private moviesService: MoviesService) {
  }
  
  ngOnInit(): void {
    this.getPopularMovies();
    this.getInTheater();
    this.getDramas();
    this.getKids();
  }
  getDramas() {
    this.moviesService.getDramas().subscribe(data => this.dramaMovies = data);
  }

  getKids() {
    this.moviesService.getKids().subscribe(data => this.kidsMovies = data);
  }

  getPopularMovies() {
    this.moviesService.getPopular().subscribe(data => this.popularMovies = data);
  }

  getInTheater() {
    this.moviesService.getTheaters().subscribe(data => this.inTheater = data);
  }

  search(input): void {
    const query = input.query;

    this.moviesService
      .searchMovies(query)
      .subscribe(data => {
        this.searchResult = data.results;
      });
  }
}
