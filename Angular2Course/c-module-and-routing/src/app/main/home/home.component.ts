import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectTeam(event) {
    sessionStorage.setItem('faction', event.target.innerHTML.toLowerCase())
    this.router.navigate(['/attack'])
  }
}
