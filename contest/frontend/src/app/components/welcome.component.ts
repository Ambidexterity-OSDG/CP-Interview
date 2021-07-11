import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  path :any = {
    'home': "/page",
    'code': "/page/contest/list",
    'analytics': "home",
    'article': "home",
    'profile': "home",
  };
  atHome:boolean;
  constructor(private router: Router) { 
    this.atHome = !window.location.href.includes('/page/');
  }

  ngOnInit(): void {
  }
  
  menuSelect(route:any) : void {
    if(route=='home'){
      this.atHome =true;
    } else {
      this.atHome = false;
    }
    this.router.navigate([this.path[route]]);
  }

}
