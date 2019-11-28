import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
const routes: Routes = [
  // { path: '',
  // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  // ,

  { path: '', component: LoginComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
