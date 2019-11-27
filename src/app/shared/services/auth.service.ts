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
  get refresh_token(): string {
    return localStorage.getItem('Refresh');
  }

  set refresh_token(refresh: string) {
    localStorage.setItem('Refresh', refresh);
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
  refresh(): Observable<any> {
    const refresh_token=this.refresh_token
    console.log(refresh_token)
    return this.http.post<any>('http://127.0.0.1:8000/api/refresh/', JSON.stringify({'refresh':refresh_token}), {
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
