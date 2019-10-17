import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'posts', pathMatch: 'full', component: PostListComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
