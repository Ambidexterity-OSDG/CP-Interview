import { Injectable } from '@angular/core';
import {RestService} from './rest.service';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ContestService {
  baseURL = "http://localhost:5000/"
  constructor(private restApi: RestService) { }

  getAllContest(status?:string){
    let url = this.baseURL+'contest/list/';
    if(status){
      url = url + status;
    }
    return this.restApi.get(url);
  }

  getAllQuestions(contestId:string){
    let url = this.baseURL+'contest/'+contestId;
    return this.restApi.get(url);
  }

  getPdfLink(contestId: string, problemId: string){
    let url = this.baseURL+'contest/'+ contestId + "/" + problemId;
    return this.restApi.get(url);
  }

  submitProblem(contestId: string, problemId: string, data: any) {
    let url = this.baseURL + "contest/submit/" + contestId + "/" + problemId;
    return this.restApi.post(url,data);
  }

}
