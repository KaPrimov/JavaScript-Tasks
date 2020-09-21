import { Component, Input, OnInit } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input('movie-info') movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
