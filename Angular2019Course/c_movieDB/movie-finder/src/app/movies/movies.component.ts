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

  constructor(private moviesService: MoviesService) {
  
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getInTheater();
  }

  getPopularMovies() {
    this.moviesService.getPopular().subscribe(data => {
      this.popularMovies = data.results});
  }

  getInTheater() {
    this.moviesService.getTheaters().subscribe(data => this.inTheater = data.results);
  }

}
