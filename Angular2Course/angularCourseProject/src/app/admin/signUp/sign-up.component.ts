import { Component, ViewContainerRef } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';


@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;
  emailFail:boolean = false;

  constructor(private userSVC: UserService, private router: Router, private tostr: ToastsManager) {
  }

  signUp() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((this.password1 !== this.password2) || this.password1.length < 6) {
      this.passwordFail = true;
    } else if (!regex.test(this.email)) {
      this.emailFail = true;
    } else {
      this.passwordFail = false;
      this.emailFail = false;
      this.userSVC.register(this.email, this.password1).subscribe(() => {
        this.tostr.success(`User with email: ${this.email} has logged in`)
        this.userSVC.verifyUser();
      }, err => {
        this.tostr.error('Unsuccessfull')
      })
      this.userSVC.verifyUser();
    }
  }

  cancel() {
    this.router.navigate(['/admin/login']);
  }

}
