import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  
  constructor(private furnitureService: FurnitureService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.furnitureService.create(this.form.value).subscribe((res: any) => {
      if (res.status !== 200) {
        this.toastr.error(res.message);
      } else {
        this.toastr.success(res.message);
      }
    })
  }

}
