import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
];
// const routes: Routes = []
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=auth-routing.module.js.map