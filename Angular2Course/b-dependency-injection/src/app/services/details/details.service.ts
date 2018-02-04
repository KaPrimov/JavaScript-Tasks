import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class DetailsService {

  private pokemonSource = new Subject<any>();

  pokemonReceived$ = this.pokemonSource.asObservable();
  
  constructor(private httpClient: HttpClient) { }

  elevatePokemonData(data) {
    this.pokemonSource.next(data);
  }

  getPokemonImage(id, name) {
    return this.httpClient.get(`http://localhost:5000/img?path=${id}${name}.png`, {
      headers: new HttpHeaders().set('Content-Type', 'image/png').set('Authorization', sessionStorage.getItem('authToken'))        
    } 
  )
  
  }

}
