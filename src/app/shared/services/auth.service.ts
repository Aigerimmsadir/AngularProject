import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<any>(null);

  get token(): string {
    return localStorage.getItem('Token');
  }

  set token(token: string) {
    localStorage.setItem('Token', token);
  }

  constructor(private http: HttpClient) {
    if (this.token) {
      this.currentUser().subscribe(user => this.user.next(user));
    }
  }

  login(cred: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/token/', JSON.stringify(cred), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  currentUser(): Observable<any> {
    const token = this.token;
    return this.http.get('http://127.0.0.1:8000/users/me/', {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})
    });
  }

  userAsObservable() {
    return this.user.asObservable();
  }

}
