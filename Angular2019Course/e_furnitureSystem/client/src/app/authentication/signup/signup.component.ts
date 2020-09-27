import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthResponse } from 'src/app/intefaces/AuthResponse';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }


  signUp() {
    this.authService
      .register(this.registerForm.value)
      .subscribe((data: AuthResponse) => {
        this.authService.saveToken(data.token);
        this.toastr.success(data.message);
        this.router.navigate([ '/signin' ]);
      });
  }

}
