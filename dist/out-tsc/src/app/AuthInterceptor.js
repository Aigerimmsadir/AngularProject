import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor() {
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const authReq = req.clone({ headers: req.headers.set('Authorization', `JWT ${token}`) });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
AuthInterceptor = tslib_1.__decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=AuthInterceptor.js.map