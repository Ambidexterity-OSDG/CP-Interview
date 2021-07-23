import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  get(url: string, options: any={}):Observable<any>{
    options.headers = options.headers || new HttpHeaders();
    return this.http.get(url,options);
  }

  post(url: string, body: any|null, options: any={}):Observable<any>{
    options.headers = options.headers || new HttpHeaders();
    return this.http.post(url,body,options);
  }
  put(url: string, body: any|null, options: any={}):Observable<any>{
    options.headers = options.headers || new HttpHeaders();
    return this.http.put(url,body,options);
  }
  delete(url: string, options: any={}):Observable<any>{
    options.headers = options.headers || new HttpHeaders();
    return this.http.get(url,options);
  }
}
