import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab : any[];
  atHome: boolean;
  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private router: Router) {
    this.atHome = true;
    this.tab = ["CP Interview", "Contests","Login"];
  }
  clickEvent(event: string){
    if(event=="CP Interview"){
      this.atHome = true;
    } else {
      this.atHome = false;
    }
  }
}
