import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  // { path: '',
  // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  // ,

  {path: '', component: LoginComponent },
  { path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
