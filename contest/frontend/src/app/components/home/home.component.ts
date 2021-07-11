import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path :any = {
    'home': "/home",
    'code': "/contest/list",
    'analytics': "/home",
    'article': "/home",
    'profile': "/home",
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  menuSelect(route:any) : void {
    this.router.navigate([this.path[route]]);
  }

}
