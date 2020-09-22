import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import MovieInfo from '../models/MovieInfo';
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-details-info',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie$: Observable<MovieInfo>;
  movieId: string;
  movie: MovieInfo;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.movieId = route.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.movie$ = this.moviesService.getMovie(this.movieId);
    this.movie$.subscribe(m => this.movie = m)
  }

}
