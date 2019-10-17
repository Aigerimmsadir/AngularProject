import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import {HomeRoutingModule} from './home-routing.module'
import {AuthInterceptor} from '../AuthInterceptor'
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
