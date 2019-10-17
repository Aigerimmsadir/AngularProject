import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
  get token(): string {
    return localStorage.getItem('Token');
  }

  post_list() : Observable<any>{
   return this.http.get<any>('http://127.0.0.1:8000/main/posts/',{
    headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `JWT ${this.token}`})})
  }
  

}
