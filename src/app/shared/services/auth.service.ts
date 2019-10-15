import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);

  get token(): string {
    return localStorage.getItem('token');
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  constructor(private http: HttpClient) { }

  login(cred): Observable<any> {
    return this.http.post('127.0.0.1:8000/login', cred);
  }

  currentUser(): Observable<any> {
    return this.http.get('123jfjfa/me');
  }

  userAsObservable() {
    return this.user.asObservable();
  }

}
