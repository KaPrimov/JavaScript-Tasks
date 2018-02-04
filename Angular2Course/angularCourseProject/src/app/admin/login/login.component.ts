import { Component, ViewContainerRef } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  password1: string;

  constructor(private userSVC: UserService, private router: Router, private tostr: ToastsManager) {
  }

  login() {
    this.userSVC.login(this.email, this.password1).subscribe((data) => {
      sessionStorage.setItem('uid', data.uid);
      this.tostr.success(`User with email: ${this.email} has logged in`)
      this.userSVC.verifyUser();
    }, err => {
      this.tostr.error('Unsuccessfull')
    })
  }

  signup() {
    this.router.navigate(['/admin/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}