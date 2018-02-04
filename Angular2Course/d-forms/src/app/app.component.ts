import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { DublicateCheck } from './validateEmail';
import { PasswordValidator } from './validatePasswords'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  register: FormGroup;

  constructor(private fb: FormBuilder, private dc: DublicateCheck) {

  }

  ngOnInit(): void {
    this.register = this.fb.group({
      mail : ['', [Validators.required, Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),
      this.checkMail.bind(this)]],
      name: ['', [Validators.required]],
      auth: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validator: PasswordValidator.MatchPassword
      }),
      address: ['', [Validators.required]],
      city: ['',[Validators.required]],
      country: ['',[Validators.required]],
      zip: ['',[]],
      mobile: ['', []]
    })
  }

  checkMail(email) {
    return this.dc.calidateMail(email.value) ? null : {duplicate: true};
  }

  submit(a, b) {
    console.log(a);
    console.log(b);
  }
}
