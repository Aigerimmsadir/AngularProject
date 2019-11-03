import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
            password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        });
    }
    onSubmit() {
        if (!this.form.valid) {
            console.log("kek");
            return;
        }
        //this.authService.token
        //this.auth
        const cred = this.form.value;
        this.authService.login(cred).
            pipe(mergeMap(result => {
            console.log(result);
            this.authService.token = result.token;
            return this.authService.currentUser();
        })).
            subscribe(user => {
            console.log(user);
            this.authService.user.next(user);
        }, error => {
            // handle error
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map