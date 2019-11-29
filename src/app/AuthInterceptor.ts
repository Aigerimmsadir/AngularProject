
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router,private authService:AuthService) {
    
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
    }
 
    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            return;
            // console.log(this.authService)
            // this.authService.refresh().subscribe(
            //   res=>{
            //     console.log('here')
            //     this.authService.token=res.access
            //     const token =this.authService.token
            //     request = request.clone({
            //       setHeaders: {
            //         Authorization: `Bearer ${token}`
            //       }
            //     });
            //     return request;
            //   }
            // )
          }
          this.router.navigate(['login']);
        }
      }));
  }
}
