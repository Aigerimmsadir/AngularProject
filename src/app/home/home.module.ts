import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {HomeRoutingModule} from './home-routing.module';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {CommentComponent} from './comment/comment.component';
import {AppModule} from '../app.module';
import {ButtonBlueDirective} from '../shared/button-blue.directive';
import {ShortenTextPipe} from '../shared/shorten-text.pipe';
import {DateFormatPipe} from '../shared/date-format.pipe';
import {RightSideHeadersDirective} from '../shared/right-side-headers.directive';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {DepartmentProfilesComponent} from '../shared/department-profiles/department-profiles.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {ProfileShortComponent} from '../shared/profile-short/profile-short.component';
import {ReportListComponent} from './report-list/report-list.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {DepartmentListComponent} from '../shared/department-list/department-list.component';
import {MatSelectModule} from '@angular/material/select';
import {DepartmentsResolver} from './departments-resolver';
@NgModule({
  declarations: [PostListComponent,
    SidebarComponent,
    CommentComponent,
    ButtonBlueDirective,
    ShortenTextPipe,
    DateFormatPipe,
    RightSideHeadersDirective,
    PostDetailComponent,
    DepartmentProfilesComponent,
    FileUploadComponent,
    ProfileShortComponent,
    ReportListComponent,
    ReportDetailComponent,
    DepartmentListComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule

  ], entryComponents: [ProfileShortComponent
  ],
  providers: [DepartmentsResolver]
})
export class HomeModule {
}
