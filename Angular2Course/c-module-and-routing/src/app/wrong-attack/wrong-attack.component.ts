import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wrong-attack',
  templateUrl: './wrong-attack.component.html',
  styleUrls: ['./wrong-attack.component.css']
})
export class WrongAttackComponent implements OnInit {
  
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
