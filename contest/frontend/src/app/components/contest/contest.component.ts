import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

export interface Contest {
  id: string;
  name: string;
  timing: string;
  company: string;
  rating: number;
  authors: string;
  status: string;
}

const ELEMENT_DATA: Contest[] = [
  {id:"aug124",name:"aug challenge - Dp course",timing:new Date().toLocaleString() ,company:"flipkart",rating:4.5,authors:"abc",status:"ongoing"},
  {id:"mayflip2021",name:"May challenge - bit manipulation , matrix multiplication",timing:new Date().toLocaleString(),company:"self",rating:4,authors:"adc",status:"upcoming"}
];

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {
  displayedColumns: string[] = [ "timing", "name", "company", "rating", "authors", "actions"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enterContest(id : string){
    let location = `page/contest/${id}`;
    this.router.navigate([location]);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
