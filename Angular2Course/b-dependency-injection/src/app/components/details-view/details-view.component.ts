import { Component, OnInit } from '@angular/core';

import { DetailsService } from '../../services/details/details.service'

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  pokemonOnFocus;
  pokeImage;

  constructor(private detailsService: DetailsService) {
    this.detailsService.pokemonReceived$.subscribe(data => {
      this.pokemonOnFocus = data;
      this.detailsService.getPokemonImage(data.id, data.ename).subscribe(image => {
        console.log(image);
        this.pokeImage = image;
      })
    })
   }

  ngOnInit() {
  }
}
