import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from '../../services/details/details.service'

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent {
  @Input() pokemon;
  constructor(private detailsService: DetailsService) { }

  select(data) {
    let id = data.id
    this.detailsService.elevatePokemonData(data);
  }
}
