import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-real-home',
  templateUrl: './real-home.component.html',
  styleUrls: ['./real-home.component.css']
})
export class RealHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  attack(event) {
    const team = event.target.innerHTML.toLowerCase();
    this.router.navigate(["attacking/" + team]);
  }
}
