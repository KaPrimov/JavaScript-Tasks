import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PokemonService } from '../../services/pokemon/pokemon.service'

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css'],
  providers: [
    PokemonService
  ]
})
export class PokeTableComponent implements OnInit {

  searchValue: Subject<any> = new Subject<any>();
  pokeData;
  fucusedPokemon;


  constructor(private pokemonService: PokemonService) {
    this.pokemonService.waitNameInput(this.searchValue)
      .subscribe(e => {
        this.pokeData = e;
      });
  }

  ngOnInit() {
  }

  pokemonSearchRequest(event) {
    this.searchValue.next(event.target.value);
  }
}
