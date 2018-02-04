import { Component, OnInit } from '@angular/core';
import { UserService } from '../admin/adminShared/user.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div class="top-bar-title nav-menu"><a [routerLink]="['']">GigaByte Gaming Company</a></div>
                    <div>
                        <ul class="menu">
                            <li *ngIf = "theUser" class="nav-menu"><a [routerLink]="['/cart']">Cart</a></li>
                            <li class="nav-menu"><a [routerLink]="['/shop']">Shop</a></li>
                            <li *ngIf="isAdmin" class="nav-menu"><a [routerLink]="['/admin']">Admin Area</a></li>
                            <li *ngIf = "theUser" class="nav-menu"><a (click)="logout()">Logout</a></li>
                            <li *ngIf = "theUser" class="admin-menu"><a>{{theUser}} Logged in</a></li>
                            <li *ngIf = "!theUser" class="nav-menu"><a [routerLink]="['/admin/login']">Login</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent implements OnInit {

    theUser: string;
    isAdmin: boolean;
    constructor(private userSVC: UserService, private toastr: ToastsManager, private router: Router) {}
    ngOnInit() {
        this.theUser = this.userSVC.loggedInUser;
        this.isAdmin = this.userSVC.isAdmin() || this.userSVC.isModerator();
    }

    logout() {
        this.userSVC.logout().subscribe(() => {
            this.toastr.success('Logged out!');
            this.theUser='';
            this.router.navigate(['']);
        });
    }
}