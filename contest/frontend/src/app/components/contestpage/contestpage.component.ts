import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContestService} from '../services/contest.service';

interface question {
  problemId: string;
  queContest: string;
  problemTitle: string;
  link: string;
  points?: number;
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
  @ViewChild('fileInput') filedone: any;
  status = 0;
  contestId = "";
  questionData:any;
  question: question[] = [];
  fileToUpload="example.py/js/java";
  fileData!: File;
  selectedProb = "";
  selectedLang = "";

  languageSelector: langOption[] = [
    {codingLanguage:"python3",extension:"py"},
    {codingLanguage:"java",extension:"java"},
    {codingLanguage:"javascript",extension:"js"}
  ];
  cpContestCol = [
    {name: "problemId", display: "QueId"},
    {name: "problemTitle", display: "Title"},
    {name: "actions", display: "actions"}
  ];

  constructor(private route: ActivatedRoute, private contestService: ContestService) { }

  ngOnInit(): void {
    this.contestId = this.route.snapshot.paramMap.get('id') || "";
    this.contestService.getAllQuestions(this.contestId).subscribe((data) => {
      if(data.data){
        for(const key in data.data){
          let value = data.data[key];
          value.status = 0;
          value.queContest = this.contestId;
          this.question.push(value);
          //why this extra variable as objects are not detected by changes in child
          this.questionData =this.question;
        }
      }
    });
  }

  onFileInput(event: any) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.fileToUpload = file.name
      this.fileData = file;
      console.warn(file,this.fileData);
    }
  }

  onSubmit(){
    let fd  = new FormData();
    fd.append('file', this.fileData);
    fd.append('language', this.selectedLang);
    let problem = this.selectedProb;
    this.contestService.submitProblem(this.contestId,problem,fd).subscribe((res)=>{
      this.updateStatus(problem, res.status);
    });
  }

  updateStatus(problem: string, status: number){
    this.question.forEach((data) => {
      if(data.problemId == problem) {
        data.status = status;
        this.status = status;
        this.filedone.nativeElement.value ="";
      }
    } )
  }

  changeProblem(e:any){
    console.log(e);
    let val = e.problemId;
    this.selectedProb = val;
    this.status = e.status;
    console.log(val,this.selectedProb);
  }

  changeLang(e:any) {
    this.selectedLang = e;
  }

}
