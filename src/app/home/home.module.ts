import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {HomeRoutingModule} from './home-routing.module';
import {AuthInterceptor} from '../AuthInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {CommentComponent} from './comment/comment.component';
import {AppModule} from '../app.module';
import {ButtonBlueDirective} from '../shared/button-blue.directive';
import {ShortenTextPipe} from '../shared/shorten-text.pipe';
@NgModule({
  declarations: [PostListComponent, SidebarComponent, CommentComponent, ButtonBlueDirective, ShortenTextPipe],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class HomeModule {
}
