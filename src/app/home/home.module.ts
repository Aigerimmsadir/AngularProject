import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {HomeRoutingModule} from './home-routing.module';
import {AuthInterceptor} from '../AuthInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {CommentComponent} from './comment/comment.component';

@NgModule({
  declarations: [PostListComponent, SidebarComponent, CommentComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class HomeModule {
}
