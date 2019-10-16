import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }