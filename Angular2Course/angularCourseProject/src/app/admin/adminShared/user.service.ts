import { Injectable, ViewContainerRef, SkipSelf, Host } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import config from '../config/admin-users.config';


@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor(private router: Router) {
        const config = {
            apiKey: "AIzaSyBXw91w978UUBMuKF7SgDq1caOJ58RU1XY",
            authDomain: "gamestore-38ee0.firebaseapp.com",
            databaseURL: "https://gamestore-38ee0.firebaseio.com",
            projectId: "gamestore-38ee0",
            storageBucket: "gamestore-38ee0.appspot.com",
            messagingSenderId: "126931761808"
        };
        firebase.initializeApp(config);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { 
            sessionStorage.setItem('uid', this.authUser.uid);
            if (this.isAdmin() || this.isModerator()) {
                return true;
            }
            this.router.navigate(['/admin/login']);
            return false;
        }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string): Observable<any> {
        return Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(email, password));
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            if (this.isAdmin() || this.isModerator()) {
                this.router.navigate(['/admin']);
            } else {
                this.router.navigate(['']);
            }
        }
    }

    login(loginEmail: string, loginPassword: string): Observable<any> {
        return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword));
    }

    logout(): Observable<any> {
        this.userLoggedIn = false;
        sessionStorage.clear();
        this.loggedInUser = '';
        return Observable.fromPromise(firebase.auth().signOut());
    }

    isAdmin(): boolean {
        return config.admins.indexOf(sessionStorage.getItem('uid')) > -1
    }

    isModerator(): boolean {
        return config.moderators.indexOf(sessionStorage.getItem('uid')) > -1
    }
}
