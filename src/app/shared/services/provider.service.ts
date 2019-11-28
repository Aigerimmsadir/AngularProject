import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {
  }

  get token(): string {
    return localStorage.getItem('Token');
  }

  post_list(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/posts/', {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  post_detail(post_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/posts/${post_id}/`, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  profile_detail(profile_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/profiles/${profile_id}/`, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  user_detail(profile_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/users/${profile_id}/`, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  post_create(cred: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/posts/', JSON.stringify(cred), {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`})
    });
  }

  comment_list(post_id: any): Observable<any> {
    console.log(post_id)
    return this.http.get<any>(`http://127.0.0.1:8000/posts/${post_id}/comments/`, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`})
    });
  }
  comment_create(post_id: any, cred: any): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/posts/${post_id}/comments/`, JSON.stringify(cred), {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`})
    });
  }
}
