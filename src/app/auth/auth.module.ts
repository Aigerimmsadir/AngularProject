import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthInterceptor} from '../AuthInterceptor'
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
}
)
export class AuthModule { }
