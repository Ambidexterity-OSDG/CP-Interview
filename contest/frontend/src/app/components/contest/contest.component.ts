import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {ContestService} from '../services/contest.service';

export interface Contest {
  id: string;
  name: string;
  start: string;
  company: string;
  rating: number;
  author: string;
  status: string;
  duration?: number;
  end?: string;
}


@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {
  ELEMENT_DATA: Contest[] = [];
  displayedColumns: string[] = [ "timing", "name", "company", "rating", "authors", "actions"];
  dataSource = new MatTableDataSource<Contest>();

  constructor(private router: Router, private contestService: ContestService) { }

  async ngOnInit() {
    const data1 = await this.contestService.getAllContest().toPromise();
    const data2 = await this.contestService.getAllContest('upcoming').toPromise();
    if(data1.data){
      this.ELEMENT_DATA = this.ELEMENT_DATA.concat(data1.data);
    }
    if(data2.data){
      this.ELEMENT_DATA = this.ELEMENT_DATA.concat(data2.data);
    }
    await this.updateTime();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 


  }

  async updateTime() {
    this.ELEMENT_DATA.forEach((data) => {
      console.log(data.start);
      data.start = new Date(data.start).toLocaleString();
      console.log(data.start);
      if(data.end) {
        data.end = new Date(data.end).toLocaleString();
      }  
    });
  }

 

  enterContest(id : string){
    let location = `page/contest/${id}`;
    this.router.navigate([location]);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // old approach
   // getData() {
  //   this.contestService.getAllContest().subscribe((data)=> {
  //     if(data) {
  //       this.ELEMENT_DATA = this.ELEMENT_DATA.concat(data.data);
  //       console.log(this.ELEMENT_DATA);
  //     }
  //   });
  //   this.contestService.getAllContest('upcoming').subscribe((data) => {
  //     if(data) {
  //       this.ELEMENT_DATA = this.ELEMENT_DATA.concat(data.data);
  //       console.log(this.ELEMENT_DATA);
  //     }
  //   })
  // }


}
