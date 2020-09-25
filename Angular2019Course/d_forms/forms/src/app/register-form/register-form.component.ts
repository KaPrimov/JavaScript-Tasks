import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements AfterViewInit {

  @ViewChild('form') form: NgForm;
  
  extensions:string[] = ['+971', '+359', '+972', '+198', '+701'];

  professions:string[] = ['Designer', 'Manager', 'Accounting']

  selectedProfession: string;
  selectedExtension: string;

  constructor() { 
    this.selectedProfession = this.professions[0];
    this.selectedExtension = this.extensions[0];
  }

  ngAfterViewInit(): void {
  }

  onSubmit() {
    this.form.resetForm({
      extension: this.extensions[0],
      profession: this.professions[0]
    });
  }

}
