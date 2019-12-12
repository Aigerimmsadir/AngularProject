import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthInterceptor} from '../AuthInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';

@NgModule({
    declarations: [LoginComponent, ForgotPasswordFormComponent, PasswordFormComponent],
    imports: [
      AuthRoutingModule,
      CommonModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,
    ],
      entryComponents:[ForgotPasswordFormComponent,PasswordFormComponent],
    providers: [
      AuthModule,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ]
  }
)
export class AuthModule {
}
