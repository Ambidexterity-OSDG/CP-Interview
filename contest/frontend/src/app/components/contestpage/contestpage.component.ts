import { Component, OnInit } from '@angular/core';
interface question {
  queId: string;
  queContest: string;
  queName: string;
  status?: number;
};

interface langOption {
  codingLanguage: string;
  extension: string;
};

@Component({
  selector: 'app-contestpage',
  templateUrl: './contestpage.component.html',
  styleUrls: ['./contestpage.component.css']
})

export class ContestpageComponent implements OnInit {
  status = 0;
  constructor() { }

  ngOnInit(): void {
  }
  question: question[] = [
    {queId:"1A",queName:"jack & hill",queContest:"aug1234",status:0},
    {queId:"2A",queName:"susu and party",queContest:"aug1234",status:1},
    {queId:"B",queName:"vipul and finger length",queContest:"aug1234",status:2}
  ];
  languageSelector: langOption[] = [
    {codingLanguage:"python3",extension:".py"},
    {codingLanguage:"java",extension:".java"},
    {codingLanguage:"javascript",extension:".js"}
  ];
  changeStatus(e:any){
    this.status = e['status'];

  }

}
