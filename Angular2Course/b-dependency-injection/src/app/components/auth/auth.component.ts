import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [
    AuthService
  ]
})
export class AuthComponent implements OnDestroy {
  
  payload: object = {};
  sub$;
  constructor(private authService: AuthService) { }

  collectAuthData(event): void {
    this.payload[event.target.name] = event.target.value;
  }

  login(): void {
    this.sub$ = this.authService.loginAction(this.payload).subscribe(data => {
      if (!sessionStorage.getItem('authToken')) {
        if (data.authtoken) {
          sessionStorage.setItem('authToken', data.authtoken);

        }
      }
    });
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
