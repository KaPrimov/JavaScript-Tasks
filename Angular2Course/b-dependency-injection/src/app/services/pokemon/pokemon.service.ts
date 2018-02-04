import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/distinctUntilChanged'

import { Observable } from 'rxjs/Observable'

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  waitNameInput(e) {
    return e.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(x => this.getPokemons(x))
  }

  getPokemons(pokemonName) {
    return this.httpClient.get('http://localhost:5000/pokedex?pokename=' + pokemonName)
  }
}
