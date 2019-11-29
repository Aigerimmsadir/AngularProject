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
    return this.http.get<any>('http://127.0.0.1:8000/posts/');
  }
  post_detail(post_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/posts/${post_id}/`);
  }
  profiles_of_department(department_id:any): Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:8000/profiles/${department_id}/department_profiles/`);
  }
  departments_of_company(company_id:any): Observable<any>{
    return this.http.get<any>(`http://127.0.0.1:8000/departments/${company_id}/company_departments/`);
  }
  profile_detail(profile_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/profiles/${profile_id}/`)
  }
  user_detail(profile_id:any): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/users/${profile_id}/`);
  }
  post_create(cred: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/posts/', JSON.stringify(cred));
  }
  post_delete(post_id:any): Observable<any> {
    return this.http.delete<any>(`http://127.0.0.1:8000/posts/${post_id}/`);
  }
  comment_list(post_id: any): Observable<any> {
    console.log(post_id)
    return this.http.get<any>(`http://127.0.0.1:8000/posts/${post_id}/comments/`);
  }
  comment_create(post_id: any, cred: any): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:8000/posts/${post_id}/comments/`, JSON.stringify(cred)
    );
  }
}
