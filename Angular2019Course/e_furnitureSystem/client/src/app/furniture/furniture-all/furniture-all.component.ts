import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/intefaces/Furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {

  furnitures$: Observable<Furniture[]>;

  constructor(private furnitureService: FurnitureService, private tosstr:ToastrService) { }

  ngOnInit(): void {
    this.furnitures$ = this.furnitureService.all();
  }
}
