import { Component, OnInit } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
 })
 
export class AdminMenuComponent implements OnInit { 
  theUser: string;
  
  constructor( private userSVC: UserService, private router: Router, private toastr:ToastsManager ){}

  ngOnInit(){
    this.theUser = this.userSVC.loggedInUser;
  }

  logout(){
    this.userSVC.logout().subscribe(() => {
      this.toastr.success("Successfully logged out!");
      this.router.navigate(['']);
      this.theUser='';
    }, () => {
      this.toastr.error("Error in the logout");
    });
  }
}
