import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
