import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-success-attack',
  templateUrl: './success-attack.component.html',
  styleUrls: ['./success-attack.component.css']
})
export class SuccessAttackComponent implements OnInit {
  team: string;
  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.team = this.activateRoute.snapshot.params['faction']
  }

  ngOnInit() {
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  chooseOther(): void {
    this.router.navigate(['attack']);
  }

}
