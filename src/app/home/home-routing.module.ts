import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentProfilesComponent} from '../shared/department-profiles/department-profiles.component';
import {ReportListComponent} from './report-list/report-list.component';
import {DepartmentListComponent} from '../shared/department-list/department-list.component';
import {DepartmentsResolver} from './departments-resolver';
const routes: Routes = [
  {path: 'posts', pathMatch: 'full', component: PostListComponent},
  {path: 'employees', pathMatch: 'full', component: DepartmentProfilesComponent},
  {path: 'reports', pathMatch: 'full', component: ReportListComponent},
  {path: 'departments', pathMatch: 'full', component: DepartmentListComponent,resolve:{departments:DepartmentsResolver}},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
