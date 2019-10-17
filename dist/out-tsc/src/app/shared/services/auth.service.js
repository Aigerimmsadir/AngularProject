import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.user = new BehaviorSubject(null);
    }
    get token() {
        return localStorage.getItem('Token');
    }
    set token(token) {
        localStorage.setItem('Token', token);
    }
    login(cred) {
        return this.http.post('127.0.0.1:8000/main/login/', JSON.stringify(cred));
    }
    currentUser() {
        return this.http.get('127.0.0.1:8000/main/users/me/');
    }
    userAsObservable() {
        return this.user.asObservable();
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map