import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./auth-routing.module";
import { HttpClientModule } from '@angular/common/http';
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            AppRoutingModule,
            HttpClientModule,
            CommonModule,
            ReactiveFormsModule,
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map